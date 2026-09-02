import products from "../../../E-commerce-Store/src/data/products";
import ProductCard from "../components/ProductCard";
import { useState } from "react";


function Products() {

  const [searchTerm, setSearchTerm] = useState("");

  const filteredProducts = products.filter((product) => {
    const matchedQuery = product.title.toLowerCase().includes(searchTerm.trim().toLocaleLowerCase());
    return matchedQuery
  });

  const mainproducts = products;

  return (
    <main className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
      <h1 className="fonta text-5xl text-blue-600 font-bold tracking-wider mt-20">Our Products</h1>

      <section>
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        <h1>{searchTerm}</h1>
      </section>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {filteredProducts.map((items) => (
          <div
            key={items.id}
          >
            <ProductCard product={items} />
          </div>
        ))}
      </div>
    </main>
  )
}

export default Products;