"use client";
import { Suspense } from "react";

import Image from "next/image";
import Link from "next/link";

import { Trash2, Plus, Minus, ShoppingBag, ArrowLeft } from "lucide-react";

import Header from "../../components/Header";
import Footer from "../../components/Footer";

import { useCart } from "../../context/CartContext";

export default function CartPage() {
  const { cart, removeFromCart, updateQuantity, cartTotal } = useCart();

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Suspense fallback={null}>
        <Header />
      </Suspense>

      <main className="flex-1 max-w-6xl mx-auto w-full px-4 py-8">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-blue-700 hover:text-blue-900 font-medium mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Continue Shopping
        </Link>

        <h1 className="text-3xl font-bold text-gray-900 mb-8">Shopping Cart</h1>

        {cart.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-24 text-center bg-white rounded-2xl shadow-sm">
            <ShoppingBag className="w-20 h-20 text-gray-300 mb-4" />

            <h2 className="text-2xl font-semibold text-gray-700 mb-3">
              Your cart is empty
            </h2>

            <p className="text-gray-500 mb-8">
              Browse products and add them to your cart.
            </p>

            <Link
              href="/"
              className="bg-blue-700 hover:bg-blue-800 text-white px-6 py-3 rounded-lg font-semibold"
            >
              Browse Products
            </Link>
          </div>
        ) : (
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Cart Items */}

            <div className="flex-1 space-y-4">
              {cart.map((item) => (
                <div
                  key={item.id}
                  className="bg-white rounded-xl shadow-sm border border-gray-200 p-4 flex gap-4 items-center"
                >
                  <div className="relative w-24 h-24 bg-gray-50 rounded-lg overflow-hidden shrink-0">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      sizes="96px"
                      className="object-contain p-2"
                    />
                  </div>

                  <div className="flex-1 min-w-0">
                    <Link
                      href={`/product/${item.id}`}
                      className="font-semibold text-gray-800 hover:text-blue-700 line-clamp-2"
                    >
                      {item.title}
                    </Link>

                    <p className="font-bold text-blue-700 mt-2">
                      ${item.price}
                    </p>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      className="w-9 h-9 border rounded-lg hover:bg-gray-100 flex items-center justify-center"
                    >
                      <Minus className="w-4 h-4" />
                    </button>

                    <span className="w-8 text-center font-semibold">
                      {item.quantity}
                    </span>

                    <button
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="w-9 h-9 border rounded-lg hover:bg-gray-100 flex items-center justify-center"
                    >
                      <Plus className="w-4 h-4" />
                    </button>
                  </div>

                  <div className="w-20 text-right font-bold">
                    ${(item.price * item.quantity).toFixed(2)}
                  </div>

                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="text-red-500 hover:text-red-700"
                  >
                    <Trash2 className="w-5 h-5" />
                  </button>
                </div>
              ))}
            </div>

            {/* Summary */}

            <div className="lg:w-80">
              <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 sticky top-24">
                <h2 className="text-xl font-bold mb-6">Order Summary</h2>

                <div className="space-y-3 mb-6">
                  {cart.map((item) => (
                    <div key={item.id} className="flex justify-between text-sm">
                      <span className="truncate mr-2">
                        {item.title}

                        {" × "}

                        {item.quantity}
                      </span>

                      <span>${(item.price * item.quantity).toFixed(2)}</span>
                    </div>
                  ))}
                </div>

                <div className="border-t pt-5 flex justify-between text-lg font-bold mb-6">
                  <span>Total</span>

                  <span>${cartTotal.toFixed(2)}</span>
                </div>

                <button className="w-full bg-blue-700 hover:bg-blue-800 text-white py-3 rounded-lg font-semibold">
                  Proceed to Checkout
                </button>
              </div>
            </div>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}
