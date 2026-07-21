"use client";

import { useCart } from "@/context/CartContext";

const links = [
  { href: "/shop", label: "Shop" },
  { href: "/#about", label: "About" },
  { href: "/#gallery", label: "Gallery" },
  { href: "/#reviews", label: "Reviews" },
  { href: "/#visit", label: "Visit" },
];

export default function Header() {
  const { totalItems, setIsOpen } = useCart();

  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-ivory/90 backdrop-blur-sm border-b border-line">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 h-16 flex items-center justify-between">
        <a href="/" className="font-display text-xl sm:text-2xl tracking-wide text-maroon">
          Arif Silk House
        </a>

        <nav className="hidden md:flex items-center gap-8 font-body text-sm uppercase tracking-widest2 text-ink/80">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="hover:text-maroon transition-colors">
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <button
            onClick={() => setIsOpen(true)}
            className="relative p-2 rounded-full hover:bg-blush transition-colors"
            aria-label="Open cart"
          >
            <svg className="w-5 h-5 text-ink" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
            </svg>
            {totalItems > 0 && (
              <span className="absolute -top-1 -right-1 w-5 h-5 bg-maroon text-ivory text-[10px] font-bold rounded-full flex items-center justify-center">
                {totalItems}
              </span>
            )}
          </button>

          <a
            href="tel:+923328484398"
            className="inline-flex items-center gap-2 rounded-full bg-maroon text-ivory px-4 py-2 text-xs sm:text-sm font-body tracking-wide hover:bg-maroon-bright transition-colors"
          >
            <span aria-hidden="true">&#9742;</span>
            <span className="hidden sm:inline">Call Now</span>
            <span className="sm:hidden">Call</span>
          </a>
        </div>
      </div>
    </header>
  );
}
