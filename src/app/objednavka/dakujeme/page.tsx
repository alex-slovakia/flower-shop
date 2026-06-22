import type { Metadata } from "next";
import { OrderConfirmation } from "@/components/checkout/order-confirmation";
import "./confirmation.css";
export const metadata: Metadata = { title: "Ďakujeme" };
export default function ThankYouPage() { return <OrderConfirmation />; }
