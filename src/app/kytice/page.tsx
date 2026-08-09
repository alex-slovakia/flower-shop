import type { Metadata } from "next";
import { Suspense } from "react";
import { CatalogFromSearchParams } from "@/components/catalog/catalog";
import "./catalog.css";
export const metadata: Metadata = { title: "Kytice", description: "Vyberte si z 12 čerstvých kytíc s doručením po Bratislave." };
export default function CatalogPage() { return <><header className="page-top"><div className="shell"><h1 className="section-title">Kytice pre dnešok</h1><p>Viažeme ich až po objednávke. Každá môže byť malá, stredná alebo veľká a väčšinu doručíme ešte dnes.</p></div></header><section className="section shell"><Suspense fallback={<p className="muted">Načítavam dnešný výber…</p>}><CatalogFromSearchParams /></Suspense></section></>; }
