import { Link, useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import products from "../data/products";
import { useCart } from "../context/CartContext";

function ProductDetails() {

    const { id } = useParams();
    const navigate = useNavigate();

    const { addToCart } = useCart();

    const [quantity, setQuantity] = useState(1);
    const [added, setAdded] = useState(false);

    const product = products.find(
        (item) => item.id === Number(id)
    );
    if (!product) {
        return (
            <section className="flex min-h-[70vh] flex-col items-center justify-center px-4 text-center">
                <p className="text-5xl font-bold text-slate-900">
                    404
                </p>

                <h1 className="mt-4 text-2xl font-semibold text-slate-800">
                    Product Not Found
                </h1>

                <p className="mt-2 text-slate-500">
                    The product you're looking for doesn't exist.
                </p>

                <Link
                    to="/products"
                    className="mt-6 rounded-xl bg-slate-900 px-5 py-3 font-medium text-white transition hover:bg-indigo-600"
                >
                    Back to Products
                </Link>
            </section>
        );
    }


    const handleIncrease = () => {
        setQuantity((currentQuantity) => currentQuantity + 1);
    };

    const handleDecrease = () => {
        setQuantity((currentQuantity) =>
            Math.max(1, currentQuantity - 1)
        );
    };

    const handleAddToCart = () => {
        for (let i = 0; i < quantity; i++) {
            addToCart(product);
        }

        setAdded(true);
    };

    return (
        <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
            <Link
                to="/products"
                className="text-sm font-normal fonta text-white bg-black px-3 py-2 rounded-lg transition  "
            >
               <span><i class="ri-arrow-left-line"></i></span> Back
            </Link>

            <div className="mt-8 grid gap-10 lg:grid-cols-2 lg:items-start">
                {/* Image */}
                <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white">
                    <img
                        src={product.image}
                        alt={product.title}
                        onError={(event) => {
                            event.currentTarget.src =
                                "https://placehold.co/800x600?text=Product+Image";
                        }}
                        className="h-full w-full object-cover sm:h-130"
                    />
                </div>

                {/* Information */}
                <div className="py-2">
                    <p className="text-sm fonta font-medium uppercase tracking-widest text-indigo-600">
                        {product.category}
                    </p>

                    <h1 className="mt-3 text-3xl fonta font-bold tracking-wide text-slate-900 sm:text-4xl">
                        {product.title}
                    </h1>

                    <div className="mt-4 flex items-center gap-3">
                        <span className="rounded-full bg-amber-50 px-3 py-1 text-sm font-medium text-amber-600">
                            ★ {product.rating}
                        </span>

                        <span className="text-sm text-slate-500">
                            Customer rating
                        </span>
                    </div>

                    <p className="mt-6 text-3xl fonta tracking-wide font-bold text-slate-900">
                        ${product.price.toFixed(2)}
                    </p>

                    <p className="mt-6 leading-7 text-slate-600">
                        {product.description}
                    </p>

                    {/* Quantity */}
                    <div className="mt-8">
                        <p className="mb-3 text-sm fonta font-semibold text-slate-800">
                            Quantity
                        </p>

                        <div className="inline-flex items-center rounded-xl border border-slate-200 bg-white">
                            <button
                                type="button"
                                onClick={handleDecrease}
                                className="px-4 py-3 text-lg text-slate-600 transition hover:bg-slate-100"
                                aria-label="Decrease quantity"
                            >
                                −
                            </button>

                            <span className="min-w-12 text-center font-semibold text-slate-900">
                                {quantity}
                            </span>

                            <button
                                type="button"
                                onClick={handleIncrease}
                                className="px-4 py-3 text-lg text-slate-600 transition hover:bg-slate-100"
                                aria-label="Increase quantity"
                            >
                                +
                            </button>
                        </div>
                    </div>
                    <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                        <button
                            type="button"
                            onClick={handleAddToCart}
                            className="flex-1 rounded-xl bg-slate-900 px-6 py-3.5 font-semibold text-white transition hover:bg-indigo-600"
                        >
                            {added ? "Added to Cart ✓" : "Add to Cart"}
                        </button>

                        {added && (
                            <button
                                type="button"
                                onClick={() => navigate("/cart")}
                                className="flex-1 rounded-xl border border-slate-300 bg-white px-6 py-3.5 font-semibold text-slate-900 transition hover:bg-slate-50"
                            >
                                View Cart
                            </button>
                        )}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ProductDetails;