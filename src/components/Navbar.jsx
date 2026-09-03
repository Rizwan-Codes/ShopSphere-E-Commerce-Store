import { Link, NavLink } from "react-router-dom";
import { useCart } from "../context/CartContext";

function Navbar() {
    const { cartItemsCount } = useCart();

    const navLinkClass = ({ isActive }) =>
        `transition font-bold text-[18px] fonta ${isActive ? "text-slate-900" : "text-slate-500 hover:text-slate-900"}`;

    return (
        <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
            <nav className="mx-auto max-w-7xl flex items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
                <Link
                    to="/"
                    className="text-2xl font-bold text-black fonta"
                >
                    Shop<span className="text-blue-600">Shpere</span>
                </Link>

                <div className="flex items-center gap-8 mr-9">
                    <NavLink to="/" className={navLinkClass}>
                        Home
                    </NavLink>
                    <NavLink to="/products" className={navLinkClass}>
                        Products
                    </NavLink>
                    <NavLink to="/cart" className={({ isActive }) => `${navLinkClass({ isActive })} relative`}>
                        Cart
                        <span className=" h-7 w-7 bg-blue-600 text-[16px] text-white absolute inline-flex items-center justify-center ml-2 rounded-full ">
                            {cartItemsCount}
                        </span>
                    </NavLink>

                </div>

            </nav>
        </header>
    )
}

export default Navbar