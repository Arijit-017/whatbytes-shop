"use client";

import Link from "next/link";
import { Search, ShoppingCart, ShoppingBag, X, Menu } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";
import { useCart } from "../context/CartContext";

export default function Header({ openSidebar }) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { cartCount } = useCart();
  const [searchValue, setSearchValue] = useState("");
  const [showMobileSearch, setShowMobileSearch] = useState(false);

  useEffect(() => {
    setSearchValue(searchParams.get("search") || "");
  }, [searchParams]);

  const handleSearch = (e) => {
    const value = e.target.value;

    setSearchValue(value);

    const params = new URLSearchParams(searchParams.toString());

    if (value.trim()) {
      params.set("search", value);
    } else {
      params.delete("search");
    }

    router.push(`/?${params.toString()}`);
  };

  return (
    <header className="sticky top-0 z-50 bg-linear-to-r from-blue-700 to-blue-600 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-20 flex items-center justify-between gap-4">
        {/* Left Section */}

        <div className="flex items-center gap-3">
          <button
            onClick={openSidebar}
            className="lg:hidden text-white hover:bg-white/10 p-2 rounded-xl transition duration-200"
          >
            <Menu className="w-7 h-7" />
          </button>

          <Link href="/" className="flex items-center gap-3 text-white">
            <div className="w-12 h-12 rounded-xl bg-white/15 flex items-center justify-center backdrop-blur-sm">
              <ShoppingBag className="w-7 h-7" />
            </div>

            <div>
              <h1 className="font-bold text-2xl md:text-3xl tracking-tight">
                WhatBytes
              </h1>

              <p className="hidden md:block text-xs text-blue-100">
                Online Shopping
              </p>
            </div>
          </Link>
        </div>

        {/* Desktop Search */}

        <div className="hidden md:flex flex-1 max-w-2xl relative">
          <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />

          <input
            type="text"
            placeholder="Search for products..."
            value={searchValue}
            onChange={handleSearch}
            className="w-full h-12 pl-14 pr-5 rounded-2xl bg-white border border-blue-200 text-gray-800 text-base shadow-sm outline-none focus:ring-4 focus:ring-blue-300 transition"
          />
        </div>

        {/* Right Section */}

        <div className="flex items-center gap-3">
          {/* Mobile Search */}

          <button
            onClick={() => setShowMobileSearch(!showMobileSearch)}
            className="md:hidden w-11 h-11 rounded-xl bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition"
          >
            <Search className="w-6 h-6" />
          </button>

          {/* Cart */}

          <Link
            href="/cart"
            className="relative flex items-center gap-2 px-4 h-12 rounded-xl bg-[#0d47a1] hover:bg-[#08306f] text-white transition shadow-sm"
          >
            <ShoppingCart className="w-6 h-6" />

            <span className="hidden sm:block font-semibold">Cart</span>

            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 min-w-6 h-6 px-1 rounded-full text-xs font-bold flex items-center justify-center text-white shadow">
                {cartCount}
              </span>
            )}
          </Link>
        </div>
      </div>

      {/* Mobile Search */}

      {showMobileSearch && (
        <div className="md:hidden px-4 pb-4">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />

            <input
              type="text"
              placeholder="Search products..."
              value={searchValue}
              onChange={handleSearch}
              autoFocus
              className="w-full h-12 pl-12 pr-12 rounded-2xl bg-white text-gray-800 shadow-md outline-none"
            />

            <button
              onClick={() => setShowMobileSearch(false)}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
