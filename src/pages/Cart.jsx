import { Link } from "react-router-dom";
import {useCart} from "../context/CartContext"
import { useState } from "react";


function Cart() {
  const {
    cart,
    removeFromCart,
    updateQuantity,
    clearCart,
    cartSubtotal,
    shipping,
    tax,
    grandTotal,
  } = useCart();

  const [checkoutMessage, setCheckoutMessage] = useState(false);

  if (cart.length === 0) {
    return (
      <section className="flex min-h-[70vh] items-center justify-center px-4 py-12">
        <div className="w-full max-w-lg text-center">
          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-slate-100 text-4xl">
            <i class="ri-shopping-bag-line"></i>
          </div>

          <h1 className="mt-6 text-3xl fonta text-slate-900">
            Your Cart is Empty
          </h1>

          <p className="mt-3 text-slate-500">
            You haven't added any products to your cart yet.
            Explore our collection and find something you love.
          </p>

          <Link
            to="/products"
            className="mt-7 inline-flex rounded-xl fonta bg-slate-900 px-6 py-3 font-semibold text-white transition hover:bg-indigo-600"
          >
            Continue Shopping
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-widest text-indigo-600">
            Shopping Cart
          </p>

          <h1 className="mt-2 text-3xl fonta font-bold tracking-tight text-slate-900 sm:text-4xl">
            Review Your Items
          </h1>

          <p className="mt-2 text-slate-500">
            Check your products and quantities before checkout.
          </p>
        </div>

        <button
          type="button"
          onClick={clearCart}
          className="self-start text-sm fonta font-normal tracking-widest text-red-600 transition hover:text-red-700 sm:self-auto"
        >
          Clear Cart <span><i class="ri-close-large-line"></i></span>
        </button>
      </div>

      {/* Main Content */}
      <div className="mt-10 grid gap-8 lg:grid-cols-[minmax(0,1fr)_370px]">
        {/* Cart Items */}
        <div className="space-y-4">
          {cart.map((item) => (
            <article
              key={item.id}
              className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm"
            >
              <div className="flex flex-col gap-5 sm:flex-row sm:items-center">
                {/* Image */}
                <Link
                  to={`/products/${item.id}`}
                  className="shrink-0 overflow-hidden rounded-xl"
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-28 w-full object-cover transition hover:scale-105 sm:h-28 sm:w-28"
                  />
                </Link>

                {/* Product Info */}
                <div className="min-w-0 flex-1">
                  <p className="text-sm font-medium text-indigo-600">
                    {item.category}
                  </p>

                  <Link to={`/products/${item.id}`}>
                    <h2 className="mt-1 line-clamp-2 fonta font-semibold text-slate-900 transition hover:text-indigo-600">
                      {item.title}
                    </h2>
                  </Link>

                  <p className="mt-2 fonta text-sm text-slate-500">
                    ${item.price.toFixed(2)} each
                  </p>
                </div>

                {/* Quantity + Price */}
                <div className="flex items-center justify-between gap-6 sm:flex-col sm:items-end">
                  <div className="flex items-center rounded-xl border border-slate-200">
                    <button
                      type="button"
                      onClick={() =>
                        updateQuantity(
                          item.id,
                          item.quantity - 1
                        )
                      }
                      disabled={item.quantity === 1}
                      aria-label={`Decrease quantity of ${item.title}`}
                      className="px-3 py-2 text-lg text-slate-600 transition hover:bg-slate-100 disabled:cursor-not-allowed disabled:opacity-40"
                    >
                      −
                    </button>

                    <span className="min-w-10 text-center text-sm font-semibold text-slate-900">
                      {item.quantity}
                    </span>

                    <button
                      type="button"
                      onClick={() =>
                        updateQuantity(
                          item.id,
                          item.quantity + 1
                        )
                      }
                      className="px-3 py-2 text-lg text-slate-600 transition hover:bg-slate-100"
                      aria-label={`Increase quantity of ${item.title}`}
                    >
                      +
                    </button>
                  </div>

                  <p className="text-lg fonta font-medium text-slate-900">
                    ${(item.price * item.quantity).toFixed(2)}
                  </p>
                </div>
              </div>

              {/* Remove */}
              <div className="mt-4 border-t border-slate-100 pt-4">
                <button
                  type="button"
                  onClick={() => removeFromCart(item.id)}
                  className="text-sm fonta  text-red-600 transition hover:text-red-700 cursor-pointer"
                >
                  Remove Item
                </button>
              </div>
            </article>
          ))}

          {/* Continue Shopping */}
          <Link
            to="/products"
            className="inline-flex items-center text-sm fonta font-semibold text-slate-700 transition hover:text-indigo-600"
          >
            <span><i class="ri-arrow-left-line"></i></span> Continue Shopping
          </Link>
        </div>

        {/* Order Summary */}
        <aside className="h-fit rounded-2xl border border-slate-200 bg-white p-6 shadow-sm lg:sticky lg:top-24">
          <h2 className="text-xl fonta font-bold text-slate-900">
            Order Summary
          </h2>

          <div className="mt-6 space-y-4">
            {/* Subtotal */}
            <div className="flex items-center justify-between text-sm">
              <span className="text-slate-600">
                Subtotal
              </span>

              <span className="font-medium text-slate-900">
                ${cartSubtotal.toFixed(2)}
              </span>
            </div>

            {/* Shipping */}
            <div className="flex items-center justify-between text-sm">
              <span className="text-slate-600">
                Shipping
              </span>

              <span className="font-medium text-slate-900">
                {shipping === 0 ? "Free" : `$${shipping.toFixed(2)}`}
              </span>
            </div>

            {/* Tax */}
            <div className="flex items-center justify-between text-sm">
              <span className="text-slate-600">
                Estimated Tax
              </span>

              <span className="font-medium text-slate-900">
                ${tax.toFixed(2)}
              </span>
            </div>

            <div className="border-t border-slate-200 pt-4">
              <div className="flex items-center justify-between">
                <span className="fonta text-base font-semibold text-slate-900">
                  Total
                </span>

                <span className="text-2xl fonta text-slate-900">
                  ${grandTotal.toFixed(2)}
                </span>
              </div>
            </div>
          </div>

          {/* Checkout */}
          <button
            type="button"
            onClick={() => setCheckoutMessage(true)}
            className="mt-6 w-full rounded-xl bg-slate-900 px-5 py-3.5 fonta font-semibold text-white transition hover:bg-indigo-600"
          >
            Proceed to Checkout
          </button>

          {checkoutMessage && (
            <div className="mt-4 rounded-xl bg-emerald-50 p-4 text-sm fonta font-medium text-emerald-700">
              Checkout flow is ready to be connected to a payment
              provider.
            </div>
          )}

          <p className="mt-4 text-center text-xs leading-5 text-slate-500">
            Taxes and shipping are estimated and may change
            during checkout.
          </p>
        </aside>
      </div>
    </section>
  );
}

export default Cart;