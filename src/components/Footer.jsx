
import { Link } from "react-router-dom";

function Footer() {
    const year = new Date().getFullYear();

    const categories = [
        "men's clothing",
        "women's clothing",
        "jewelery",
        "electronics",
    ];

    return (
        <footer className="relative overflow-hidden bg-slate-950">
            <div className="absolute -right-40 -top-40 h-112.5 w-112.5 rounded-full bg-indigo-600/20 blur-[120px]" />
            <div className="absolute -bottom-40 -left-40 h-100 w-100 rounded-full bg-violet-600/20 blur-[120px]" />
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-size-[70px_70px]" />

            <div className="relative mx-auto max-w-7xl px-4 pt-16 sm:px-6 lg:px-8">
                <div className="grid gap-12 border-b border-white/10 pb-12 sm:grid-cols-2 lg:grid-cols-4">

                    {/* Brand */}
                    <div className="sm:col-span-2 lg:col-span-1">
                        <Link to="/" className="text-2xl font-bold text-white fonta">
                            Shop<span className="text-blue-500">Shpere</span>
                        </Link>
                        <p className="mt-4 max-w-xs text-sm font-normal leading-6 text-slate-400">
                            Quality products, curated collections and a shopping
                            experience built around you.
                        </p>

                        <div className="mt-6 flex items-center gap-3">
                            {[
                                { icon: "ri-facebook-fill", label: "Facebook" },
                                { icon: "ri-instagram-line", label: "Instagram" },
                                { icon: "ri-twitter-x-line", label: "X" },
                                { icon: "ri-github-fill", label: "GitHub" },
                            ].map(({ icon, label }) => (
                                <a
                                    key={label}
                                    href="#"
                                    aria-label={label}
                                    className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-300 transition hover:border-blue-500/40 hover:bg-blue-500/10 hover:text-blue-400"
                                >
                                    <i className={`${icon} text-base`} />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="fonta text-sm font-semibold uppercase tracking-[0.2rem] text-white">
                            Quick Links
                        </h3>
                        <ul className="mt-5 space-y-3 text-sm font-normal text-slate-400">
                            <li>
                                <Link to="/" className="transition hover:text-blue-400">
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link to="/products" className="transition hover:text-blue-400">
                                    Products
                                </Link>
                            </li>
                            <li>
                                <Link to="/cart" className="transition hover:text-blue-400">
                                    Cart
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Categories */}
                    <div>
                        <h3 className="fonta text-sm font-semibold uppercase tracking-[0.2rem] text-white">
                            Categories
                        </h3>
                        <ul className="mt-5 space-y-3 text-sm font-normal capitalize text-slate-400">
                            {categories.map((category) => (
                                <li key={category}>
                                    <Link
                                        to={`/products?category=${encodeURIComponent(category)}`}
                                        state={{ scrollTo: "products-section" }}
                                        className="transition hover:text-blue-400">
                                        {category}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="fonta text-sm font-semibold uppercase tracking-[0.2rem] text-white">
                            Get in Touch
                        </h3>
                        <ul className="mt-5 space-y-3 text-sm font-normal text-slate-400">
                            <li className="flex items-center gap-2">
                                <i className="ri-mail-line text-blue-400" />
                                support@shopshpere.com
                            </li>
                            <li className="flex items-center gap-2">
                                <i className="ri-phone-line text-blue-400" />
                                +92 300 0000000
                            </li>
                            <li className="flex items-center gap-2">
                                <i className="ri-map-pin-2-line text-blue-400" />
                                Punjab, Pakistan
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom bar */}
                <div className="flex flex-col items-center justify-between gap-4 py-6 text-sm font-normal text-slate-500 sm:flex-row">
                    <p>&copy; {year} ShopShpere. Build by Rizwan Ali.</p>
                    <div className="flex items-center gap-6">
                        <a href="#" className="transition hover:text-blue-400">
                            Privacy Policy
                        </a>
                        <a href="#" className="transition hover:text-blue-400">
                            Terms of Service
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
