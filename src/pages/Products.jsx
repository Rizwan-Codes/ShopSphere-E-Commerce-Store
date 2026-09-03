import products from "../data/products";
import ProductCard from "../components/ProductCard";
import { useState } from "react";
import SearchBar from "../components/SearchBar";
import CategoryFilter from "../components/CategoryFilter";
import SortSelect from "../components/SortSelect";


function Products() {

  const [searchTerm, setSearchTerm] = useState("");
  const [category, setCategory] = useState("all")
  const [sortBy, setSortBy] = useState("Sort by");

  const categories = [
    ...new Set(products.map((products) => products.category)),
  ];

  const filteredProducts = products.filter((product) => {
    const matchedQuery = product.title.toLowerCase().includes(searchTerm.trim().toLocaleLowerCase());
    const matchesCategory = category === "all" || product.category === category;
    return matchedQuery && matchesCategory;
  }).sort((a, b) => {
    if (sortBy === "price-low") {
      return a.price - b.price;
    }
    if (sortBy === "price-high") {
      return b.price - a.price;
    }
    return 0;
  });

  const mainproducts = products;

  return (
    <main className="min-h-screen bg-slate-50">

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-slate-950">
        
        <div className="absolute -right-40 -top-40 h-112.5 w-112.5 rounded-full bg-indigo-600/20 blur-[120px]" />

        <div className="absolute -bottom-40 -left-40 h-100 w-100 rounded-full bg-violet-600/20 blur-[120px]" />

        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-size-[70px_70px]" />

        <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
          <div
            className="max-w-3xl"
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-indigo-400/20 bg-indigo-500/10 px-4 py-2 text-sm font-semibold text-indigo-300 backdrop-blur">
              <span className="h-2 w-2 animate-pulse rounded-full bg-blue-400 font-normal tracking-wide" />
              Explore Our Collection
            </span>

            <h1 className="mt-6 fonta text-4xl font-medium tracking-wide text-white sm:text-5xl lg:text-6xl">
              Find something
              <span className="block bg-linear-to-r from-indigo-400 via-violet-400 to-purple-400 bg-clip-text text-transparent">
                you'll love.
              </span>
            </h1>

            <p className="mt-5 max-w-2xl text-base font-normal leading-7 text-slate-300 sm:text-lg">
              Browse our curated collection of quality products.
              Search, filter, and sort to find exactly what you're
              looking for.
            </p>
          </div>
        </div>
      </section>

      {/* Filter */}
      <section
        className="relative z-10 mx-auto -mt-8 max-w-7xl px-4 sm:px-6 lg:px-8"
      >
        <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-xl shadow-slate-200/60 sm:p-6">
          <div
            className="grid gap-4 lg:grid-cols-[minmax(0,1fr)_auto_auto] lg:items-end"
          >
            <SearchBar
              value={searchTerm}
              onChange={setSearchTerm}
            />
            <CategoryFilter
              value={category}
              onChange={setCategory}
              categories={categories}
            />
            <SortSelect
              value={sortBy}
              onChange={setSortBy}
            />
          </div>
        </div>
      </section>

      {/* Products */}

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-">

        <div className="mb-2 fonta flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="ml-2 text-sm font-normal uppercase tracking-[0.3rem] text-blue-600">
              Our Products
            </p>

            <h2 className="mt-2 ml-2 text-2xl font-normal tracking-wider text-slate-900 sm:text-3xl">
              Latest collection
            </h2>
          </div>

          <div className="rounded-full bg-slate-100 px-4 py-2 text-sm font-extralight text-slate-500">
            {filteredProducts.length}{" "}
            {filteredProducts.length === 1
              ? "proudct" : "products"
            }{" "}
            found
          </div>
        </div>

        {filteredProducts.length > 0 ? (
          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {filteredProducts.map((items) => (
              <div
                key={items.id}
              >
                <ProductCard product={items} />
              </div>
            ))}
          </div>
        ) : (
          <div>
            none of it
          </div>
        )}
      </section>


    </main>
  )
}

export default Products;