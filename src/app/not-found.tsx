import Link from "next/link";
export default function NotFound() { return <section className="confirmation shell"><p>404</p><h1 className="section-title">Táto kytica tu nekvitne.</h1><p className="muted confirmation-copy">Stránka sa mohla presunúť alebo už nie je dostupná.</p><Link className="button" href="/kytice">Pozrieť kytice</Link></section>; }
