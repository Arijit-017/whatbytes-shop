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
    <header className="sticky top-0 z-50 bg-brand shadow-lg">
      {/* Navbar */}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between gap-4">
        {/* Logo */}

        <div className="flex items-center gap-4">
          <button
            onClick={openSidebar}
            className="lg:hidden text-white hover:bg-white/10 p-2 rounded-lg transition"
          >
            <Menu className="w-7 h-7" />
          </button>

          <Link
            href="/"
            className="flex items-center gap-2 text-white shrink-0"
          >
            <ShoppingBag className="w-6 h-6 md:w-8 md:h-8" />

            <span className="font-bold text-xl sm:text-2xl md:text-3xl">
              WhatBytes
            </span>
          </Link>
        </div>

        {/* Desktop Search */}

        <div className="hidden md:flex flex-1 max-w-3xl relative">
          <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />

          <input
            type="text"
            placeholder="Search products..."
            value={searchValue}
            onChange={handleSearch}
            className="w-full h-14 pl-14 pr-6 rounded-full bg-white text-gray-800 text-lg shadow-sm outline-none focus:ring-4 focus:ring-blue-300"
          />
        </div>

        {/* Right Section */}

        <div className="flex items-center gap-3">
          {/* Mobile Search */}

          <button
            onClick={() => setShowMobileSearch(!showMobileSearch)}
            className="md:hidden text-white"
          >
            <Search className="w-6 h-6" />
          </button>

          {/* Cart */}

          <Link
            href="/cart"
            className="relative flex items-center justify-center w-11 h-11 md:w-14 md:h-14 rounded-full bg-white/10 hover:bg-white/20 transition"
          >
            <ShoppingCart className="w-6 h-6 md:w-8 md:h-8 text-white" />

            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-red-500 min-w-5 h-5 md:min-w-6 md:h-6 px-1 rounded-full text-xs font-bold flex items-center justify-center text-white">
                {cartCount}
              </span>
            )}
          </Link>
        </div>
      </div>

      {/* Mobile Search Box */}

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
              className="w-full h-12 pl-12 pr-12 rounded-full bg-white text-gray-800 shadow-sm outline-none"
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
