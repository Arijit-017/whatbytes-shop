"use client";

import { X } from "lucide-react";
import { categories, brands } from "../data/products";

export default function Sidebar({
  filters,
  onFilterChange,
  isOpen,
  closeSidebar,
}) {
  const { category, maxPrice, brand } = filters;

  const handleCategory = (cat) => {
    onFilterChange({
      ...filters,
      category: cat,
    });

    closeSidebar();
  };

  const handlePrice = (e) => {
    onFilterChange({
      ...filters,
      maxPrice: Number(e.target.value),
    });
  };

  const handleBrand = (value) => {
    onFilterChange({
      ...filters,
      brand: value,
    });
  };

  return (
    <>
      {isOpen && (
        <div
          onClick={closeSidebar}
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
        />
      )}

      <aside
        className={`
          fixed lg:static
          top-0 left-0
          h-screen lg:h-auto
          w-72 lg:w-64
          bg-white
          z-50 lg:z-auto
          p-6
          shadow-xl lg:shadow-none
          transition-transform duration-300
          ${isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}
        `}
      >
        <div className="lg:hidden flex justify-between items-center mb-6">
          <h2 className="font-bold text-2xl text-brand">Filters</h2>

          <button onClick={closeSidebar}>
            <X className="w-6 h-6" />
          </button>
        </div>

        <h2 className="hidden lg:block font-bold text-2xl text-brand mb-6">
          Filters
        </h2>

        <div className="mb-8">
          <h3 className="font-semibold text-lg mb-4">Category</h3>

          <div className="space-y-3">
            {categories.map((cat) => (
              <label key={cat} className="flex items-center gap-3">
                <input
                  type="radio"
                  name="category"
                  checked={category === cat}
                  onChange={() => handleCategory(cat)}
                />

                <span>{cat}</span>
              </label>
            ))}
          </div>
        </div>

        <div className="mb-8">
          <h3 className="font-semibold text-lg mb-4">Price</h3>

          <input
            type="range"
            min={0}
            max={1000}
            step={10}
            value={maxPrice}
            onChange={handlePrice}
            className="w-full"
          />

          <div className="flex justify-between text-sm mt-2">
            <span>0</span>

            <span>${maxPrice}</span>

            <span>1000</span>
          </div>
        </div>

        <div>
          <h3 className="font-semibold text-lg mb-4">Brand</h3>

          <select
            value={brand}
            onChange={(e) => handleBrand(e.target.value)}
            className="w-full border rounded-lg px-3 py-2"
          >
            {brands.map((b) => (
              <option key={b} value={b}>
                {b}
              </option>
            ))}
          </select>
        </div>
      </aside>
    </>
  );
}
