"use client";

import { cloneElement, useMemo, useState, type ReactElement } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { CheckCircle, CreditCard, Truck } from "@phosphor-icons/react";
import { useCart } from "@/components/cart/cart-provider";
import { bratislavaDistricts, deliverySlots } from "@/data/delivery";
import { getProductById } from "@/data/products";
import { formatPrice } from "@/lib/format";
import type { CustomerDetails, DemoOrder, PaymentMethod } from "@/types/commerce";

type Errors = Partial<Record<keyof CustomerDetails | "cardNumber" | "expiry" | "cvc", string>>;
const initialCustomer: CustomerDetails = { email: "", phone: "", recipientName: "", street: "", district: "Staré Mesto", postalCode: "", message: "" };

export function CheckoutForm() {
  const router = useRouter();
  const { items, hydrated, clearCart } = useCart();
  const [customer, setCustomer] = useState(initialCustomer);
  const [slotId, setSlotId] = useState(deliverySlots[1].id);
  const [payment, setPayment] = useState<PaymentMethod>("card");
  const [cardNumber, setCardNumber] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvc, setCvc] = useState("");
  const [errors, setErrors] = useState<Errors>({});
  const [submitting, setSubmitting] = useState(false);
  const rows = useMemo(() => items.flatMap((item) => { const product = getProductById(item.productId); const variant = product?.variants.find((v) => v.id === item.variantId); return product && variant ? [{ item, product, variant }] : []; }), [items]);
  const subtotal = rows.reduce((sum, row) => sum + row.variant.price * row.item.quantity, 0);
  const slot = deliverySlots.find((item) => item.id === slotId)!;
  const total = subtotal + slot.price;
  const setField = (field: keyof CustomerDetails, value: string) => { setCustomer((current) => ({ ...current, [field]: value })); if (errors[field]) setErrors((current) => ({ ...current, [field]: undefined })); };
  const validate = () => {
    const next: Errors = {};
    if (!/^\S+@\S+\.\S+$/.test(customer.email)) next.email = "Zadajte platný e-mail.";
    if (customer.phone.replace(/\D/g, "").length < 9) next.phone = "Zadajte platné telefónne číslo.";
    if (customer.recipientName.trim().length < 3) next.recipientName = "Zadajte meno príjemcu.";
    if (customer.street.trim().length < 5) next.street = "Zadajte ulicu a číslo.";
    if (!/^\d{3}\s?\d{2}$/.test(customer.postalCode)) next.postalCode = "Použite formát 811 01.";
    if (payment === "card") { if (cardNumber.replace(/\s/g, "").length !== 16) next.cardNumber = "Demo karta musí mať 16 číslic."; if (!/^\d{2}\/\d{2}$/.test(expiry)) next.expiry = "Použite formát MM/RR."; if (!/^\d{3}$/.test(cvc)) next.cvc = "Zadajte 3 číslice."; }
    setErrors(next); return Object.keys(next).length === 0;
  };
  const submit = (event: React.FormEvent) => { event.preventDefault(); if (!validate()) { document.querySelector<HTMLElement>("[aria-invalid='true']")?.focus(); return; } setSubmitting(true); const order: DemoOrder = { id: `LUKA-${window.crypto.randomUUID().slice(0, 6).toUpperCase()}`, items, customer, paymentMethod: payment, deliverySlot: slot, total, createdAt: new Date().toISOString() }; sessionStorage.setItem("luka-last-order", JSON.stringify(order)); window.setTimeout(() => { clearCart(); router.push("/objednavka/dakujeme"); }, 700); };
  if (!hydrated) return <div className="checkout-loading"><div /><div /></div>;
  if (!rows.length) return <div className="empty-state"><div><h2>Pokladňa je prázdna</h2><p className="muted" style={{ margin: ".7rem 0 1.5rem" }}>Najprv si vyberte kyticu.</p><Link className="button" href="/kytice">Prejsť ku kyticiam</Link></div></div>;
  return <form onSubmit={submit} noValidate className="checkout-grid"><div className="checkout-fields"><section className="form-section"><h2>Kontakt</h2><div className="form-grid"><Field label="E-mail" id="email" error={errors.email}><input className="input" id="email" type="email" autoComplete="email" value={customer.email} onChange={(e) => setField("email", e.target.value)} aria-invalid={Boolean(errors.email)} /></Field><Field label="Telefón" id="phone" error={errors.phone}><input className="input" id="phone" type="tel" autoComplete="tel" placeholder="+421 900 000 000" value={customer.phone} onChange={(e) => setField("phone", e.target.value)} aria-invalid={Boolean(errors.phone)} /></Field></div></section><section className="form-section"><h2>Kam kvety doručíme</h2><div className="form-grid"><Field label="Meno príjemcu" id="recipientName" error={errors.recipientName} wide><input className="input" id="recipientName" autoComplete="name" value={customer.recipientName} onChange={(e) => setField("recipientName", e.target.value)} aria-invalid={Boolean(errors.recipientName)} /></Field><Field label="Ulica a číslo" id="street" error={errors.street} wide><input className="input" id="street" autoComplete="street-address" value={customer.street} onChange={(e) => setField("street", e.target.value)} aria-invalid={Boolean(errors.street)} /></Field><Field label="Mestská časť" id="district"><select className="select" id="district" value={customer.district} onChange={(e) => setField("district", e.target.value)}>{bratislavaDistricts.map((item) => <option key={item}>{item}</option>)}</select></Field><Field label="PSČ" id="postalCode" error={errors.postalCode}><input className="input" id="postalCode" inputMode="numeric" autoComplete="postal-code" placeholder="811 01" value={customer.postalCode} onChange={(e) => setField("postalCode", e.target.value)} aria-invalid={Boolean(errors.postalCode)} /></Field><Field label="Poznámka pre kuriéra" id="message" wide><textarea className="textarea" id="message" placeholder="Zvonček, poschodie alebo časové obmedzenie" value={customer.message} onChange={(e) => setField("message", e.target.value)} /></Field></div></section><section className="form-section"><fieldset><legend>Čas doručenia</legend><div className="choice-list">{deliverySlots.map((item) => <label className={slotId === item.id ? "choice active" : "choice"} key={item.id}><input type="radio" name="slot" value={item.id} checked={slotId === item.id} onChange={() => setSlotId(item.id)} /><Truck size={22} /><span><strong>{item.label}</strong><small>{item.id === "rychle" ? "Najrýchlejšia dostupná trasa" : "Osobné odovzdanie kuriérom"}</small></span><b>{formatPrice(item.price)}</b></label>)}</div></fieldset></section><section className="form-section"><fieldset><legend>Platba</legend><div className="payment-tabs"><label className={payment === "card" ? "active" : ""}><input type="radio" name="payment" checked={payment === "card"} onChange={() => setPayment("card")} /><CreditCard size={20} /> Demo karta</label><label className={payment === "cash_on_delivery" ? "active" : ""}><input type="radio" name="payment" checked={payment === "cash_on_delivery"} onChange={() => setPayment("cash_on_delivery")} /><CheckCircle size={20} /> Dobierka</label></div>{payment === "card" && <div className="form-grid card-fields"><Field label="Číslo demo karty" id="cardNumber" error={errors.cardNumber} wide><input className="input" id="cardNumber" inputMode="numeric" placeholder="4242 4242 4242 4242" value={cardNumber} onChange={(e) => setCardNumber(e.target.value.replace(/[^\d]/g, "").slice(0, 16).replace(/(.{4})/g, "$1 ").trim())} aria-invalid={Boolean(errors.cardNumber)} /></Field><Field label="Platnosť" id="expiry" error={errors.expiry}><input className="input" id="expiry" placeholder="MM/RR" value={expiry} onChange={(e) => setExpiry(e.target.value.slice(0, 5))} aria-invalid={Boolean(errors.expiry)} /></Field><Field label="CVC" id="cvc" error={errors.cvc}><input className="input" id="cvc" inputMode="numeric" placeholder="123" value={cvc} onChange={(e) => setCvc(e.target.value.replace(/\D/g, "").slice(0, 3))} aria-invalid={Boolean(errors.cvc)} /></Field></div>}<p className="demo-notice">Toto je portfóliové demo. Údaje sa nikam neodosielajú a platba sa nevykoná.</p></fieldset></section></div><aside className="checkout-summary"><h2>Vaša objednávka</h2>{rows.map(({ item, product, variant }) => <div className="checkout-item" key={item.key}><span>{item.quantity}×</span><div><strong>{product.name}</strong><small>{variant.name}</small></div><b>{formatPrice(variant.price * item.quantity)}</b></div>)}<div className="summary-line"><span>Medzisúčet</span><span>{formatPrice(subtotal)}</span></div><div className="summary-line"><span>Doručenie</span><span>{formatPrice(slot.price)}</span></div><div className="summary-line checkout-total"><strong>Spolu</strong><strong>{formatPrice(total)}</strong></div><button className="button full" type="submit" disabled={submitting}>{submitting ? "Pripravujeme potvrdenie…" : "Dokončiť demo objednávku"}</button><p className="muted" style={{ fontSize: ".78rem", lineHeight: 1.5 }}>Kliknutím nevzniká skutočná objednávka ani platobná povinnosť.</p></aside></form>;
}

function Field({ label, id, error, wide, children }: { label: string; id: string; error?: string; wide?: boolean; children: ReactElement<{ "aria-describedby"?: string }> }) { return <div className="field" style={wide ? { gridColumn: "1 / -1" } : undefined}><label htmlFor={id}>{label}</label>{cloneElement(children, { "aria-describedby": error ? `${id}-error` : undefined })}{error && <span className="field-error" id={`${id}-error`}>{error}</span>}</div>; }
