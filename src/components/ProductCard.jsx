import { Link } from "react-router-dom";
import { useState } from "react";

function ProductCard({ product }) {

   const {
      id,
      title,
      category,
      price,
      rating,
      image,
   } = product;

   return (
      <article className="group overflow-hidden border border-slate-200 rounded-3xl bg-white shadow-sm hover:shadow-xl hover:shadow-slate-200/70 transition-all duration-300 hover-transform hover:-translate-y-1">
         <Link
            to={`/products/${id}`}
            className="relative block overflow-hidden bg-slate-100"
         >
            <img src={product.image}
               className="h-64 w-full object-cover transition duration-400 group-hover:scale-[1.07]"
            />
            <div className=" rounded-full absolute top-4 left-4 fonta border border-white/30 bg-white/90 px-3 py-1.5 text-xs font-bold text-slate-700 shadow-sm backdrop-blur">
               {product.category}
            </div>
            <div className="fonta rounded-full absolute top-4 right-4  bg-slate-950/80 px-3 py-1.5 text-xs font-bold text-white shadow-sm backdrop-blur">
               ★ {product.rating}
            </div>
         </Link>
         <div className="p-5">

            <Link
               to={`/products/${id}`}
               className="font-medium text-[18px] line-clamp-2 min-h-20 leading-7 text-slate-900 transition-colors hover:text-blue-600"
            >
               {product.title}
            </Link>

            <div className="flex items-center justify-between gap-3 fonta">
               <span className="text-xl font-black text-slate-900 tracking-widest">
                  ${product.price.toFixed(2)}
               </span>

               <Link
                  to={`/products/${id}`}
                  className="text-sm font-normal text-blue-500 transition hover:text-blue-700"
               >
                  View details
               </Link>
            </div>
            <button
               className="text-bold fonta text-white text-center p-3 w-full rounded-xl mt-3 bg-slate-950 transition hover:bg-blue-600"
            >
               Add to Cart
            </button>
         </div>
      </article>
   )
}

export default ProductCard;