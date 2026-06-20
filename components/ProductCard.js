'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ShoppingCart, Star } from 'lucide-react';

export default function ProductCard({ product }) {
  // Handle rating whether it's a number or an object
  const rating =
    typeof product.rating === 'object'
      ? product.rating.rate
      : product.rating || 0;

  return (
    <div className="bg-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow flex flex-col">

      {/* Product Image */}
      <Link
        href={`/product/${product.id}`}
        className="block overflow-hidden bg-gray-50"
      >
        <div className="relative h-48 w-full">

          <Image
            src={product.image}
            alt={product.title}
            fill
            priority={false}
            sizes="(max-width:768px) 100vw, (max-width:1024px) 50vw, 33vw"
            className="object-contain p-4 hover:scale-105 transition-transform duration-300"
          />

        </div>
      </Link>

      {/* Product Details */}
      <div className="p-4 flex flex-col flex-1">

        <Link href={`/product/${product.id}`}>

          <h3 className="font-semibold text-gray-800 hover:text-blue-600 transition-colors text-sm leading-snug mb-2">

            {product.title}

          </h3>

        </Link>

        {/* Rating */}

        {rating > 0 && (

          <div className="flex items-center gap-1 mb-3">

            {Array.from({ length: 5 }).map((_, index) => (

              <Star
                key={index}
                className={`w-4 h-4 ${
                  index < Math.round(rating)
                    ? 'text-yellow-400 fill-yellow-400'
                    : 'text-gray-300'
                }`}
              />

            ))}

            <span className="ml-2 text-xs text-gray-500">

              ({rating})

            </span>

          </div>

        )}

        {/* Price */}

        <p className="text-xl font-bold text-gray-900 mb-4">

          ${product.price}

        </p>

        {/* Add To Cart Button */}

        <button
          className="mt-auto w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md flex items-center justify-center gap-2 transition-colors"
        >

          <ShoppingCart className="w-4 h-4" />

          Add to Cart

        </button>

      </div>

    </div>
  );
}