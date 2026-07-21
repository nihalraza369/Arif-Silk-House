import { Cormorant_Garamond, Jost } from "next/font/google";
import "./globals.css";
import { CartProvider } from "@/context/CartContext";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

const jost = Jost({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-jost",
  display: "swap",
});

export const metadata = {
  title: "Arif Silk House | Bridal Boutique, Tariq Road Karachi",
  description:
    "Arif Silk House is a bridal boutique on Tariq Road, Karachi, specialising in Pakistani wedding dresses for the dulhan — barat, walima and mehndi lehengas made to measure.",
  keywords: [
    "bridal boutique Karachi",
    "Arif Silk House",
    "Pakistani wedding dresses",
    "Tariq Road bridal shop",
    "dulhan dresses Karachi",
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${cormorant.variable} ${jost.variable}`}>
      <body className="font-body bg-ivory text-ink antialiased">
        <CartProvider>{children}</CartProvider>
      </body>
    </html>
  );
}
