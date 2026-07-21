"use client";

import Link from "next/link";
import products from "@/data/products";
import ProductCard from "@/components/ProductCard";

export default function ShopSection() {
  const featured = products.filter((p) =>
    ["Bestseller", "New Arrival", "Premium"].includes(p.badge)
  ).slice(0, 4);

  return (
    <section id="shop" className="bg-blush/30 py-20 sm:py-28">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <p className="font-body text-xs uppercase tracking-widest2 text-maroon mb-3 fade-up">
            Bridal Collection
          </p>
          <h2 className="font-display text-3xl sm:text-5xl text-ink fade-up" style={{ animationDelay: "0.1s" }}>
            Shop Our Dresses
          </h2>
          <p
            className="font-body text-sm sm:text-base text-ink/60 mt-4 max-w-lg mx-auto fade-up"
            style={{ animationDelay: "0.2s" }}
          >
            Handpicked bridal dresses for barat, walima &amp; mehndi — crafted with love for your special day.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {featured.map((product, i) => (
            <div
              key={product.id}
              className="fade-up"
              style={{ animationDelay: `${0.1 + i * 0.08}s` }}
            >
              <ProductCard product={product} />
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/shop"
            className="inline-flex items-center gap-2 bg-maroon text-ivory font-body text-sm uppercase tracking-wider px-10 py-3.5 rounded-full hover:bg-maroon-bright transition-colors active:scale-95 fade-up"
            style={{ animationDelay: "0.5s" }}
          >
            View All Dresses
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
