# 🛍️ Advanced E-Commerce Store

A modern, responsive, and feature-rich **E-Commerce Store** built with React and Vite. This project focuses on real-world frontend development practices including reusable components, global state management, client-side routing, product filtering, sorting, search, persistent cart functionality, and smooth UI animations.

The project is designed as a **portfolio-ready application** to demonstrate practical React development skills.

---

## ✨ Features

### 🛒 Product Catalog

* Browse a collection of products with a responsive grid layout
* Product category filtering
* Live product search
* Sort products by:

  * Featured
  * Price: Low to High
  * Price: High to Low
* Product result count
* Empty state when no products match the selected filters

### 📦 Product Details

* Dedicated product details page
* Dynamic product routing
* Product image, title, category, rating, price, and description
* Quantity selector
* Add products to cart directly from the details page
* View Cart option after adding a product

### 🛍️ Global Cart Management

* Cart state managed globally using React Context API
* Add products to cart
* Remove products from cart
* Increase/decrease product quantity
* Automatically calculate:

  * Subtotal
  * Total quantity
  * Total price

### 💾 Persistent Cart

* Cart data is stored in `localStorage`
* Cart survives browser refreshes
* Previously added products remain available after reopening the application

### 🎨 Modern UI

* Fully responsive design
* Mobile, tablet, and desktop layouts
* Modern dark hero sections
* Indigo/violet visual theme
* Responsive product grid
* Interactive buttons and cards
* Hover effects
* Smooth transitions
* Scroll-based animations using Motion
* Professional empty states
* Consistent typography and spacing

### ⚡ Performance & Code Quality

* Component-based architecture
* Reusable UI components
* Functional React components
* React Hooks
* Clean separation of concerns
* Client-side routing with React Router
* Efficient filtering and sorting logic

---

## 🧰 Tech Stack

| Technology            | Purpose                              |
| --------------------- | ------------------------------------ |
| **React**             | Frontend UI                          |
| **Vite**              | Development environment & build tool |
| **React Router DOM**  | Client-side routing                  |
| **Context API**       | Global cart state management         |
| **Tailwind CSS**      | Styling and responsive UI            |
| **Motion**            | UI and scroll animations             |
| **JavaScript (ES6+)** | Application logic                    |
| **LocalStorage**      | Persistent cart data                 |
| **Git & GitHub**      | Version control                      |

---

## 🏗️ Project Architecture

The project follows a modular React architecture where pages, reusable components, data, and global state are separated into their own directories.

```text
src/
│
├── components/
│   ├── CategoryFilter.jsx
│   ├── EmptyState.jsx
│   ├── ProductCard.jsx
│   ├── SearchBar.jsx
│   └── SortSelect.jsx
│
├── context/
│   └── CartContext.jsx
│
├── data/
│   └── products.js
│
├── layouts/
│   └── MainLayout.jsx
│
├── pages/
│   ├── Cart.jsx
│   ├── Home.jsx
│   ├── NotFound.jsx
│   ├── ProductDetails.jsx
│   └── Products.jsx
│
├── App.jsx
├── index.css
└── main.jsx
```

---

## 🔀 Application Routes

| Route           | Page            |
| --------------- | --------------- |
| `/`             | Home            |
| `/products`     | Product Catalog |
| `/products/:id` | Product Details |
| `/cart`         | Shopping Cart   |
| `*`             | 404 Not Found   |

---

## 🧠 React Concepts Demonstrated

This project demonstrates several important React concepts used in real-world applications.

### State Management

Local component state is handled using:

```js
useState()
```

Example use cases:

* Search term
* Selected category
* Sorting option
* Product quantity
* Cart feedback state

### Global State

The Context API is used to manage shopping cart state across the application.

```js
const { addToCart } = useCart();
```

This allows different components such as `ProductCard`, `ProductDetails`, and `Cart` to interact with the same cart state.

### Dynamic Routing

Product details use dynamic routes:

```text
/products/:id
```

The product ID is retrieved using:

```js
const { id } = useParams();
```

### Derived Data

Products are dynamically filtered and sorted based on user interaction:

```js
products
  .filter(...)
  .sort(...)
```

### Persistent State

Cart data is synchronized with browser storage so that users don't lose their cart after refreshing the page.

---

## 🔎 Product Search & Filtering

Users can search products using the live search bar.

The application checks the product title against the current search term:

```js
const matchesSearch = product.title
  .toLowerCase()
  .includes(searchTerm.toLowerCase());
```

Category filtering is also applied:

```js
const matchesCategory =
  category === "all" ||
  product.category === category;
```

Both conditions are combined to generate the final product list.

---

## 💰 Product Sorting

The catalog supports price-based sorting.

### Low to High

```js
a.price - b.price
```

### High to Low

```js
b.price - a.price
```

This allows users to quickly find products based on their preferred price range.

---

## 🛒 Cart System

The cart supports:

