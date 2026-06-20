import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { Star, ShoppingCart, ArrowLeft, Plus, Minus } from 'lucide-react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import ProductCard from '../../components/ProductCard';
import { products } from '../../data/products';

export default function ProductDetail({ product, related }) {
  const [quantity, setQuantity] = useState(1);

  if (!product) {
    return (
      <div className="min-h-screen bg-gray-50 flex flex-col">
        <Header />
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-700 mb-4">Product not found</h2>
            <Link href="/" className="text-brand hover:underline">← Back to products</Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <>

      <div className="min-h-screen bg-gray-50 flex flex-col">
        <Header />

        <main className="flex-1 max-w-7xl mx-auto w-full px-4 py-8">
          <Link href="/" className="inline-flex items-center gap-1 text-brand hover:underline text-sm mb-6">
            <ArrowLeft className="w-4 h-4" />
            Back to products
          </Link>

          <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
              {/* Image */}
              <div className="relative bg-gray-50 flex items-center justify-center p-8 min-h-[320px]">
                <div className="relative w-full h-72">
                  <Image
                    src={product.image}
                    alt={product.title}
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    priority
                  />
                </div>
              </div>

              {/* Details */}
              <div className="p-8 flex flex-col">
                <h1 className="text-2xl font-bold text-gray-900 mb-2">{product.title}</h1>

                <div className="flex items-center gap-2 mb-4">
                  <div className="flex">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className={`w-5 h-5 ${
                          i < Math.round(product.rating)
                            ? 'text-yellow-400 fill-yellow-400'
                            : 'text-gray-200 fill-gray-200'
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-sm text-gray-500">({product.reviews} reviews)</span>
                </div>

                <p className="text-3xl font-bold text-gray-900 mb-4">${product.price}</p>

                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  {product.description}
                </p>

                <div className="mb-6">
                  <span className="text-sm text-gray-500 font-medium">Category</span>
                  <p className="text-gray-800 font-semibold">{product.category}</p>
                </div>

                {/* Quantity */}
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-sm font-medium text-gray-700">Quantity:</span>
                  <div className="flex items-center border border-gray-300 rounded-md overflow-hidden">
                    <button
                      onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                      className="px-3 py-2 hover:bg-gray-100 transition-colors"
                    >
                      <Minus className="w-4 h-4 text-gray-600" />
                    </button>
                    <span className="px-4 py-2 font-semibold text-gray-800 min-w-[40px] text-center border-x border-gray-300">
                      {quantity}
                    </span>
                    <button
                      onClick={() => setQuantity((q) => q + 1)}
                      className="px-3 py-2 hover:bg-gray-100 transition-colors"
                    >
                      <Plus className="w-4 h-4 text-gray-600" />
                    </button>
                  </div>
                </div>

                <button className="flex items-center justify-center gap-2 py-3 px-6 rounded-md font-semibold text-white bg-brand hover:bg-brand-dark transition-colors">
                  <ShoppingCart className="w-5 h-5" />
                  Add to Cart
                </button>
              </div>
            </div>
          </div>

          {/* Related Products */}
          {related.length > 0 && (
            <div className="mt-12">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Related Products</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {related.map((p) => (
                  <ProductCard key={p.id} product={p} />
                ))}
              </div>
            </div>
          )}
        </main>

        <Footer />
      </div>
    </>
  );
}

export async function getStaticPaths() {
  const paths = products.map((p) => ({ params: { id: String(p.id) } }));
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const product = products.find((p) => String(p.id) === params.id) || null;
  const related = product
    ? products.filter((p) => p.category === product.category && p.id !== product.id).slice(0, 3)
    : [];
  return { props: { product, related } };
}
