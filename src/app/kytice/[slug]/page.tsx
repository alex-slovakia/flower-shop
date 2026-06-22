import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ProductCard } from "@/components/product/product-card";
import { AddToCartForm } from "@/components/product/add-to-cart-form";
import { getProduct, products } from "@/data/products";
import "./product.css";

export function generateStaticParams() { return products.map(({ slug }) => ({ slug })); }
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> { const { slug } = await params; const product = getProduct(slug); return product ? { title: product.name, description: product.shortDescription } : {}; }

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params; const product = getProduct(slug); if (!product) notFound();
  const related = products.filter((item) => item.id !== product.id && item.occasion.some((occasion) => product.occasion.includes(occasion))).slice(0, 3);
  return <><section className="product-detail shell"><div className="detail-gallery"><div className="detail-main"><Image src={product.image} alt={`${product.name}: ${product.composition.toLocaleLowerCase("sk")}`} fill priority sizes="(max-width: 850px) 100vw, 58vw" /></div><div className="detail-secondary"><Image src={product.gallery[1]} alt={`Detail kytice ${product.name}`} fill sizes="(max-width: 850px) 100vw, 28vw" /></div></div><div className="detail-copy"><div><p className="muted">{product.occasion.join(" · ")}</p><h1>{product.name}</h1><p className="detail-lede">{product.description}</p><dl className="product-facts"><div><dt>Zloženie</dt><dd>{product.composition}</dd></div><div><dt>Dostupnosť</dt><dd>{product.availableToday ? "Doručenie ešte dnes" : "Najskôr nasledujúci pracovný deň"}</dd></div></dl></div><AddToCartForm product={product} /></div></section><section className="section shell"><div className="home-heading"><h2 className="section-title">Možno trafí aj toto</h2></div><div className="product-grid">{related.map((item) => <ProductCard key={item.id} product={item} />)}</div></section></>;
}
