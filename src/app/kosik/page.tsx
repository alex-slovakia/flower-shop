import type { Metadata } from "next";
import { CartPageContent } from "@/components/cart/cart-page-content";
import "./cart.css";
export const metadata: Metadata = { title: "Košík" };
export default function CartPage() { return <><header className="page-top"><div className="shell"><h1 className="section-title">Váš košík</h1><p>Skontrolujte veľkosť, množstvo a odkaz. Doručenie nastavíte v ďalšom kroku.</p></div></header><section className="section shell"><CartPageContent /></section></>; }
