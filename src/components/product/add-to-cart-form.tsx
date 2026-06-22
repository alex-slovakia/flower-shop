"use client";

import { useState } from "react";
import { Check, Minus, Plus } from "@phosphor-icons/react";
import type { Product } from "@/types/commerce";
import { formatPrice, todayIso } from "@/lib/format";
import { useCart } from "@/components/cart/cart-provider";

export function AddToCartForm({ product }: { product: Product }) {
  const [variantId, setVariantId] = useState(product.variants[1].id);
  const [quantity, setQuantity] = useState(1);
  const [note, setNote] = useState("");
  const [date, setDate] = useState(todayIso());
  const [added, setAdded] = useState(false);
  const { addItem } = useCart();
  const variant = product.variants.find((item) => item.id === variantId)!;
  const submit = (event: React.FormEvent) => { event.preventDefault(); addItem({ productId: product.id, variantId, quantity, note: note.trim() || undefined, deliveryDate: date }); setAdded(true); window.setTimeout(() => setAdded(false), 2200); };
  return <form onSubmit={submit} className="buy-form"><fieldset><legend className="legend">Veľkosť kytice</legend><div className="variant-grid">{product.variants.map((item) => <label key={item.id} className={variantId === item.id ? "variant active" : "variant"}><input type="radio" name="variant" value={item.id} checked={variantId === item.id} onChange={() => setVariantId(item.id)} /><strong>{item.name}</strong><span>{item.stemCount} stoniek</span><b>{formatPrice(item.price)}</b></label>)}</div></fieldset><div className="field"><label htmlFor="delivery-date">Deň doručenia</label><input id="delivery-date" className="input" type="date" min={todayIso()} value={date} onChange={(e) => setDate(e.target.value)} required /></div><div className="field"><label htmlFor="note">Odkaz na kartičku <span className="muted">(voliteľný)</span></label><textarea id="note" className="textarea" maxLength={180} placeholder="Napíšte pár slov pre príjemcu" value={note} onChange={(e) => setNote(e.target.value)} /><span className="muted" style={{ fontSize: ".78rem", textAlign: "right" }}>{note.length}/180</span></div><div className="buy-actions"><div className="quantity"><button type="button" onClick={() => setQuantity(Math.max(1, quantity - 1))} aria-label="Znížiť množstvo"><Minus size={14} /></button><span>{quantity}</span><button type="button" onClick={() => setQuantity(quantity + 1)} aria-label="Zvýšiť množstvo"><Plus size={14} /></button></div><button className="button" type="submit">{added ? <><Check size={18} /> Pridané do košíka</> : `Pridať za ${formatPrice(variant.price * quantity)}`}</button></div></form>;
}
