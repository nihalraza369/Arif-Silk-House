"use client";

import { useState } from "react";
import Link from "next/link";
import products, { categories, formatPrice } from "@/data/products";
import ProductCard from "@/components/ProductCard";
import CartDrawer from "@/components/CartDrawer";

const sortOptions = [
  { value: "featured", label: "Featured" },
  { value: "price-low", label: "Price: Low to High" },
  { value: "price-high", label: "Price: High to Low" },
  { value: "rating", label: "Highest Rated" },
  { value: "newest", label: "Newest" },
];

export default function ShopPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [sortBy, setSortBy] = useState("featured");
  const [searchQuery, setSearchQuery] = useState("");

  let filtered = activeCategory === "All"
    ? [...products]
    : products.filter((p) => p.category === activeCategory);

  if (searchQuery.trim()) {
    const q = searchQuery.toLowerCase();
    filtered = filtered.filter(
      (p) =>
        p.name.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q)
    );
  }

  switch (sortBy) {
    case "price-low":
      filtered.sort((a, b) => a.price - b.price);
      break;
    case "price-high":
      filtered.sort((a, b) => b.price - a.price);
      break;
    case "rating":
      filtered.sort((a, b) => b.rating - a.rating);
      break;
    case "newest":
      filtered.sort((a, b) => b.id - a.id);
      break;
  }

  return (
    <main className="min-h-screen bg-ivory">
      <CartDrawer />

      {/* Shop Hero */}
      <section className="relative pt-24 pb-16 sm:pt-32 sm:pb-20 bg-ink overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: "radial-gradient(circle at 1px 1px, rgba(251,247,241,0.3) 1px, transparent 0)",
            backgroundSize: "24px 24px"
          }} />
        </div>
        <div className="relative max-w-6xl mx-auto px-5 sm:px-8 text-center">
          <span className="font-body text-xs uppercase tracking-widest2 text-blush fade-up">
            Bridal Collection
          </span>
          <h1 className="font-display text-4xl sm:text-6xl text-ivory mt-3 fade-up" style={{ animationDelay: "0.1s" }}>
            Our Shop
          </h1>
          <p className="font-body text-sm sm:text-base text-ivory/60 mt-4 max-w-xl mx-auto fade-up" style={{ animationDelay: "0.2s" }}>
            Discover exquisite bridal dresses handcrafted for your special day. From barat to walima and mehndi — find the perfect outfit.
          </p>
        </div>
      </section>

      {/* Filters & Products */}
      <section className="max-w-6xl mx-auto px-5 sm:px-8 py-10 sm:py-14">
        {/* Search + Sort */}
        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          <div className="relative flex-1">
            <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-ink/40" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
            </svg>
            <input
              type="text"
              placeholder="Search bridal dresses..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-3 bg-white border border-line rounded-full font-body text-sm text-ink placeholder:text-ink/40 focus:outline-none focus:border-maroon transition-colors"
            />
          </div>
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="px-4 py-3 bg-white border border-line rounded-full font-body text-sm text-ink focus:outline-none focus:border-maroon transition-colors appearance-none cursor-pointer pr-10"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%23171412' stroke-width='2'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' d='M19.5 8.25l-7.5 7.5-7.5-7.5'/%3E%3C/svg%3E")`,
              backgroundRepeat: "no-repeat",
              backgroundPosition: "right 12px center",
              backgroundSize: "16px",
            }}
          >
            {sortOptions.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-full font-body text-xs sm:text-sm uppercase tracking-wider transition-all ${
                activeCategory === cat
                  ? "bg-maroon text-ivory"
                  : "bg-white text-ink/70 border border-line hover:border-maroon hover:text-maroon"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Results Count */}
        <p className="font-body text-sm text-ink/50 mb-6">
          Showing {filtered.length} {filtered.length === 1 ? "dress" : "dresses"}
          {activeCategory !== "All" && ` in ${activeCategory}`}
        </p>

        {/* Product Grid */}
        {filtered.length === 0 ? (
          <div className="text-center py-20">
            <svg className="w-16 h-16 text-line mx-auto mb-4" fill="none" stroke="currentColor" strokeWidth="1" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
            </svg>
            <p className="font-display text-xl text-ink/60">No dresses found</p>
            <p className="font-body text-sm text-ink/40 mt-2">Try adjusting your search or filter</p>
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
            {filtered.map((product, i) => (
              <div key={product.id} className="fade-up" style={{ animationDelay: `${i * 0.05}s` }}>
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        )}
      </section>

      {/* CTA Section */}
      <section className="bg-blush/50 py-14 sm:py-20">
        <div className="max-w-3xl mx-auto px-5 sm:px-8 text-center">
          <h2 className="font-display text-2xl sm:text-4xl text-ink">
            Can&apos;t find what you&apos;re looking for?
          </h2>
          <p className="font-body text-sm sm:text-base text-ink/60 mt-4 max-w-lg mx-auto">
            Visit our store on Tariq Road, Karachi or call us for a custom bridal consultation. We create bespoke dresses tailored to your vision.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center mt-8">
            <a
              href="tel:+923328484398"
              className="inline-flex items-center justify-center gap-2 bg-maroon text-ivory font-body text-sm uppercase tracking-wider px-8 py-3 rounded-full hover:bg-maroon-bright transition-colors"
            >
              <span>&#9742;</span> Call for Consultation
            </a>
            <a
              href="https://wa.me/923328484398"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 border-2 border-maroon text-maroon font-body text-sm uppercase tracking-wider px-8 py-3 rounded-full hover:bg-maroon hover:text-ivory transition-colors"
            >
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
