"use client";

import { useCart } from "@/context/CartContext";
import { formatPrice } from "@/data/products";
import Link from "next/link";

export default function ProductCard({ product }) {
  const { addItem } = useCart();
  const discount = Math.round(
    ((product.originalPrice - product.price) / product.originalPrice) * 100
  );

  return (
    <div className="group relative bg-white rounded-2xl overflow-hidden border border-line hover:shadow-xl transition-all duration-300">
      <Link href={`/shop/${product.id}`} className="block">
        <div className="relative aspect-[3/4] overflow-hidden">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          {product.badge && (
            <span className="absolute top-3 left-3 bg-maroon text-ivory text-[10px] sm:text-xs font-body font-medium uppercase tracking-wider px-3 py-1 rounded-full">
              {product.badge}
            </span>
          )}
          <span className="absolute top-3 right-3 bg-ink/70 text-ivory text-[10px] sm:text-xs font-body px-2 py-1 rounded-full">
            -{discount}%
          </span>
          <div className="absolute inset-0 bg-gradient-to-t from-ink/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <span className="absolute bottom-3 left-1/2 -translate-x-1/2 bg-ivory/90 text-ink text-xs font-body px-4 py-2 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
            View Details
          </span>
        </div>
      </Link>

      <div className="p-4 sm:p-5">
        <span className="text-[10px] sm:text-xs font-body uppercase tracking-widest2 text-maroon">
          {product.category}
        </span>
        <h3 className="font-display text-base sm:text-lg text-ink mt-1 leading-snug">
          {product.name}
        </h3>

        <div className="flex items-center gap-1 mt-2">
          {[...Array(5)].map((_, i) => (
            <svg
              key={i}
              className={`w-3 h-3 ${
                i < Math.floor(product.rating)
                  ? "text-yellow-500"
                  : "text-line"
              }`}
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
          <span className="text-[10px] sm:text-xs text-ink/50 ml-1">
            ({product.reviews})
          </span>
        </div>

        <div className="flex items-center gap-2 mt-3">
          <span className="font-body text-base sm:text-lg font-semibold text-maroon">
            {formatPrice(product.price)}
          </span>
          <span className="font-body text-xs sm:text-sm text-ink/40 line-through">
            {formatPrice(product.originalPrice)}
          </span>
        </div>

        <button
          onClick={(e) => {
            e.preventDefault();
            addItem(product);
          }}
          className="w-full mt-4 bg-maroon text-ivory font-body text-xs sm:text-sm uppercase tracking-wider py-2.5 rounded-full hover:bg-maroon-bright transition-colors active:scale-95"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}
