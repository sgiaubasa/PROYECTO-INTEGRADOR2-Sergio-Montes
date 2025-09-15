import { useEffect, useState } from "react";
import productsApi from "../api/products.api.js";

export const useProduct = () => {
    const [ products, setProducts ] = useState([]);
    const [ isLoading, setIsLoading ] = useState(false);
    const [ error, setError ] = useState(null);

    const fileOnly = (v) => String(v || "").split(/[/\\]/).pop();

    const normalizeProduct = (p) => ({
        ...p,
        name: p.name || p.title || "Sin nombre",
        title: p.title || p.name || "Sin nombre",
        code: p.code || `P-${p.id}`,
        description: p.description || "",
        price: Number(p.price ?? 0),
        stock: Number(p.stock ?? 0),
        thumbnail: fileOnly(p.thumbnail || p.image) || "placeholder.png",
    });

    const fetchProducts = async () => {
        setIsLoading(true);
        setError(null);
        try {
            const data = await productsApi.fetchProducts();
            const normalized = (data || []).map(normalizeProduct);
            setProducts(normalized);
        } catch (err) {
            setProducts([]);
            setError(err?.message || "Error al cargar productos.");
        }
        setIsLoading(false);
    };

    const fetchProductById = async (id) => {
        setIsLoading(true);
        setError(null);
        let product = null;
        try {
            product = await productsApi.fetchProductById(id);
            product = product ? normalizeProduct(product) : null;
        } catch (err) {
            setError(err?.message || "Error al cargar producto.");
        }
        setIsLoading(false);
        return product;
    };

    const createProduct = async (values) => {
        setIsLoading(true);
        setError(null);
        let product = null;
        try {
            // normalizo ANTES de enviar a la API (por si guardás la miniatura cruda)
            const payload = { ...values, thumbnail: fileOnly(values.thumbnail) };
            product = await productsApi.createProduct(payload);
            product = product ? normalizeProduct(product) : null;
            if (product) setProducts((prev) => [ ...prev, product ]);
        } catch (err) {
            setError(err?.message || "Error al crear producto.");
        }
        setIsLoading(false);
        return product;
    };

    const updateProduct = async (id, values) => {
        setIsLoading(true);
        setError(null);
        let product = null;
        try {
            const payload = { ...values, thumbnail: fileOnly(values.thumbnail) };
            product = await productsApi.updateProduct(id, payload);
            product = product ? normalizeProduct(product) : null;
            if (product) {
                setProducts((prev) => prev.map((p) => (p.id === id ? product : p)));
            }
        } catch (err) {
            setError(err?.message || "Error al modificar producto.");
        }
        setIsLoading(false);
        return product;
    };

    const removeProduct = async (id) => {
        setIsLoading(true);
        setError(null);
        try {
            await productsApi.removeProduct(id);
            setProducts((prev) => prev.filter((p) => p.id !== id));
        } catch (err) {
            setError(err?.message || "Error al eliminar producto.");
        }
        setIsLoading(false);
    };

    const checkProductStock = async (id) => {
        setIsLoading(true);
        setError(null);
        let result = false;
        try {
            result = await productsApi.checkProductStock(id);
        } catch (err) {
            setError(err?.message || "Error al chequear stock de producto.");
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