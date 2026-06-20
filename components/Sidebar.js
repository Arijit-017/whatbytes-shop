import { categories, brands } from "../data/products";

export default function Sidebar({ filters, onFilterChange }) {
  const { category, maxPrice, brand } = filters;

  const handleCategory = (cat) => {
    onFilterChange({ ...filters, category: cat });
  };

  const handlePrice = (e) => {
    onFilterChange({ ...filters, maxPrice: Number(e.target.value) });
  };

  const handleBrand = (b) => {
    onFilterChange({ ...filters, brand: b });
  };

  return (
    <aside className="w-full md:w-64 shrink-0">
      <div className="bg-white border border-gray-200 rounded-lg p-5 sticky top-20">
        <h2 className="font-bold text-brand text-lg mb-4">Filters</h2>

        {/* Category */}
        <div className="mb-6">
          <h3 className="font-semibold text-gray-800 mb-3">Category</h3>
          <div className="space-y-2">
            {categories.map((cat) => (
              <label
                key={cat}
                className="flex items-center gap-2 cursor-pointer group"
              >
                <input
                  type="radio"
                  name="category"
                  checked={category === cat}
                  onChange={() => handleCategory(cat)}
                  className="accent-brand w-4 h-4 cursor-pointer"
                />
                <span
                  className={`text-sm transition-colors ${
                    category === cat
                      ? "text-brand font-medium"
                      : "text-gray-600 group-hover:text-gray-900"
                  }`}
                >
                  {cat}
                </span>
              </label>
            ))}
          </div>
        </div>

        {/* Price Range */}
        <div className="mb-6">
          <h3 className="font-semibold text-gray-800 mb-3">Price</h3>
          <input
            type="range"
            min={0}
            max={1000}
            step={10}
            value={maxPrice}
            onChange={handlePrice}
            className="w-full"
          />
          <div className="flex justify-between text-xs text-gray-500 mt-1">
            <span>0</span>
            <span className="font-medium text-brand">${maxPrice}</span>
            <span>1000</span>
          </div>
        </div>

        {/* Brand */}
        <div>
          <h3 className="font-semibold text-gray-800 mb-3">Brand</h3>
          <select
            value={brand}
            onChange={(e) => handleBrand(e.target.value)}
            className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand text-gray-700"
          >
            {brands.map((b) => (
              <option key={b} value={b}>
                {b}
              </option>
            ))}
          </select>
        </div>
      </div>
    </aside>
  );
}
