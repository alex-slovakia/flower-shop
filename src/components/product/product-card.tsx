import Image from "next/image";
import Link from "next/link";
import type { Product } from "@/types/commerce";
import { formatPrice } from "@/lib/format";

export function ProductCard({ product, priority = false }: { product: Product; priority?: boolean }) {
  return <article className="product-card"><Link href={`/kytice/${product.slug}`} aria-label={`${product.name}, od ${formatPrice(product.variants[0].price)}`}><div className="product-media"><Image src={product.image} alt={`${product.name}, ${product.composition.toLocaleLowerCase("sk")}`} fill sizes="(max-width: 720px) 100vw, (max-width: 900px) 50vw, 33vw" priority={priority} />{product.availableToday && <span className="availability">Doručíme dnes</span>}</div><div className="product-card-meta"><div><h3>{product.name}</h3><p>{product.shortDescription}</p></div><strong>od {formatPrice(product.variants[0].price)}</strong></div></Link></article>;
}
