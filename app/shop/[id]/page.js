"use client";

import { useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import { getProductById, formatPrice } from "@/data/products";
import { useCart } from "@/context/CartContext";
import CartDrawer from "@/components/CartDrawer";

export default function ProductDetailPage() {
  const params = useParams();
  const product = getProductById(params.id);
  const { addItem } = useCart();
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);

  if (!product) {
    return (
      <main className="min-h-screen bg-ivory flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-display text-3xl text-ink mb-4">Product Not Found</h1>
          <Link href="/shop" className="text-maroon font-body text-sm uppercase tracking-wider hover:text-maroon-bright transition-colors">
            ← Back to Shop
          </Link>
        </div>
      </main>
    );
  }

  const discount = Math.round(
    ((product.originalPrice - product.price) / product.originalPrice) * 100
  );

  return (
    <main className="min-h-screen bg-ivory">
      <CartDrawer />

      {/* Breadcrumb */}
      <div className="pt-20 sm:pt-24 pb-4 max-w-6xl mx-auto px-5 sm:px-8">
        <nav className="flex items-center gap-2 font-body text-xs sm:text-sm text-ink/50">
          <Link href="/" className="hover:text-maroon transition-colors">Home</Link>
          <span>/</span>
          <Link href="/shop" className="hover:text-maroon transition-colors">Shop</Link>
          <span>/</span>
          <span className="text-ink">{product.name}</span>
        </nav>
      </div>

      {/* Product Details */}
      <section className="max-w-6xl mx-auto px-5 sm:px-8 pb-16 sm:pb-24">
        <div className="grid md:grid-cols-2 gap-8 lg:gap-14">
          {/* Images */}
          <div className="fade-up">
            <div className="relative aspect-[3/4] rounded-2xl overflow-hidden bg-white border border-line">
              <img
                src={product.images[selectedImage]}
                alt={product.name}
                className="w-full h-full object-cover"
              />
              {product.badge && (
                <span className="absolute top-4 left-4 bg-maroon text-ivory text-xs font-body font-medium uppercase tracking-wider px-4 py-1.5 rounded-full">
                  {product.badge}
                </span>
              )}
            </div>
            {product.images.length > 1 && (
              <div className="flex gap-3 mt-4">
                {product.images.map((img, i) => (
                  <button
                    key={i}
                    onClick={() => setSelectedImage(i)}
                    className={`w-20 h-24 rounded-lg overflow-hidden border-2 transition-colors ${
                      selectedImage === i ? "border-maroon" : "border-line"
                    }`}
                  >
                    <img src={img} alt="" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Info */}
          <div className="fade-up" style={{ animationDelay: "0.1s" }}>
            <span className="font-body text-xs uppercase tracking-widest2 text-maroon">
              {product.category}
            </span>
            <h1 className="font-display text-3xl sm:text-4xl text-ink mt-2">
              {product.name}
            </h1>

            {/* Rating */}
            <div className="flex items-center gap-2 mt-3">
              <div className="flex items-center gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className={`w-4 h-4 ${
                      i < Math.floor(product.rating) ? "text-yellow-500" : "text-line"
                    }`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <span className="font-body text-sm text-ink/60">
                {product.rating} ({product.reviews} reviews)
              </span>
            </div>

            {/* Price */}
            <div className="flex items-center gap-3 mt-5">
              <span className="font-body text-3xl font-semibold text-maroon">
                {formatPrice(product.price)}
              </span>
              <span className="font-body text-lg text-ink/40 line-through">
                {formatPrice(product.originalPrice)}
              </span>
              <span className="bg-maroon/10 text-maroon font-body text-xs font-semibold px-3 py-1 rounded-full">
                Save {discount}%
              </span>
            </div>

            {/* Description */}
            <p className="font-body text-sm sm:text-base text-ink/70 leading-relaxed mt-6">
              {product.description}
            </p>

            {/* Details */}
            <div className="mt-6 space-y-2">
              {product.details.map((detail, i) => (
                <div key={i} className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-maroon shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="font-body text-sm text-ink/70">{detail}</span>
                </div>
              ))}
            </div>

            {/* Quantity + Add to Cart */}
            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <div className="flex items-center border border-line rounded-full">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-12 h-12 flex items-center justify-center text-ink hover:text-maroon transition-colors rounded-l-full"
                >
                  -
                </button>
                <span className="w-12 text-center font-body text-sm text-ink">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-12 h-12 flex items-center justify-center text-ink hover:text-maroon transition-colors rounded-r-full"
                >
                  +
                </button>
              </div>
              <button
                onClick={() => addItem(product, quantity)}
                className="flex-1 bg-maroon text-ivory font-body text-sm uppercase tracking-wider py-3 px-8 rounded-full hover:bg-maroon-bright transition-colors active:scale-95"
              >
                Add to Cart — {formatPrice(product.price * quantity)}
              </button>
            </div>

            {/* Trust Badges */}
            <div className="grid grid-cols-3 gap-4 mt-8 pt-8 border-t border-line">
              <div className="text-center">
                <svg className="w-6 h-6 text-maroon mx-auto mb-2" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H18.75m-7.5-3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                </svg>
                <span className="font-body text-[10px] sm:text-xs text-ink/60">Cash on Delivery</span>
              </div>
              <div className="text-center">
                <svg className="w-6 h-6 text-maroon mx-auto mb-2" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                </svg>
                <span className="font-body text-[10px] sm:text-xs text-ink/60">Secure Payment</span>
              </div>
              <div className="text-center">
                <svg className="w-6 h-6 text-maroon mx-auto mb-2" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                </svg>
                <span className="font-body text-[10px] sm:text-xs text-ink/60">Tariq Road, Karachi</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Back to Shop */}
      <div className="max-w-6xl mx-auto px-5 sm:px-8 pb-16">
        <Link
          href="/shop"
          className="inline-flex items-center gap-2 font-body text-sm text-maroon hover:text-maroon-bright transition-colors"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
          </svg>
          Back to Shop
        </Link>
      </div>
    </main>
  );
}
