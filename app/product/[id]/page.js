"use client";

import Image from "next/image";
import Link from "next/link";

import { useState, use } from "react";

import { Star, ShoppingCart, ArrowLeft, Plus, Minus } from "lucide-react";

import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import ProductCard from "../../../components/ProductCard";

import { products } from "../../../data/products";

export default function ProductDetail({ params }) {
  const { id } = use(params);

  const [quantity, setQuantity] = useState(1);

  const product = products.find((p) => String(p.id) === id) || null;

  const related = product
    ? products

        .filter((p) => p.category === product.category && p.id !== product.id)

        .slice(0, 4)
    : [];

  if (!product) {
    return (
      <div className="min-h-screen bg-gray-50 flex flex-col">
        <Header />

        <main className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-700 mb-4">
              Product not found
            </h2>

            <Link href="/" className="text-brand hover:underline">
              ← Back to products
            </Link>
          </div>
        </main>

        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header />

      <main className="flex-1 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-6 md:py-8">
        <Link
          href="/"
          className="inline-flex items-center gap-1 text-brand hover:underline text-sm mb-6"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to products
        </Link>

        <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-0">
            <div className="relative bg-gray-50 flex items-center justify-center p-4 sm:p-6 md:p-8 min-h-62.5 sm:min-h-80">
              <div className="relative w-full h-56 sm:h-72 md:h-80">
                <Image
                  src={product.image}
                  alt={product.title}
                  fill
                  priority
                  sizes="(max-width:768px) 100vw, 50vw"
                  className="object-contain"
                />
              </div>
            </div>

            <div className="p-5 sm:p-6 md:p-8 flex flex-col">
              <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                {product.title}
              </h1>

              <div className="flex items-center gap-2 mb-4">
                <div className="flex">
                  {Array.from({
                    length: 5,
                  }).map((_, i) => (
                    <Star
                      key={i}
                      className={`w-5 h-5 ${
                        i < Math.round(product.rating)
                          ? "text-yellow-400 fill-yellow-400"
                          : "text-gray-200 fill-gray-200"
                      }`}
                    />
                  ))}
                </div>

                <span className="text-sm text-gray-500">
                  ({product.reviews} reviews)
                </span>
              </div>

              <p className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                ${product.price}
              </p>

              <p className="text-sm md:text-base text-gray-600 leading-relaxed mb-4">
                {product.description}
              </p>

              <div className="mb-6">
                <span className="text-sm text-gray-500 font-medium">
                  Category
                </span>

                <p className="text-gray-800 font-semibold">
                  {product.category}
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-3 mb-6">
                <span className="text-sm font-medium text-gray-700">
                  Quantity:
                </span>

                <div className="flex items-center border border-gray-300 rounded-md overflow-hidden w-fit">
                  <button
                    onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                    className="px-3 py-2 hover:bg-gray-100"
                  >
                    <Minus className="w-4 h-4 text-gray-600" />
                  </button>

                  <span className="px-4 py-2 font-semibold text-gray-800 border-x border-gray-300">
                    {quantity}
                  </span>

                  <button
                    onClick={() => setQuantity((q) => q + 1)}
                    className="px-3 py-2 hover:bg-gray-100"
                  >
                    <Plus className="w-4 h-4 text-gray-600" />
                  </button>
                </div>
              </div>

              <button className="w-full sm:w-auto flex items-center justify-center gap-2 py-3 px-6 rounded-md font-semibold text-white bg-brand hover:bg-brand-dark transition-colors">
                <ShoppingCart className="w-5 h-5" />
                Add to Cart
              </button>
            </div>
          </div>
        </div>

        {related.length > 0 && (
          <div className="mt-12">
            <h2 className="text-xl font-bold text-gray-900 mb-4">
              Related Products
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
              {related.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}
