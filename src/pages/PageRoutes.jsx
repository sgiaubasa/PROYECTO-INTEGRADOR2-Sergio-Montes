import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";

const Home = lazy(() => import("./home/Home.jsx"));
const About = lazy(() => import("./about/About.jsx"));
const Contact = lazy(() => import("./contact/Contact.jsx"));
const Products = lazy(() => import("./products/Products.jsx"));
const Product = lazy(() => import("./product/Product.jsx"));
const ShoppingCart = lazy(() => import("./shopping-cart/ShoppingCart.jsx"));

const PageRoutes = () => {
    return (
        <Suspense fallback="Cargando página...">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/products" element={<Products />} />
                <Route path="/products/new" element={<Product />} />
                <Route path="/products/:id" element={<Product />} />
                <Route path="/shopping-cart" element={<ShoppingCart />} />
            </Routes>
        </Suspense>
    );
};

export default PageRoutes;