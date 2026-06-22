import type { Metadata } from "next";
import { Catalog } from "@/components/catalog/catalog";
import "./catalog.css";
export const metadata: Metadata = { title: "Kytice", description: "Vyberte si z 12 čerstvých kytíc s doručením po Bratislave." };
const occasions = ["Láska", "Narodeniny", "Poďakovanie", "Len tak", "Súcit"] as const;
export default async function CatalogPage({ searchParams }: { searchParams: Promise<{ prilezitost?: string }> }) { const { prilezitost } = await searchParams; const initialOccasion = occasions.includes(prilezitost as (typeof occasions)[number]) ? prilezitost as (typeof occasions)[number] : "Všetky"; return <><header className="page-top"><div className="shell"><h1 className="section-title">Kytice pre dnešok</h1><p>Viažeme ich až po objednávke. Každá môže byť malá, stredná alebo veľká a väčšinu doručíme ešte dnes.</p></div></header><section className="section shell"><Catalog initialOccasion={initialOccasion} /></section></>; }
