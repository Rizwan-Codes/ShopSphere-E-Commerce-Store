import Navbar from "./components/Navbar";
import Layout from "./Layouts/Layout";
import Home from "./pages/Home";
import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from "react-router-dom";
import Products from "./pages/Products";
import Cart from "./pages/Cart";
import NotFound from "./pages/NotFound";
import ProductDetails from "./pages/ProductDetails";
import { CartProvider } from "./context/CartContext";

function App() {

  const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="/" element={<Home />} />
      <Route path="/Products" element={<Products />} />
      <Route path="/products/:id" element={<ProductDetails />} />
      <Route path="/Cart" element={<Cart />} />

      <Route path="*" element={<NotFound />} />
    </Route>
  ))
  return (
    <>
      <CartProvider>
        <RouterProvider router={router} />
      </CartProvider>
    </>

  )
}

export default App;