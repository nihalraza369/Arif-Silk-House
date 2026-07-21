"use client";

import { useCart } from "@/context/CartContext";
import { formatPrice } from "@/data/products";
import Link from "next/link";

export default function CartDrawer() {
  const {
    items,
    isOpen,
    setIsOpen,
    removeItem,
    updateQuantity,
    totalPrice,
    totalItems,
  } = useCart();

  if (!isOpen) return null;

  return (
    <>
      <div
        className="fixed inset-0 bg-ink/50 z-[60] backdrop-blur-sm"
        onClick={() => setIsOpen(false)}
      />

      <div className="fixed right-0 top-0 h-full w-full max-w-md bg-ivory z-[70] shadow-2xl flex flex-col">
        <div className="flex items-center justify-between p-5 border-b border-line">
          <h2 className="font-display text-xl text-ink">
            Your Cart ({totalItems})
          </h2>
          <button
            onClick={() => setIsOpen(false)}
            className="p-2 rounded-full hover:bg-blush transition-colors"
            aria-label="Close cart"
          >
            <svg className="w-5 h-5 text-ink" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-5 space-y-4">
          {items.length === 0 ? (
            <div className="text-center py-16">
              <svg className="w-16 h-16 text-line mx-auto mb-4" fill="none" stroke="currentColor" strokeWidth="1" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
              </svg>
              <p className="font-display text-lg text-ink/60">Your cart is empty</p>
              <Link
                href="/shop"
                onClick={() => setIsOpen(false)}
                className="inline-block mt-4 text-maroon font-body text-sm uppercase tracking-wider hover:text-maroon-bright transition-colors"
              >
                Browse Shop →
              </Link>
            </div>
          ) : (
            items.map((item) => (
              <div key={item.id} className="flex gap-4 bg-white rounded-xl p-3 border border-line">
                <Link
                  href={`/shop/${item.id}`}
                  onClick={() => setIsOpen(false)}
                  className="shrink-0 w-20 h-24 rounded-lg overflow-hidden"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover"
                  />
                </Link>
                <div className="flex-1 min-w-0">
                  <Link
                    href={`/shop/${item.id}`}
                    onClick={() => setIsOpen(false)}
                    className="font-display text-sm text-ink hover:text-maroon transition-colors line-clamp-1"
                  >
                    {item.name}
                  </Link>
                  <span className="text-[10px] font-body uppercase tracking-wider text-maroon">
                    {item.category}
                  </span>
                  <p className="font-body text-sm font-semibold text-maroon mt-1">
                    {formatPrice(item.price)}
                  </p>
                  <div className="flex items-center gap-2 mt-2">
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      className="w-7 h-7 rounded-full border border-line flex items-center justify-center hover:bg-blush transition-colors text-ink"
                    >
                      -
                    </button>
                    <span className="font-body text-sm text-ink w-6 text-center">
                      {item.quantity}
                    </span>
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="w-7 h-7 rounded-full border border-line flex items-center justify-center hover:bg-blush transition-colors text-ink"
                    >
                      +
                    </button>
                    <button
                      onClick={() => removeItem(item.id)}
                      className="ml-auto p-1 text-ink/40 hover:text-maroon transition-colors"
                      aria-label="Remove item"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {items.length > 0 && (
          <div className="p-5 border-t border-line space-y-4">
            <div className="flex justify-between items-center">
              <span className="font-body text-sm text-ink/70">Subtotal</span>
              <span className="font-body text-lg font-semibold text-maroon">
                {formatPrice(totalPrice)}
              </span>
            </div>
            <p className="text-[10px] font-body text-ink/40">
              Shipping calculated at checkout
            </p>
            <Link
              href="/checkout"
              onClick={() => setIsOpen(false)}
              className="block w-full bg-maroon text-ivory font-body text-sm uppercase tracking-wider text-center py-3 rounded-full hover:bg-maroon-bright transition-colors active:scale-95"
            >
              Proceed to Checkout
            </Link>
            <Link
              href="/shop"
              onClick={() => setIsOpen(false)}
              className="block w-full text-center font-body text-sm text-maroon hover:text-maroon-bright transition-colors"
            >
              Continue Shopping
            </Link>
          </div>
        )}
      </div>
    </>
  );
}
