"use client";

import Image from "next/image";
import Link from "next/link";
import { FlowerTulip, Minus, Plus, Trash, X } from "@phosphor-icons/react";
import { motion, useReducedMotion } from "motion/react";
import { useEffect, useRef } from "react";
import { getProductById } from "@/data/products";
import { formatPrice } from "@/lib/format";
import { useCart } from "./cart-provider";

export function CartDrawer() {
  const reduce = useReducedMotion();
  const { items, closeCart, updateQuantity, removeItem } = useCart();
  const drawerRef = useRef<HTMLElement>(null);
  useEffect(() => {
    const previousFocus = document.activeElement as HTMLElement | null;
    drawerRef.current?.focus();
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeCart();
      if (event.key === "Tab" && drawerRef.current) {
        const focusable = Array.from(drawerRef.current.querySelectorAll<HTMLElement>("a[href], button:not([disabled]), input, select, textarea, [tabindex]:not([tabindex='-1'])"));
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last?.focus(); }
        if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first?.focus(); }
      }
    };
    document.addEventListener("keydown", onKeyDown);
    return () => { document.removeEventListener("keydown", onKeyDown); previousFocus?.focus(); };
  }, [closeCart]);
  const rows = items.flatMap((item) => { const product = getProductById(item.productId); const variant = product?.variants.find((v) => v.id === item.variantId); return product && variant ? [{ item, product, variant }] : []; });
  const subtotal = rows.reduce((sum, row) => sum + row.variant.price * row.item.quantity, 0);
  return <motion.aside ref={drawerRef} tabIndex={-1} className="cart-drawer" role="dialog" aria-modal="true" aria-label="Nákupný košík" initial={{ x: reduce ? 0 : "100%", opacity: reduce ? 0 : 1 }} animate={{ x: 0, opacity: 1 }} exit={{ x: reduce ? 0 : "100%", opacity: reduce ? 0 : 1 }} transition={{ duration: .36, ease: [.22, 1, .36, 1] }}>
    <div className="drawer-head"><h2 style={{ fontSize: "1.25rem", fontWeight: 650 }}>Váš košík</h2><button className="icon-button" onClick={closeCart} aria-label="Zavrieť košík"><X size={20} /></button></div>
    {rows.length === 0 ? <div className="empty-state"><div><ShoppingFlower /><h3 style={{ fontSize: "1.5rem", marginTop: "1rem" }}>Košík čaká na kvety</h3><p className="muted" style={{ margin: ".7rem 0 1.5rem", lineHeight: 1.6 }}>Vyberte kyticu, veľkosť a deň doručenia. O zvyšok sa postaráme.</p><Link className="button" href="/kytice" onClick={closeCart}>Vybrať kyticu</Link></div></div> : <><div className="drawer-items">{rows.map(({ item, product, variant }) => <div className="cart-row" key={item.key}><div className="cart-thumb"><Image src={product.image} alt={product.name} fill sizes="92px" /></div><div><strong>{product.name}</strong><div className="muted" style={{ fontSize: ".82rem", marginTop: ".25rem" }}>{variant.name} · {variant.stemCount} stoniek</div><div className="quantity" aria-label={`Množstvo produktu ${product.name}`}><button onClick={() => updateQuantity(item.key, item.quantity - 1)} aria-label="Znížiť množstvo"><Minus size={14} /></button><span>{item.quantity}</span><button onClick={() => updateQuantity(item.key, item.quantity + 1)} aria-label="Zvýšiť množstvo"><Plus size={14} /></button></div></div><div style={{ display: "grid", justifyItems: "end", alignContent: "space-between" }}><strong>{formatPrice(variant.price * item.quantity)}</strong><button style={{ border: 0, background: "transparent", color: "var(--muted)" }} onClick={() => removeItem(item.key)} aria-label={`Odstrániť ${product.name}`}><Trash size={18} /></button></div></div>)}</div><div className="drawer-summary"><div className="summary-line"><span>Medzisúčet</span><strong>{formatPrice(subtotal)}</strong></div><p className="muted" style={{ fontSize: ".82rem" }}>Doručenie vypočítame v pokladni.</p><Link className="button full" href="/pokladna" onClick={closeCart}>Prejsť do pokladne</Link><Link className="button secondary full" href="/kosik" onClick={closeCart}>Zobraziť celý košík</Link></div></>}
  </motion.aside>;
}

function ShoppingFlower() { return <div aria-hidden="true" style={{ width: 64, height: 64, margin: "auto", borderRadius: "50%", border: "1px solid var(--line)", display: "grid", placeItems: "center", color: "var(--primary)" }}><FlowerTulip size={30} weight="thin" /></div>; }
