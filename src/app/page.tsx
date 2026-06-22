import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Clock, MapPin, Scissors } from "@phosphor-icons/react/dist/ssr";
import { CinematicHero } from "@/components/home/cinematic-hero";
import { Reveal } from "@/components/home/reveal";
import { ScrollFilmSequence } from "@/components/home/scroll-film-sequence";
import { ProductCard } from "@/components/product/product-card";
import { products } from "@/data/products";
import "./home.css";

export default function HomePage() {
  const featured = products.filter((product) => product.featured);
  return <>
    <CinematicHero />
    <section className="occasion-strip" aria-label="Výber podľa príležitosti"><div className="shell occasion-row">{["Láska", "Narodeniny", "Poďakovanie", "Len tak", "Súcit"].map((item) => <Link key={item} href={`/kytice?prilezitost=${encodeURIComponent(item)}`}>{item}<ArrowRight size={14} /></Link>)}</div></section>
    <section className="section shell"><Reveal><div className="home-heading"><h2 className="section-title">Dnešný výber</h2><Link className="text-link" href="/kytice">Pozrieť všetky kytice <ArrowRight size={16} /></Link></div></Reveal><div className="product-grid">{featured.map((product, index) => <ProductCard key={product.id} product={product} priority={index < 2} />)}</div></section>
    <section className="story-stage"><div className="story-photo"><Image src="/media/studio.webp" alt="Floristka viaže sezónnu kyticu na pracovnom stole" fill sizes="100vw" /></div><div className="story-copy shell"><Reveal><p>Nie sklad. Ateliér.</p><h2 className="section-title">Každá kytica vznikne až po objednávke.</h2><Link className="button secondary" href="/o-nas">Spoznať náš prístup</Link></Reveal></div></section>
    <ScrollFilmSequence />
    <section className="section shell delivery-story"><div><p className="muted">Doručenie bez hádania</p><h2 className="section-title">Od stonky po dvere v troch presných krokoch.</h2></div><div className="steps"><div><Clock size={28} /><strong>Vyberiete čas</strong><p>Ukážeme iba sloty, ktoré vieme dodržať.</p></div><div><Scissors size={28} /><strong>Viažeme čerstvo</strong><p>Kyticu pripravíme v deň doručenia.</p></div><div><MapPin size={28} /><strong>Ideme po Bratislave</strong><p>Kuriér odovzdá kvety osobne príjemcovi.</p></div></div></section>
    <section className="final-cta shell"><div><p>Kvety netreba odkladať.</p><h2 className="section-title">Vyberte gesto, ktoré príde ešte dnes.</h2></div><Link className="button" href="/kytice">Nájsť kyticu <ArrowRight size={18} /></Link></section>
  </>;
}
