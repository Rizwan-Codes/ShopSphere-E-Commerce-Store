# 🛍️ ShopSphere

A modern, responsive e-commerce front-end built with **React**, **React Router**, and **Tailwind CSS**. ShopSphere lets users browse products across multiple categories, search/filter/sort, view product details, and manage a persistent shopping cart.

> This is a front-end portfolio project — there is no backend or payment gateway. Product data is local, and the cart persists in the browser via `localStorage`.

---

## ✨ Features

- **Product catalog** with search, category filter, and sorting
- **Category-aware navigation** — clicking a category on Home or in the Footer takes you to the Products page pre-filtered to that category (via `?category=` URL param), and smooth-scrolls straight to the product grid
- **Product details page** with dynamic routing (`/products/:id`)
- **Global cart** via Context API — add to cart, remove items, update quantities, live subtotal/shipping/tax/grand total
- **Persistent cart** — survives page refresh via `localStorage`
- **Fully responsive Navbar** — collapses into a hamburger menu with a slide-down panel on mobile
- **Scroll restoration** — automatically scrolls to top on route change
- **Empty state** UI when a search/filter returns no results
- **404 page** for unmatched routes

---

## 🧰 Tech Stack

| Technology | Purpose |
|---|---|
| React 19 | UI library |
| React Router DOM v7 | Client-side routing |
| Context API | Global cart state |
| Tailwind CSS v4 | Styling |
| Remix Icon (CDN) | Icons |
| Vite | Dev server & build tool |
| oxlint | Linting |

---

## 🏗️ Project Structure

```
src/
├── components/
│   ├── Navbar.jsx          # Responsive navbar (hamburger on mobile)
│   ├── Footer.jsx          # Site footer with category links
│   ├── ProductCard.jsx     # Reusable product card (used in Home & Products)
│   ├── SearchBar.jsx
│   ├── CategoryFilter.jsx
│   ├── SortSelect.jsx
│   ├── EmptyState.jsx
│   └── ScrollToTop.jsx     # Resets/targets scroll position on route change
│
├── pages/
│   ├── Home.jsx
│   ├── Products.jsx
│   ├── ProductDetails.jsx
│   ├── Cart.jsx
│   └── NotFound.jsx
│
├── Layouts/
│   └── Layout.jsx          # Shared Navbar + Footer wrapper (renders <Outlet />)
│
├── context/
│   └── CartContext.jsx     # Cart state, actions, and the useCart() hook
│
├── data/
│   └── products.js         # Local product dataset
│
├── App.jsx                 # Route definitions
└── main.jsx                # App entry point
```

---

## 🔀 Routes

| Route | Page | Notes |
|---|---|---|
| `/` | Home | Hero, categories, featured products, newsletter |
| `/products` | Products | Supports `?category=<name>` to pre-filter |
| `/products/:id` | Product Details | Uses `useParams()` |
| `/cart` | Cart | Quantity controls + order summary |
| `*` | Not Found | 404 fallback |

---

## 🧠 State Management

Cart state and actions (`cart`, `addToCart`, `removeFromCart`, `updateQuantity`, `clearCart`, derived totals) live in `CartContext.jsx` and are provided at the top of the app via `CartProvider`. Any component that needs cart data — `Navbar`, `ProductCard`, `ProductDetails`, `Cart` — reads it directly:

```jsx
import { useCart } from "../context/CartContext";

const { cart, addToCart } = useCart();
```

This keeps intermediate components (`Layout`, `Home`, `Products`) free of cart-related props they don't use themselves.

---

## 🚀 Getting Started

### Prerequisites
- Node.js v18+
- npm

### Installation

```bash
git clone <your-repository-url>
cd ShopSphere
npm install
```

### Run the dev server

```bash
npm run dev
```

App runs at the local URL Vite prints (default `http://localhost:5173`).

### Build for production

```bash
npm run build
```

### Preview the production build

```bash
npm run preview
```

---

## 🧪 Manual Testing Checklist

- [ ] Home, Products, Product Details, Cart pages all load
- [ ] Search, category filter, and sort work on Products page
- [ ] Category links (Home + Footer) filter Products correctly and scroll to the grid
- [ ] Add to cart works from Home, Products, and Product Details
- [ ] Cart quantity +/-, remove item, and totals update correctly
- [ ] Cart persists after a page refresh
- [ ] Navbar hamburger opens/closes correctly on mobile widths
- [ ] Invalid product ID / unmatched route shows the correct fallback
- [ ] No console errors on any page

---

## 🔮 Possible Future Improvements

- Backend API integration (real product database)
- User authentication
- Wishlist
- Checkout flow + payment gateway
- Order history

---

## 👤 Author

Built by **Rizwan** as a portfolio project to demonstrate React, React Router, Context API, and Tailwind CSS.
