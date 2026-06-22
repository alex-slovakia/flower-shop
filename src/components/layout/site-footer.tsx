import Link from "next/link";

export function SiteFooter() {
  return <footer className="site-footer"><div className="shell"><div className="footer-grid"><div><div className="brand">LÚKA<span>.</span></div><p className="muted" style={{ maxWidth: "28rem", marginTop: "1rem", lineHeight: 1.7 }}>Kvety viazané v Bratislave pre chvíle, ktoré nechcete nechať na zajtra.</p></div><div className="footer-links"><strong>Obchod</strong><Link href="/kytice">Všetky kytice</Link><Link href="/kosik">Košík</Link><Link href="/pokladna">Pokladňa</Link></div><div className="footer-links"><strong>LÚKA</strong><Link href="/o-nas">O nás</Link><Link href="/dorucenie-a-kontakt">Doručenie a kontakt</Link><a href="mailto:ahoj@luka.demo">ahoj@luka.demo</a></div></div><div className="footer-note"><span>© 2026 LÚKA Bratislava</span><span>Portfóliový demo projekt, objednávky sa nespracúvajú.</span></div></div></footer>;
}
