"use client";

import Link from "next/link";
import { List, ShoppingBag, X } from "@phosphor-icons/react";
import { useState } from "react";
import { useCart } from "@/components/cart/cart-provider";

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { count, openCart } = useCart();
  const cartLabel = count === 1 ? "1 položka" : count > 1 && count < 5 ? `${count} položky` : `${count} položiek`;
  return (
    <header className="site-header">
      <nav className="nav shell" aria-label="Hlavná navigácia">
        <Link className="brand" href="/" aria-label="LÚKA, domov">LÚKA<span>.</span></Link>
        <div className="nav-links">
          <Link href="/kytice">Kytice</Link><Link href="/o-nas">O nás</Link><Link href="/dorucenie-a-kontakt">Doručenie</Link>
        </div>
        <div className="nav-actions">
          <button className="icon-button mobile-menu" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? "Zavrieť menu" : "Otvoriť menu"} aria-expanded={menuOpen}>
            {menuOpen ? <X size={20} /> : <List size={20} />}
          </button>
          <button className="icon-button" onClick={openCart} aria-label={`Otvoriť košík, ${cartLabel}`}>
            <ShoppingBag size={20} weight="regular" />{count > 0 && <span className="cart-count">{count}</span>}
          </button>
        </div>
      </nav>
      {menuOpen && <div style={{ background: "var(--surface)", borderTop: "1px solid var(--line)" }}><div className="shell" style={{ display: "grid", gap: "1rem", paddingBlock: "1.4rem" }}><Link href="/kytice" onClick={() => setMenuOpen(false)}>Kytice</Link><Link href="/o-nas" onClick={() => setMenuOpen(false)}>O nás</Link><Link href="/dorucenie-a-kontakt" onClick={() => setMenuOpen(false)}>Doručenie a kontakt</Link></div></div>}
    </header>
  );
}
