
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { useCart } from "../context/CartContext";

function Navbar() {
    const { cartItemsCount } = useCart();
    const [isOpen, setIsOpen] = useState(false);

    const navLinkClass = ({ isActive }) =>
        `transition font-medium fonta text-[18px] ${isActive ? "text-slate-900" : "text-slate-500 hover:text-slate-900"}`;

    const mobileNavLinkClass = ({ isActive }) =>
        `flex items-center justify-between rounded-xl px-4 py-3 transition font-medium fonta text-[16px] ${isActive ? "bg-blue-50 text-slate-900" : "text-slate-500 hover:bg-slate-50 hover:text-slate-900"}`;

    const closeMenu = () => setIsOpen(false);

    return (
        <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
            <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
                <Link
                    to="/"
                    onClick={closeMenu}
                    className="text-2xl font-bold text-black fonta"
                >
                    Shop<span className="text-blue-600">Shpere</span>
                </Link>

                {/* Desktop links */}
                <div className="hidden items-center gap-8 mr-9 md:flex">
                    <NavLink to="/" className={navLinkClass}>
                        Home
                    </NavLink>
                    <NavLink to="/products" className={navLinkClass}>
                        Products
                    </NavLink>
                    <NavLink to="/cart" className={({ isActive }) => `${navLinkClass({ isActive })} relative`}>
                        Cart
                        <span className="h-7 w-7 bg-blue-600 text-[16px] text-white absolute inline-flex items-center justify-center ml-2 rounded-full">
                            {cartItemsCount}
                        </span>
                    </NavLink>
                </div>

                {/* Mobile: cart badge + hamburger */}
                <div className="flex items-center gap-4 md:hidden">
                    <NavLink to="/cart" onClick={closeMenu} className="relative text-slate-700">
                        <i className="ri-shopping-cart-2-line text-2xl" />
                        <span className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-blue-600 text-[11px] font-bold text-white">
                            {cartItemsCount}
                        </span>
                    </NavLink>

                    <button
                        type="button"
                        onClick={() => setIsOpen((prev) => !prev)}
                        aria-label={isOpen ? "Close menu" : "Open menu"}
                        aria-expanded={isOpen}
                        className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 text-slate-700 transition hover:bg-slate-50"
                    >
                        <i className={isOpen ? "ri-close-line text-2xl" : "ri-menu-3-line text-2xl"} />
                    </button>
                </div>
            </nav>

            {/* Mobile dropdown panel */}
            <div
                className={`md:hidden overflow-hidden border-t border-slate-100 bg-white transition-all duration-300 ease-in-out ${isOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
                    }`}
            >
                <div className="flex flex-col gap-1 px-4 py-3 sm:px-6">
                    <NavLink to="/" onClick={closeMenu} className={mobileNavLinkClass}>
                        Home
                        <i className="ri-arrow-right-s-line text-slate-400" />
                    </NavLink>
                    <NavLink to="/products" onClick={closeMenu} className={mobileNavLinkClass}>
                        Products
                        <i className="ri-arrow-right-s-line text-slate-400" />
                    </NavLink>
                    <NavLink to="/cart" onClick={closeMenu} className={mobileNavLinkClass}>
                        Cart
                        <span className="flex h-6 w-6 items-center justify-center rounded-full bg-blue-600 text-[13px] font-bold text-white">
                            {cartItemsCount}
                        </span>
                    </NavLink>
                </div>
            </div>
        </header>
    );
}

export default Navbar;