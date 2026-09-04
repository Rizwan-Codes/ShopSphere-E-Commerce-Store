import { Link } from "react-router-dom";
import products from "../data/products";
import ProductCard from "../components/ProductCard";

function Home() {
    const featuredIds = [12, 3, 18, 5];
    const featuredProducts = featuredIds
        .map((id) => products.find((product) => product.id === id))
        .filter(Boolean);

    const categories = [
        { name: "men's clothing", icon: "ri-t-shirt-line" },
        { name: "women's clothing", icon: "ri-shirt-line" },
        { name: "jewelery", icon: "ri-vip-diamond-line" },
        { name: "electronics", icon: "ri-cpu-line" },
    ];

    const features = [
        {
            icon: "ri-truck-line",
            title: "Free Shipping",
            desc: "On all orders over $50, delivered to your door.",
        },
        {
            icon: "ri-shield-check-line",
            title: "Secure Payment",
            desc: "Your transactions are encrypted and protected.",
        },
        {
            icon: "ri-refund-2-line",
            title: "Easy Returns",
            desc: "30-day hassle-free return and exchange policy.",
        },
        {
            icon: "ri-customer-service-2-line",
            title: "24/7 Support",
            desc: "Our team is always here to help you out.",
        },
    ];

    return (
        <main className="min-h-screen bg-slate-50">

            {/* Hero Section */}
            <section className="relative overflow-hidden bg-slate-950">
                <div className="absolute -right-40 -top-40 h-112.5 w-112.5 rounded-full bg-indigo-600/20 blur-[120px]" />
                <div className="absolute -bottom-40 -left-40 h-100 w-100 rounded-full bg-violet-600/20 blur-[120px]" />
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-size-[70px_70px]" />

                <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
                    <div className="max-w-3xl">
                        <span className="inline-flex items-center gap-2 rounded-full border border-indigo-400/20 bg-indigo-500/10 px-4 py-2 text-sm font-semibold text-indigo-300 backdrop-blur">
                            <span className="h-2 w-2 animate-pulse rounded-full bg-blue-400" />
                            New Season Arrivals
                        </span>

                        <h1 className="mt-6 fonta text-4xl font-medium tracking-wide text-white sm:text-5xl lg:text-6xl">
                            Everything you need,
                            <span className="block bg-linear-to-r from-indigo-400 via-violet-400 to-purple-400 bg-clip-text text-transparent">
                                nothing you don't.
                            </span>
                        </h1>

                        <p className="mt-5 max-w-2xl text-base font-normal leading-7 text-slate-300 sm:text-lg">
                            Discover fashion, electronics and accessories
                            handpicked for quality. Shop the collection and
                            find pieces you'll actually use.
                        </p>

                        <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                            <Link
                                to="/products"
                                className="fonta inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-6 py-3.5 text-sm font-bold text-white transition hover:bg-indigo-600"
                            >
                                Shop Now
                                <i className="ri-arrow-right-line" />
                            </Link>
                            <Link
                                to="/products"
                                className="fonta inline-flex items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/5 px-6 py-3.5 text-sm font-bold text-white backdrop-blur transition hover:bg-white/10"
                            >
                                Browse Categories
                            </Link>
                        </div>

                        <div className="mt-12 flex flex-wrap items-center gap-x-10 gap-y-4 border-t border-white/10 pt-8">
                            <div>
                                <p className="fonta text-2xl font-bold text-white">
                                    {products.length}+
                                </p>
                                <p className="text-xs font-normal uppercase tracking-[0.2rem] text-slate-400">
                                    Products
                                </p>
                            </div>
                            <div>
                                <p className="fonta text-2xl font-bold text-white">4.8/5</p>
                                <p className="text-xs font-normal uppercase tracking-[0.2rem] text-slate-400">
                                    Avg Rating
                                </p>
                            </div>
                            <div>
                                <p className="fonta text-2xl font-bold text-white">24/7</p>
                                <p className="text-xs font-normal uppercase tracking-[0.2rem] text-slate-400">
                                    Support
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Categories */}
            <section className="relative z-10 mx-auto -mt-8 max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-2 gap-4 rounded-2xl border border-slate-200 bg-white p-4 shadow-xl shadow-slate-200/60 sm:p-6 lg:grid-cols-4">
                    {categories.map(({ name, icon }) => (
                        <Link
                            key={name}
                            to={`/products?category=${encodeURIComponent(name)}`}
                            state={{ scrollTo: "products-section" }}
                            className="group flex flex-col items-center gap-3 rounded-xl border border-slate-100 px-4 py-6 text-center transition hover:border-blue-100 hover:bg-blue-50/50"
                        >
                            <span className="flex h-12 w-12 items-center justify-center rounded-full bg-slate-100 text-xl text-slate-700 transition group-hover:bg-blue-600 group-hover:text-white">
                                <i className={icon} />
                            </span>
                            <span className="fonta text-sm font-medium capitalize text-slate-700 group-hover:text-blue-600">
                                {name}
                            </span>
                        </Link>
                    ))}
                </div>
            </section>

            {/* Features strip */}
            <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                    {features.map(({ icon, title, desc }) => (
                        <div
                            key={title}
                            className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg hover:shadow-slate-200/70"
                        >
                            <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-600/10 text-xl text-blue-600">
                                <i className={icon} />
                            </span>
                            <h3 className="fonta mt-4 text-base font-semibold text-slate-900">
                                {title}
                            </h3>
                            <p className="mt-1.5 text-sm font-normal leading-6 text-slate-500">
                                {desc}
                            </p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Featured Products */}
            <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
                <div className="mb-2 fonta flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
                    <div>
                        <p className="ml-2 text-sm font-normal uppercase tracking-[0.3rem] text-blue-600">
                            Handpicked For You
                        </p>
                        <h2 className="mt-2 ml-2 text-2xl font-normal tracking-wider text-slate-900 sm:text-3xl">
                            Featured products
                        </h2>
                    </div>

                    <Link
                        to="/products"
                        className="ml-2 inline-flex items-center gap-1.5 text-sm font-semibold text-blue-600 transition hover:text-indigo-600 sm:mr-2"
                    >
                        View all products
                        <i className="ri-arrow-right-line" />
                    </Link>
                </div>

                <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                    {featuredProducts.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            </section>

            {/* Newsletter CTA */}
            <section className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
                <div className="relative overflow-hidden rounded-3xl bg-slate-950 px-6 py-14 text-center sm:px-16">
                    <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-indigo-600/20 blur-[100px]" />
                    <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-violet-600/20 blur-[100px]" />

                    <div className="relative mx-auto max-w-xl">
                        <h2 className="fonta text-2xl font-medium tracking-wide text-white sm:text-3xl">
                            Stay in the loop
                        </h2>
                        <p className="mt-3 text-sm font-normal leading-6 text-slate-300 sm:text-base">
                            Subscribe for new arrivals, exclusive deals and
                            weekly picks. No spam, unsubscribe anytime.
                        </p>

                        <form
                            onSubmit={(event) => event.preventDefault()}
                            className="mt-8 flex flex-col gap-3 sm:flex-row"
                        >
                            <input
                                type="email"
                                required
                                placeholder="Enter your email"
                                className="w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-sm font-normal text-white placeholder:text-slate-400 outline-none backdrop-blur focus:border-blue-500 focus:ring-2 focus:ring-indigo-500/30"
                            />
                            <button
                                type="submit"
                                className="fonta inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-blue-600 px-6 py-3 text-sm font-bold text-white transition hover:bg-indigo-600"
                            >
                                Subscribe
                                <i className="ri-send-plane-fill" />
                            </button>
                        </form>
                    </div>
                </div>
            </section>
        </main>
    );
}

export default Home;
