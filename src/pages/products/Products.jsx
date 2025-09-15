import { Text } from "@/components/texts";
import AppContext from "@/contexts/AppContext";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import SearchProduct from "../../components/product/SearchProduct";
import ProductGallery from "./product-gallery/ProductGallery";
import "./products.scss";

const Products = () => {
    const { productsContext } = useContext(AppContext);
    const { products, removeProduct } = productsContext; // 👈 usamos removeProduct

    const [ filtered, setFiltered ] = useState([]);
    const navigate = useNavigate();

    const normalizeProduct = (p) => {
        const cleanImage = p.image ? p.image.split("/").pop() : undefined;

        return {
            id: p.id,
            name: p.name || p.title || "Sin nombre",
            title: p.title || p.name || "Sin nombre",
            code: p.code || "",
            description: p.description || "",
            price: p.price || 0,
            stock: p.stock ?? 0,
            thumbnail: p.thumbnail || cleanImage || "placeholder.png",
        };
    };

    useEffect(() => {
        const normalized = (products || []).map(normalizeProduct);
        console.log("DEBUG normalized products →", normalized);
        setFiltered(normalized);
    }, [products]);

    const handleSearch = (query) => {
        if (!query) {
            setFiltered(products.map(normalizeProduct));
            return;
        }
        const q = query.toLowerCase();
        const results = products.filter(
            (p) =>
                (p.name && p.name.toLowerCase().includes(q)) ||
                (p.code && p.code.toLowerCase().includes(q)) ||
                (p.description && p.description.toLowerCase().includes(q)),
        );
        setFiltered(results.map(normalizeProduct));
    };

    const handleDeleteProduct = (id) => {
        if (window.confirm("¿Seguro que deseas eliminar este producto?")) {
            removeProduct(id); // 👈 usamos removeProduct
        }
    };

    return (
        <div className="products-page">
            <Text variant="h2">Productos</Text>

            <hr />

            <SearchProduct onSearch={handleSearch} />

            <div className="products-page__header">
                <button
                    className="btn btn--primary"
                    onClick={() => navigate("/products/new")}>
                    Nuevo producto
                </button>
            </div>

            <hr />

            <ProductGallery
                products={filtered}
                onDeleteProduct={handleDeleteProduct}/>

            {filtered.length === 0 && <p>No se encontraron productos.</p>}
        </div>
    );
};

export default Products;