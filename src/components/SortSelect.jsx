function SortSelect({ value, onChange }) {
    return (
        <div className="w-full sm:max-w-xs">
            <label
                htmlFor="sort"
                className="mb-2 block font-medium text-slate-500 ml-1"
            >
                Category
            </label>

            <select
                value={value}
                onChange={(e) => onChange(e.target.value)}
                className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-indigo-100"
            >
                <option value="featured">Featured</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
            </select>
        </div>
    )
}

export default SortSelect;