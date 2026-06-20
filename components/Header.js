'use client';

import Link from 'next/link';
import { Search } from 'lucide-react';
import { useRouter, useSearchParams } from 'next/navigation';
import { useState, useEffect } from 'react';

export default function Header() {
  const router = useRouter();

  const searchParams = useSearchParams();

  const [searchValue, setSearchValue] = useState('');

  useEffect(() => {
    const search = searchParams.get('search') || '';

    setSearchValue(search);
  }, [searchParams]);

  const handleSearch = (e) => {
    const value = e.target.value;

    setSearchValue(value);

    const params = new URLSearchParams(
      searchParams.toString()
    );

    if (value.trim()) {
      params.set('search', value);
    } else {
      params.delete('search');
    }

    router.push(`/?${params.toString()}`);
  };

  return (
    <header className="bg-brand sticky top-0 z-50 shadow-md">

      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center gap-4">

        <Link
          href="/"
          className="text-white font-bold text-2xl tracking-tight shrink-0"
        >

          Logo

        </Link>

        <div className="flex-1 max-w-xl mx-auto relative">

          <Search
            className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4"
          />

          <input
            type="text"

            placeholder="Search for products..."

            value={searchValue}

            onChange={handleSearch}

            className="w-full pl-10 pr-4 py-2 rounded-md text-sm outline-none focus:ring-2 focus:ring-white/40 bg-white text-gray-800 placeholder:text-gray-400"
          />

        </div>

      </div>

    </header>
  );
}