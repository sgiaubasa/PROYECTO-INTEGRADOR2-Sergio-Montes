import { useEffect, useState } from "react";
import productsApi from "../api/products.api.js";

export const useProduct = () => {
    const [ products, setProducts ] = useState([]);
    const [ isLoading, setIsLoading ] = useState(false);
    const [ error, setError ] = useState(null);

    // 🔑 Normaliza cualquier producto que venga del API
    const normalizeProduct = (p) => ({
        ...p,
        name: p.name || p.title || "Sin nombre", // 👈 garantiza name
        title: p.title || p.name || "Sin nombre",
        code: p.code || `P-${p.id}`, // 👈 asegura un código
        description: p.description || "",
        price: p.price || 0,
        stock: p.stock ?? 0,
        // 👇 Solo el nombre del archivo (la ruta se arma en ProductItem.jsx)
        thumbnail: p.thumbnail || "placeholder.png",
    });

    const fetchProducts = async () => {
        setIsLoading(true);
        setError(null);

        try {
            const data = await productsApi.fetchProducts();
            // 🔑 normalizamos todo antes de guardarlo
            const normalized = data.map(normalizeProduct);
            console.debug("DEBUG useProduct → normalized products:", normalized);
            setProducts(normalized);
        } catch (error) {
            setProducts([]);
            setError(error.message || "Error al cargar productos.");
        }

        setIsLoading(false);
    };

    const fetchProductById = async (id) => {
        setIsLoading(true);
        setError(null);
        let product = null;

        try {
            product = await productsApi.fetchProductById(id);
            product = product ? normalizeProduct(product) : null; // 👈 normalizado
        } catch (error) {
            setError(error.message || "Error al cargar producto.");
        }

        setIsLoading(false);
        return product;
    };

    const createProduct = async (values) => {
        setIsLoading(true);
        setError(null);
        let product = null;

        try {
            product = await productsApi.createProduct(values);
            product = product ? normalizeProduct(product) : null;

            if (product) {
                // 👇 agrega el nuevo producto al estado
                setProducts((prev) => [ ...prev, product ]);
            }
        } catch (error) {
            setError(error.message || "Error al crear producto.");
        }

        setIsLoading(false);
        return product;
    };

    const updateProduct = async (id, values) => {
        setIsLoading(true);
        setError(null);
        let product = null;

        try {
            product = await productsApi.updateProduct(id, values);
            product = product ? normalizeProduct(product) : null;

            if (product) {
                // 👇 reemplaza el producto en el estado
                setProducts((prev) =>
                    prev.map((p) => (p.id === id ? product : p)),
                );
            }
        } catch (error) {
            setError(error.message || "Error al modificar producto.");
        }

        setIsLoading(false);
        return product;
    };

    const removeProduct = async (id) => {
        setIsLoading(true);
        setError(null);

        try {
            await productsApi.removeProduct(id);

            // ✅ elimina el producto del estado local
            setProducts((prev) => prev.filter((p) => p.id !== id));

            console.debug(`DEBUG useProduct → producto ${id} eliminado`);
        } catch (error) {
            setError(error.message || "Error al eliminar producto.");
        }

        setIsLoading(false);
    };

    const checkProductStock = async (id) => {
        setIsLoading(true);
        setError(null);
        let result = false;

        try {
            result = await productsApi.checkProductStock(id);
        } catch (error) {
            setError(error.message || "Error al chequear stock de producto.");
        }

        setIsLoading(false);
        return result;
    };

    useEffect(() => {
        fetchProducts();
    }, []);

    return {
        products,
        isLoading,
        error,
        fetchProducts,
        fetchProductById,
        createProduct,
        updateProduct,
        removeProduct,
        checkProductStock,
    };
};