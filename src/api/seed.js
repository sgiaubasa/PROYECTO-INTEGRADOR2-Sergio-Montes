import initialProducts from "./products.data";

const KEY_PRODUCTS = "products";

export const seedProducts = () => {
    const data = localStorage.getItem(KEY_PRODUCTS);

    if (!data) {
        localStorage.setItem(KEY_PRODUCTS, JSON.stringify(initialProducts));
        console.log("DEBUG seedProducts → base inicial cargada");
    } else {
        console.log("DEBUG seedProducts → ya existen productos en localStorage");
    }
};