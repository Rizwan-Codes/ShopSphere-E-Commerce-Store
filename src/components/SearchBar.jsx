function SearchBar({ value, onChange }) {
    return (
        <div className="relative w-full">
            <label
                htmlFor="sort"
                className="mb-2 block font-stretch-50% font-medium text-slate-500 ml-1"
            >
                Search Products
            </label>
            <span className="pointer-events-none absolute text-xl left-4 top-13.5 -translate-y-1/2 text-slate-400">🔍︎</span>
            <input type="text"
                value={value}
                onChange={(e) => onChange(e.target.value)}
                placeholder="Wireless Headphones..."
                aria-label="Search products"
                className="w-full rounded-xl border border-slate-200 bg-white py-3 pl-11 pr-4 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-2 focus:ring-indigo-100"
            />

        </div>
    )
}

export default SearchBar;