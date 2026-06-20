"use client";

import Link from "next/link";
import Image from "next/image";

import { ShoppingCart, Star } from "lucide-react";

import { useCart } from "../context/CartContext";

export default function ProductCard({ product }) {
  const { addToCart } = useCart();

  const rating =
    typeof product.rating === "object"
      ? product.rating.rate
      : product.rating || 0;

  return (
    <div className="bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col">
      <Link
        href={`/product/${product.id}`}
        className="block overflow-hidden bg-gray-50"
      >
        <div className="relative h-40 sm:h-48 md:h-52 w-full">
          <Image
            src={product.image}
            alt={product.title}
            fill
            sizes="(max-width:640px) 100vw,
                   (max-width:1024px) 50vw,
                   33vw"
            className="object-contain p-4 hover:scale-105 transition-transform duration-300"
          />
        </div>
      </Link>

      <div className="p-3 sm:p-4 flex flex-col flex-1">
        <Link href={`/product/${product.id}`}>
          <h3 className="font-semibold text-gray-800 hover:text-blue-700 transition-colors text-sm sm:text-base leading-snug mb-2 line-clamp-2">
            {product.title}
          </h3>
        </Link>

        {rating > 0 && (
          <div className="flex flex-wrap items-center gap-1 mb-3">
            {Array.from({
              length: 5,
            }).map((_, index) => (
              <Star
                key={index}
                className={`w-3 h-3 sm:w-4 sm:h-4 ${
                  index < Math.round(rating)
                    ? "text-yellow-400 fill-yellow-400"
                    : "text-gray-300"
                }`}
              />
            ))}

            <span className="ml-1 text-xs text-gray-500">({rating})</span>
          </div>
        )}

        <p className="text-lg sm:text-xl font-bold text-gray-900 mb-4">
          ${product.price}
        </p>

        <button
          onClick={() => addToCart(product)}
          className="mt-auto w-full bg-blue-700 hover:bg-blue-800 text-white py-2 sm:py-3 px-4 rounded-lg flex items-center justify-center gap-2 text-sm sm:text-base transition-colors"
        >
          <ShoppingCart className="w-4 h-4 sm:w-5 sm:h-5" />
          Add to Cart
        </button>
      </div>
    </div>
  );
}
