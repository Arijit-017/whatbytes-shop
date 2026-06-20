"use client";
import { Suspense } from "react";

import { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";

import Header from "../components/Header";
import Footer from "../components/Footer";
import Sidebar from "../components/Sidebar";
import ProductCard from "../components/ProductCard";

import { products } from "../data/products";
import { PackageSearch } from "lucide-react";

export default function Home() {
  const router = useRouter();

  const searchParams = useSearchParams();

  const [filters, setFilters] = useState({
    category: "All",
    maxPrice: 1000,
    brand: "All",
  });

  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    const category = searchParams.get("category");
    const price = searchParams.get("price");
    const brand = searchParams.get("brand");

    setFilters({
      category: category || "All",

      maxPrice: price ? Number(price.split("-")[1]) : 1000,

      brand: brand || "All",
    });
  }, [searchParams]);

  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);

    const params = new URLSearchParams(searchParams.toString());

    if (newFilters.category !== "All") {
      params.set("category", newFilters.category);
    } else {
      params.delete("category");
    }

    if (newFilters.maxPrice !== 1000) {
      params.set("price", `0-${newFilters.maxPrice}`);
    } else {
      params.delete("price");
    }

    if (newFilters.brand !== "All") {
      params.set("brand", newFilters.brand);
    } else {
      params.delete("brand");
    }

    router.push(`/?${params.toString()}`);
  };

  const searchQuery = (searchParams.get("search") || "").toLowerCase();

  const filtered = products.filter((p) => {
    const matchCategory =
      filters.category === "All" || p.category === filters.category;

    const matchPrice = p.price <= filters.maxPrice;

    const matchBrand = filters.brand === "All" || p.brand === filters.brand;

    const matchSearch =
      !searchQuery ||
      p.title.toLowerCase().includes(searchQuery) ||
      p.category.toLowerCase().includes(searchQuery) ||
      p.brand.toLowerCase().includes(searchQuery);

    return matchCategory && matchPrice && matchBrand && matchSearch;
  });

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Suspense fallback={null}>
        <Header openSidebar={() => setSidebarOpen(true)} />
      </Suspense>

      <main className="flex-1 max-w-7xl mx-auto w-full px-4 py-8">
        <div className="flex flex-col md:flex-row gap-6">
          <Sidebar
            filters={filters}
            onFilterChange={handleFilterChange}
            isOpen={sidebarOpen}
            closeSidebar={() => setSidebarOpen(false)}
          />

          <section className="flex-1 min-w-0">
            <div className="mb-8">
              <h1 className="text-3xl font-bold text-gray-900">
                Discover Products
              </h1>

              <p className="text-gray-500 mt-2">
                Browse, filter and add products to your cart.
              </p>
            </div>

            {filtered.length === 0 ? (
              <div className="flex flex-col items-center justify-center py-20 text-center">
                <PackageSearch className="w-16 h-16 text-gray-300 mb-4" />

                <h2 className="text-xl font-semibold text-gray-600 mb-2">
                  No products found
                </h2>

                <p className="text-gray-400 text-sm">
                  Try adjusting your filters or search query.
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {filtered.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            )}
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
