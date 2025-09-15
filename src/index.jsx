import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { seedProducts } from "./api/seed";
import Layout from "./components/layout/Layout";
import AppProvider from "./contexts/AppProvider";
import "./index.scss";
import PageRoutes from "./pages/PageRoutes";

seedProducts();

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <AppProvider>
            <BrowserRouter>
                <Layout>
                    <PageRoutes />
                </Layout>
            </BrowserRouter>
        </AppProvider>
    </StrictMode>,
);