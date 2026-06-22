"use client";

import Image from "next/image";
import Link from "next/link";
import { Minus, Plus, Trash } from "@phosphor-icons/react";
import { useCart } from "./cart-provider";
import { getProductById } from "@/data/products";
import { formatPrice } from "@/lib/format";

export function CartPageContent() {
  const { items, hydrated, updateQuantity, removeItem } = useCart();
  const rows = items.flatMap((item) => { const product = getProductById(item.productId); const variant = product?.variants.find((v) => v.id === item.variantId); return product && variant ? [{ item, product, variant }] : []; });
  const subtotal = rows.reduce((sum, row) => sum + row.variant.price * row.item.quantity, 0);
  if (!hydrated) return <div className="cart-skeleton" aria-label="Načítavam košík"><div /><div /></div>;
  if (!rows.length) return <div className="empty-state"><div><h2 className="section-title">Zatiaľ je tu ticho.</h2><p className="muted" style={{ margin: "1rem 0 1.5rem", lineHeight: 1.6 }}>Pridajte kyticu a vráťte sa sem dokončiť doručenie.</p><Link className="button" href="/kytice">Vybrať kyticu</Link></div></div>;
  return <div className="cart-page-grid"><div className="cart-page-list">{rows.map(({ item, product, variant }) => <article className="cart-page-row" key={item.key}><div className="cart-page-thumb"><Image src={product.image} alt={product.name} fill sizes="150px" /></div><div><h2>{product.name}</h2><p className="muted">{variant.name} · {variant.stemCount} stoniek</p>{item.deliveryDate && <p className="muted">Doručenie: {new Intl.DateTimeFormat("sk-SK").format(new Date(`${item.deliveryDate}T12:00:00`))}</p>}{item.note && <p style={{ marginTop: ".8rem" }}>„{item.note}“</p>}<div className="quantity"><button onClick={() => updateQuantity(item.key, item.quantity - 1)} aria-label="Znížiť množstvo"><Minus size={14} /></button><span>{item.quantity}</span><button onClick={() => updateQuantity(item.key, item.quantity + 1)} aria-label="Zvýšiť množstvo"><Plus size={14} /></button></div></div><div className="cart-page-price"><strong>{formatPrice(variant.price * item.quantity)}</strong><button onClick={() => removeItem(item.key)} aria-label={`Odstrániť ${product.name}`}><Trash size={18} /></button></div></article>)}</div><aside className="order-summary"><h2>Súhrn</h2><div className="summary-line"><span>Medzisúčet</span><strong>{formatPrice(subtotal)}</strong></div><div className="summary-line muted"><span>Doručenie</span><span>v pokladni</span></div><div className="summary-line total"><span>Spolu zatiaľ</span><strong>{formatPrice(subtotal)}</strong></div><Link className="button full" href="/pokladna">Pokračovať do pokladne</Link><Link className="button secondary full" href="/kytice">Pridať ďalšiu kyticu</Link></aside></div>;
}
