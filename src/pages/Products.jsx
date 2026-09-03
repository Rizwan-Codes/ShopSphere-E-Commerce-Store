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

      <section
        className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
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