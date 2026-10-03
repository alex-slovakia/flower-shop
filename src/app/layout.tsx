import type { Metadata } from "next";
import "@fontsource-variable/manrope/index.css";
import "./globals.css";
import { CartProvider } from "@/components/cart/cart-provider";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://kvetinyluka.aiasistentka.com"),
  title: { default: "LÚKA Bratislava | Kvety doručené dnes", template: "%s | LÚKA" },
  description: "Súčasné kytice viazané v Bratislave a doručené ešte dnes. Portfóliový demo e-shop.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="sk" data-scroll-behavior="smooth">
      <body>
        <a className="skip-link" href="#obsah">Preskočiť na obsah</a>
        <CartProvider>
          <SiteHeader />
          <main id="obsah">{children}</main>
          <SiteFooter />
        </CartProvider>
      </body>
    </html>
  );
}
