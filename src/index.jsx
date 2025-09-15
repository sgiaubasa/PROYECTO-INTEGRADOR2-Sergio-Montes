import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import Layout from "./components/layout/Layout";
import AppProvider from "./contexts/AppProvider";
import "./index.scss";
import PageRoutes from "./pages/PageRoutes";

// 👉 Importamos la semilla
import { seedProducts } from "./api/seed";

// 🚀 Ejecutamos la semilla antes de renderizar
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