"use client";

import { useState } from "react";
import { useCart } from "@/context/CartContext";
import { formatPrice } from "@/data/products";
import CartDrawer from "@/components/CartDrawer";
import Link from "next/link";

const steps = ["Information", "Payment", "Confirmation"];

export default function CheckoutPage() {
  const { items, totalPrice, clearCart } = useCart();
  const [step, setStep] = useState(0);
  const [paymentMethod, setPaymentMethod] = useState("cod");
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    province: "",
    postalCode: "",
    cardNumber: "",
    cardExpiry: "",
    cardCvc: "",
  });

  const shipping = 500;
  const grandTotal = totalPrice + shipping;

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (step === 0) {
      setStep(1);
    } else if (step === 1) {
      setOrderPlaced(true);
      clearCart();
      setStep(2);
    }
  };

  if (items.length === 0 && !orderPlaced) {
    return (
      <main className="min-h-screen bg-ivory flex items-center justify-center">
        <CartDrawer />
        <div className="text-center">
          <svg className="w-16 h-16 text-line mx-auto mb-4" fill="none" stroke="currentColor" strokeWidth="1" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
          </svg>
          <p className="font-display text-xl text-ink/60 mb-4">Your cart is empty</p>
          <Link
            href="/shop"
            className="inline-block bg-maroon text-ivory font-body text-sm uppercase tracking-wider px-8 py-3 rounded-full hover:bg-maroon-bright transition-colors"
          >
            Browse Shop
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-ivory">
      <CartDrawer />

      {/* Header */}
      <div className="pt-20 sm:pt-24 pb-6 max-w-5xl mx-auto px-5 sm:px-8">
        <Link href="/" className="font-display text-xl sm:text-2xl text-maroon">
          Arif Silk House
        </Link>
      </div>

      {/* Progress Steps */}
      <div className="max-w-5xl mx-auto px-5 sm:px-8 mb-10">
        <div className="flex items-center justify-center gap-2 sm:gap-4">
          {steps.map((s, i) => (
            <div key={s} className="flex items-center gap-2 sm:gap-4">
              <div className="flex items-center gap-2">
                <span
                  className={`w-8 h-8 rounded-full flex items-center justify-center font-body text-xs font-semibold transition-colors ${
                    i <= step
                      ? "bg-maroon text-ivory"
                      : "bg-line text-ink/40"
                  }`}
                >
                  {i < step ? "✓" : i + 1}
                </span>
                <span
                  className={`font-body text-xs sm:text-sm hidden sm:inline ${
                    i <= step ? "text-ink" : "text-ink/40"
                  }`}
                >
                  {s}
                </span>
              </div>
              {i < steps.length - 1 && (
                <div
                  className={`w-8 sm:w-16 h-px ${
                    i < step ? "bg-maroon" : "bg-line"
                  }`}
                />
              )}
            </div>
          ))}
        </div>
      </div>

      {step === 2 ? (
        /* Confirmation */
        <div className="max-w-2xl mx-auto px-5 sm:px-8 py-16 text-center">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h1 className="font-display text-3xl sm:text-4xl text-ink">Order Placed!</h1>
          <p className="font-body text-sm sm:text-base text-ink/60 mt-4 max-w-md mx-auto">
            Thank you for your order. We&apos;ll contact you shortly to confirm.
            {paymentMethod === "cod" && " You can pay when your order is delivered."}
          </p>
          <p className="font-body text-xs text-ink/40 mt-2">
            Order #ASH-{Math.floor(1000 + Math.random() * 9000)}
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center mt-8">
            <Link
              href="/"
              className="inline-flex items-center justify-center bg-maroon text-ivory font-body text-sm uppercase tracking-wider px-8 py-3 rounded-full hover:bg-maroon-bright transition-colors"
            >
              Back to Home
            </Link>
            <Link
              href="/shop"
              className="inline-flex items-center justify-center border-2 border-maroon text-maroon font-body text-sm uppercase tracking-wider px-8 py-3 rounded-full hover:bg-maroon hover:text-ivory transition-colors"
            >
              Continue Shopping
            </Link>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="max-w-5xl mx-auto px-5 sm:px-8 pb-16">
          <div className="grid lg:grid-cols-5 gap-10">
            {/* Form */}
            <div className="lg:col-span-3">
              {step === 0 && (
                <div className="space-y-6 fade-up">
                  <h2 className="font-display text-2xl text-ink">Contact Information</h2>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="font-body text-xs uppercase tracking-wider text-ink/60 mb-1 block">First Name</label>
                      <input
                        type="text"
                        name="firstName"
                        value={form.firstName}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-white border border-line rounded-xl font-body text-sm text-ink focus:outline-none focus:border-maroon transition-colors"
                      />
                    </div>
                    <div>
                      <label className="font-body text-xs uppercase tracking-wider text-ink/60 mb-1 block">Last Name</label>
                      <input
                        type="text"
                        name="lastName"
                        value={form.lastName}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-white border border-line rounded-xl font-body text-sm text-ink focus:outline-none focus:border-maroon transition-colors"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="font-body text-xs uppercase tracking-wider text-ink/60 mb-1 block">Email</label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white border border-line rounded-xl font-body text-sm text-ink focus:outline-none focus:border-maroon transition-colors"
                    />
                  </div>
                  <div>
                    <label className="font-body text-xs uppercase tracking-wider text-ink/60 mb-1 block">Phone</label>
                    <input
                      type="tel"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      required
                      placeholder="03XX XXXXXXX"
                      className="w-full px-4 py-3 bg-white border border-line rounded-xl font-body text-sm text-ink placeholder:text-ink/30 focus:outline-none focus:border-maroon transition-colors"
                    />
                  </div>

                  <h2 className="font-display text-2xl text-ink pt-4">Shipping Address</h2>
                  <div>
                    <label className="font-body text-xs uppercase tracking-wider text-ink/60 mb-1 block">Address</label>
                    <input
                      type="text"
                      name="address"
                      value={form.address}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white border border-line rounded-xl font-body text-sm text-ink focus:outline-none focus:border-maroon transition-colors"
                    />
                  </div>
                  <div className="grid sm:grid-cols-3 gap-4">
                    <div>
                      <label className="font-body text-xs uppercase tracking-wider text-ink/60 mb-1 block">City</label>
                      <input
                        type="text"
                        name="city"
                        value={form.city}
                        onChange={handleChange}
                        required
                        defaultValue="Karachi"
                        className="w-full px-4 py-3 bg-white border border-line rounded-xl font-body text-sm text-ink focus:outline-none focus:border-maroon transition-colors"
                      />
                    </div>
                    <div>
                      <label className="font-body text-xs uppercase tracking-wider text-ink/60 mb-1 block">Province</label>
                      <input
                        type="text"
                        name="province"
                        value={form.province}
                        onChange={handleChange}
                        required
                        defaultValue="Sindh"
                        className="w-full px-4 py-3 bg-white border border-line rounded-xl font-body text-sm text-ink focus:outline-none focus:border-maroon transition-colors"
                      />
                    </div>
                    <div>
                      <label className="font-body text-xs uppercase tracking-wider text-ink/60 mb-1 block">Postal Code</label>
                      <input
                        type="text"
                        name="postalCode"
                        value={form.postalCode}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-white border border-line rounded-xl font-body text-sm text-ink focus:outline-none focus:border-maroon transition-colors"
                      />
                    </div>
                  </div>
                </div>
              )}

              {step === 1 && (
                <div className="space-y-6 fade-up">
                  <h2 className="font-display text-2xl text-ink">Payment Method</h2>

                  <div className="space-y-3">
                    <label className={`flex items-center gap-4 p-4 bg-white border-2 rounded-xl cursor-pointer transition-colors ${paymentMethod === "cod" ? "border-maroon" : "border-line"}`}>
                      <input
                        type="radio"
                        name="payment"
                        value="cod"
                        checked={paymentMethod === "cod"}
                        onChange={() => setPaymentMethod("cod")}
                        className="accent-maroon"
                      />
                      <div>
                        <span className="font-body text-sm font-medium text-ink">Cash on Delivery</span>
                        <p className="font-body text-xs text-ink/50">Pay when your order arrives</p>
                      </div>
                    </label>

                    <label className={`flex items-center gap-4 p-4 bg-white border-2 rounded-xl cursor-pointer transition-colors ${paymentMethod === "card" ? "border-maroon" : "border-line"}`}>
                      <input
                        type="radio"
                        name="payment"
                        value="card"
                        checked={paymentMethod === "card"}
                        onChange={() => setPaymentMethod("card")}
                        className="accent-maroon"
                      />
                      <div>
                        <span className="font-body text-sm font-medium text-ink">Credit / Debit Card</span>
                        <p className="font-body text-xs text-ink/50">Secure online payment</p>
                      </div>
                    </label>

                    <label className={`flex items-center gap-4 p-4 bg-white border-2 rounded-xl cursor-pointer transition-colors ${paymentMethod === "bank" ? "border-maroon" : "border-line"}`}>
                      <input
                        type="radio"
                        name="payment"
                        value="bank"
                        checked={paymentMethod === "bank"}
                        onChange={() => setPaymentMethod("bank")}
                        className="accent-maroon"
                      />
                      <div>
                        <span className="font-body text-sm font-medium text-ink">Bank Transfer</span>
                        <p className="font-body text-xs text-ink/50">Direct bank transfer (IBFT)</p>
                      </div>
                    </label>
                  </div>

                  {paymentMethod === "card" && (
                    <div className="space-y-4 mt-6 p-5 bg-white border border-line rounded-xl">
                      <div>
                        <label className="font-body text-xs uppercase tracking-wider text-ink/60 mb-1 block">Card Number</label>
                        <input
                          type="text"
                          name="cardNumber"
                          value={form.cardNumber}
                          onChange={handleChange}
                          placeholder="4242 4242 4242 4242"
                          maxLength={19}
                          className="w-full px-4 py-3 bg-ivory border border-line rounded-xl font-body text-sm text-ink placeholder:text-ink/30 focus:outline-none focus:border-maroon transition-colors"
                        />
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="font-body text-xs uppercase tracking-wider text-ink/60 mb-1 block">Expiry</label>
                          <input
                            type="text"
                            name="cardExpiry"
                            value={form.cardExpiry}
                            onChange={handleChange}
                            placeholder="MM/YY"
                            maxLength={5}
                            className="w-full px-4 py-3 bg-ivory border border-line rounded-xl font-body text-sm text-ink placeholder:text-ink/30 focus:outline-none focus:border-maroon transition-colors"
                          />
                        </div>
                        <div>
                          <label className="font-body text-xs uppercase tracking-wider text-ink/60 mb-1 block">CVC</label>
                          <input
                            type="text"
                            name="cardCvc"
                            value={form.cardCvc}
                            onChange={handleChange}
                            placeholder="123"
                            maxLength={4}
                            className="w-full px-4 py-3 bg-ivory border border-line rounded-xl font-body text-sm text-ink placeholder:text-ink/30 focus:outline-none focus:border-maroon transition-colors"
                          />
                        </div>
                      </div>
                    </div>
                  )}

                  {paymentMethod === "bank" && (
                    <div className="p-5 bg-white border border-line rounded-xl space-y-2">
                      <p className="font-body text-sm text-ink font-medium">Bank Details:</p>
                      <p className="font-body text-xs text-ink/60">Bank: Meezan Bank</p>
                      <p className="font-body text-xs text-ink/60">Account Title: Arif Silk House</p>
                      <p className="font-body text-xs text-ink/60">Account No: 0123-4567-8901</p>
                      <p className="font-body text-xs text-ink/60">IBAN: PK36MEZN0000123456789012</p>
                      <p className="font-body text-xs text-ink/40 mt-2">Please send payment screenshot on WhatsApp after transfer</p>
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-2">
              <div className="bg-white border border-line rounded-2xl p-5 sm:p-6 sticky top-24">
                <h2 className="font-display text-xl text-ink mb-5">Order Summary</h2>
                <div className="space-y-3 max-h-64 overflow-y-auto">
                  {items.map((item) => (
                    <div key={item.id} className="flex gap-3">
                      <div className="w-14 h-16 rounded-lg overflow-hidden bg-ivory shrink-0">
                        <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="font-body text-xs text-ink line-clamp-1">{item.name}</p>
                        <p className="font-body text-[10px] text-ink/50">Qty: {item.quantity}</p>
                      </div>
                      <span className="font-body text-xs font-medium text-ink shrink-0">
                        {formatPrice(item.price * item.quantity)}
                      </span>
                    </div>
                  ))}
                </div>
                <div className="border-t border-line mt-4 pt-4 space-y-2">
                  <div className="flex justify-between">
                    <span className="font-body text-sm text-ink/60">Subtotal</span>
                    <span className="font-body text-sm text-ink">{formatPrice(totalPrice)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-body text-sm text-ink/60">Shipping</span>
                    <span className="font-body text-sm text-ink">{formatPrice(shipping)}</span>
                  </div>
                  <div className="flex justify-between pt-2 border-t border-line">
                    <span className="font-body text-sm font-semibold text-ink">Total</span>
                    <span className="font-body text-lg font-semibold text-maroon">{formatPrice(grandTotal)}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Submit */}
          <div className="flex justify-between items-center mt-10">
            {step > 0 ? (
              <button
                type="button"
                onClick={() => setStep(step - 1)}
                className="font-body text-sm text-maroon hover:text-maroon-bright transition-colors"
              >
                ← Back
              </button>
            ) : (
              <Link href="/shop" className="font-body text-sm text-maroon hover:text-maroon-bright transition-colors">
                ← Continue Shopping
              </Link>
            )}
            <button
              type="submit"
              className="bg-maroon text-ivory font-body text-sm uppercase tracking-wider px-10 py-3 rounded-full hover:bg-maroon-bright transition-colors active:scale-95"
            >
              {step === 0 ? "Continue to Payment" : `Pay ${formatPrice(grandTotal)}`}
            </button>
          </div>
        </form>
      )}
    </main>
  );
}