* Add to cart
* Remove from cart
* Increase quantity
* Decrease quantity
* Automatic subtotal calculation
* Automatic total calculation
* Persistent cart state

Cart functionality is centralized inside:

```text
src/context/CartContext.jsx
```

This prevents individual components from maintaining separate cart states.

---

## 💾 LocalStorage Persistence

The cart is persisted using the browser's `localStorage`.

This means:

```text
Add Product
     ↓
Cart State
     ↓
LocalStorage
     ↓
Refresh Page
     ↓
Cart Restored
```

This creates a more realistic shopping experience.

---

## 🎬 Animations

Motion is used to create a more polished user experience.

Animations include:

* Hero entrance animations
* Product grid reveal
* Staggered product cards
* Scroll-triggered animations
* Product card hover effects
* Image zoom
* Button interaction feedback
* Background glow animations

The goal is to make the interface feel modern without sacrificing usability.

---

## 📱 Responsive Design

The application is designed to work across different screen sizes.

### Desktop

```text
┌─────────────────────────────────────────────┐
│                    Navbar                   │
├─────────────────────────────────────────────┤
│                 Hero Section                │
├─────────────────────────────────────────────┤
│ Search │ Category │ Sort                    │
├────────┬────────┬────────┬─────────────────┤
│ Product│ Product│ Product│ Product         │
├────────┼────────┼────────┼─────────────────┤
│ Product│ Product│ Product│ Product         │
└────────┴────────┴────────┴─────────────────┘
```

### Mobile

```text
┌───────────────────┐
│      Navbar       │
├───────────────────┤
│      Hero         │
├───────────────────┤
│      Search       │
├───────────────────┤
│     Category      │
├───────────────────┤
│       Sort        │
├───────────────────┤
│     Product       │
├───────────────────┤
│     Product       │
├───────────────────┤
│     Product       │
└───────────────────┘
```

---

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone <your-repository-url>
```

### 2. Navigate into the project

```bash
cd Advanced-E-Commerce-Store
```

### 3. Install dependencies

```bash
npm install
```

### 4. Start the development server

```bash
npm run dev
```

The application will be available at the local development URL provided by Vite.

---

## 📦 Build for Production

To create a production build:

```bash
npm run build
```

To preview the production build:

```bash
npm run preview
```

---

## 🧪 Testing Checklist

Before deploying the application, verify:

* [ ] Home page loads correctly
* [ ] Products page loads correctly
* [ ] Product search works
* [ ] Category filtering works
* [ ] Price sorting works
* [ ] Product details page opens
* [ ] Invalid product ID shows appropriate error state
* [ ] Products can be added to cart
* [ ] Cart quantity can be increased
* [ ] Cart quantity can be decreased
* [ ] Products can be removed
* [ ] Cart totals update correctly
* [ ] Cart survives page refresh
* [ ] Navigation works correctly
* [ ] Mobile layout works correctly
* [ ] Animations work correctly
* [ ] No console errors

---

## 🔮 Future Improvements

The current project focuses on frontend e-commerce functionality. Possible future improvements include:

* User authentication
* Backend API integration
* Real product database
* Product reviews
* Wishlist functionality
* Advanced multi-filter system
* Pagination
* Checkout page
* Payment gateway integration
* Order history
* User profile
* Admin dashboard
* Product management system
* Backend with Node.js/Express
* MongoDB/PostgreSQL integration
* Loading skeletons
* Toast notifications
* Dark/light theme switcher

---

## 🎯 Portfolio Objective

This project was built to demonstrate practical frontend development skills through a realistic e-commerce application.

It showcases:

* React fundamentals
* Modern component architecture
* State management
* Routing
* Data filtering and sorting
* Persistent browser storage
* Responsive UI development
* Reusable components
* Animation and interaction design
* Git-based development workflow

Rather than being a simple static shopping page, the project focuses on building an interactive application similar to the structure used in real-world frontend projects.

---

## 👨‍💻 Author

**Your Name**

Frontend Developer

### Skills Demonstrated

`React` · `JavaScript` · `Tailwind CSS` · `React Router` · `Context API` · `Responsive Design` · `Git`

---

## ⭐ If you like this project

If this project helped you learn React or inspired you, consider giving the repository a ⭐ on GitHub.

````

### ⚠️ 2 cheezen README mein baad mein update karna

**1. Repository URL**

Abhi:

```bash
git clone <your-repository-url>
````

mein apna actual GitHub URL daalna.

**2. Author**

`Your Name` ki jagah apna naam daal dena.

---

### Git commit

README add karne ke baad:

```bash
git add README.md
```

```bash
git commit -m "docs: add comprehensive project README"
```

Phir:

```bash
git push
```

Ye README tumhare portfolio/GitHub repository ke liye kaafi professional foundation hai. Baad mein project complete hone par **live demo, screenshots, GitHub repo, features aur deployment section** bhi add kar denge.
