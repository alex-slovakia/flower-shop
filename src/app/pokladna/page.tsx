import type { Metadata } from "next";
import { CheckoutForm } from "@/components/checkout/checkout-form";
import "./checkout.css";
export const metadata: Metadata = { title: "Pokladňa" };
export default function CheckoutPage() { return <><header className="page-top"><div className="shell"><h1 className="section-title">Doručenie a platba</h1><p>Niekoľko presných údajov a kvety môžu vyraziť. V tomto deme sa nič neodošle ani nezaúčtuje.</p></div></header><section className="section shell"><CheckoutForm /></section></>; }
