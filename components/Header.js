"use client";

import Link from "next/link";
import { Search, ShoppingCart, ShoppingBag } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";
import { useCart } from "../context/CartContext";

export default function Header() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { cartCount } = useCart();
  const [searchValue, setSearchValue] = useState("");

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
      <div className="max-w-7xl mx-auto h-20 px-6 flex items-center gap-8">
        {/* Logo */}

        <Link href="/" className="flex items-center gap-3 text-white shrink-0">
          <ShoppingBag className="w-8 h-8" />

          <span className="font-bold text-3xl">WhatBytes</span>
        </Link>

        {/* Search */}

        <div className="flex-1 max-w-3xl relative">
          <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />

          <input
            type="text"
            placeholder="Search products..."
            value={searchValue}
            onChange={handleSearch}
            className="w-full h-14 pl-14 pr-6 rounded-full border-0 outline-none bg-white text-gray-800 text-lg shadow-sm focus:ring-4 focus:ring-blue-300"
          />
        </div>

        {/* Cart */}

        <Link
          href="/cart"
          className="relative flex items-center justify-center w-14 h-14 rounded-full bg-white/10 hover:bg-white/20 transition-all duration-200"
        >
          <ShoppingCart className="w-8 h-8 text-white" />

          {cartCount > 0 && (
            <span className="absolute -top-1 -right-1 bg-red-500 min-w-6 h-6 px-1 rounded-full text-xs font-bold flex items-center justify-center text-white">
              {cartCount}
            </span>
          )}
        </Link>
      </div>
    </header>
  );
}
