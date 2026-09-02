

function CategoryFilter({ value, onChange, categories }) {
    return (
        <div className="w-full sm:max-w-xs">

            <select
                id="category"
                value={value}
                onChange={(event) => onChange(event.target.value)}
                className="font-normal w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-indigo-100"
            >
                <option value="all">All Categories</option>

                {categories.map((category) => (
                    <option key={category} value={category}>
                        {category}
                    </option>
                ))}
            </select>
        </div>
    )
}

export default CategoryFilter;