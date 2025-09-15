import initialProducts from "./products.data";

const KEY_PRODUCTS = "products";

export const seedProducts = () => {
    const data = localStorage.getItem(KEY_PRODUCTS);

    if (!data) {
    // 🚀 Solo si no hay nada en localStorage, cargo los iniciales
        localStorage.setItem(KEY_PRODUCTS, JSON.stringify(initialProducts));
        console.log("DEBUG seedProducts → base inicial cargada");
    } else {
    // ✅ Si ya hay productos, los uso tal cual y no los piso
        console.log("DEBUG seedProducts → ya existen productos en localStorage");
    }
};