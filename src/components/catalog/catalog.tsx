"use client";

import { useMemo, useState } from "react";
import { ProductCard } from "@/components/product/product-card";
import { products } from "@/data/products";
import type { ColorMood, Occasion } from "@/types/commerce";

export function Catalog({ initialOccasion = "Všetky" }: { initialOccasion?: Occasion | "Všetky" }) {
  const [occasion, setOccasion] = useState<Occasion | "Všetky">(initialOccasion);
  const [color, setColor] = useState<ColorMood | "Všetky">("Všetky");
  const [today, setToday] = useState(false);
  const [sort, setSort] = useState("featured");
  const filtered = useMemo(() => products.filter((p) => (occasion === "Všetky" || p.occasion.includes(occasion)) && (color === "Všetky" || p.colorMood === color) && (!today || p.availableToday)).sort((a, b) => sort === "low" ? a.variants[0].price - b.variants[0].price : sort === "high" ? b.variants[0].price - a.variants[0].price : Number(Boolean(b.featured)) - Number(Boolean(a.featured))), [occasion, color, today, sort]);
  return <><div className="catalog-tools"><label className="field">Príležitosť<select className="select" value={occasion} onChange={(e) => setOccasion(e.target.value as Occasion | "Všetky")}><option>Všetky</option>{["Láska", "Narodeniny", "Poďakovanie", "Len tak", "Súcit"].map((x) => <option key={x}>{x}</option>)}</select></label><label className="field">Farebnosť<select className="select" value={color} onChange={(e) => setColor(e.target.value as ColorMood | "Všetky")}><option>Všetky</option>{["Jemná", "Výrazná", "Svieža", "Monochromatická"].map((x) => <option key={x}>{x}</option>)}</select></label><label className="field">Zoradenie<select className="select" value={sort} onChange={(e) => setSort(e.target.value)}><option value="featured">Odporúčané</option><option value="low">Cena od najnižšej</option><option value="high">Cena od najvyššej</option></select></label><label className="today-check"><input type="checkbox" checked={today} onChange={(e) => setToday(e.target.checked)} /> Doručenie dnes</label></div><p className="muted" aria-live="polite" style={{ marginBottom: "2rem" }}>{filtered.length} {filtered.length === 1 ? "kytica" : filtered.length < 5 ? "kytice" : "kytíc"}</p>{filtered.length ? <div className="product-grid">{filtered.map((product) => <ProductCard key={product.id} product={product} />)}</div> : <div className="empty-state"><div><h2>Nič presne také dnes nemáme</h2><p className="muted" style={{ marginTop: ".7rem" }}>Skúste zrušiť jeden filter alebo pozrite celý dnešný výber.</p><button className="button secondary" style={{ marginTop: "1.5rem" }} onClick={() => { setOccasion("Všetky"); setColor("Všetky"); setToday(false); }}>Zrušiť filtre</button></div></div>}</>;
}
