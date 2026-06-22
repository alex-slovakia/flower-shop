"use client";

import Link from "next/link";
import { CheckCircle } from "@phosphor-icons/react";
import { useEffect, useState } from "react";
import type { DemoOrder } from "@/types/commerce";
import { formatPrice } from "@/lib/format";

export function OrderConfirmation() {
  const [order, setOrder] = useState<DemoOrder | null>(null);
  useEffect(() => { const saved = sessionStorage.getItem("luka-last-order"); if (saved) {
    // Read the result of the client-only demo checkout after hydration.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setOrder(JSON.parse(saved));
  } }, []);
  return <section className="confirmation shell"><CheckCircle size={58} weight="thin" /><p>Demo objednávka prijatá</p><h1 className="section-title">Kvety sú pripravené vyraziť.</h1>{order ? <div className="confirmation-box"><div><span>Číslo objednávky</span><strong>{order.id}</strong></div><div><span>Doručenie</span><strong>{order.deliverySlot.label}</strong></div><div><span>Príjemca</span><strong>{order.customer.recipientName}</strong></div><div><span>Demo suma</span><strong>{formatPrice(order.total)}</strong></div></div> : <p className="muted">Toto potvrdenie je ukážkové. Žiadna skutočná objednávka nevznikla.</p>}<p className="muted confirmation-copy">V skutočnom obchode by teraz prišiel e-mail a SMS s priebehom doručenia. V tomto portfóliovom deme údaje zostali iba vo vašom prehliadači.</p><Link className="button" href="/kytice">Pozrieť ďalšie kytice</Link></section>;
}
