// Utilidad 100% en front: persiste carrito y compra en localStorage

const KEY_CART = "cart";
const KEY_PRODUCTS = "products"; // mismo key que usás en products.api.js

export const getCart = () => {
    try {
        return JSON.parse(localStorage.getItem(KEY_CART)) || [];
    } catch {
        return [];
    }
};

export const saveCart = (cart) => {
    localStorage.setItem(KEY_CART, JSON.stringify(cart));
};

export const clearCart = () => saveCart([]);

export const addToCart = (productId) => {
    const cart = getCart();
    const item = cart.find((i) => i.id === productId);
    if (item) {
        item.qty += 1;
    } else {
        cart.push({ id: productId, qty: 1 });
    }
    saveCart(cart);
    return cart;
};

export const removeFromCart = (productId) => {
    const cart = getCart();
    const idx = cart.findIndex((i) => i.id === productId);
    if (idx !== -1) {
        cart[idx].qty -= 1;
        if (cart[idx].qty <= 0) cart.splice(idx, 1);
    }
    saveCart(cart);
    return cart;
};

export const deleteItem = (productId) => {
    const cart = getCart().filter((i) => i.id !== productId);
    saveCart(cart);
    return cart;
};

export const getProductsLS = () => {
    try {
        return JSON.parse(localStorage.getItem(KEY_PRODUCTS)) || [];
    } catch {
        return [];
    }
};

export const setProductsLS = (products) => {
    localStorage.setItem(KEY_PRODUCTS, JSON.stringify(products));
};

// Devuelve {units, amount}
export const getTotals = () => {
    const cart = getCart();
    const products = getProductsLS();
    return cart.reduce(
        (acc, item) => {
            const p = products.find((x) => x.id === item.id);
            if (!p) return acc;
            acc.units += item.qty;
            acc.amount += Number(p.price || 0) * item.qty;
            return acc;
        },
        { units: 0, amount: 0 },
    );
};

// Verifica stock y descuenta si alcanza. Si no, no hace nada y devuelve {ok:false, faltantes:[{id, need, have}]}
export const checkout = () => {
    const cart = getCart();
    const products = getProductsLS();

    const faltantes = [];
    for (const item of cart) {
        const p = products.find((x) => x.id === item.id);
        if (!p) {
            faltantes.push({ id: item.id, need: item.qty, have: 0 });
            continue;
        }
        const have = Number(p.stock || 0);
        if (have < item.qty) {
            faltantes.push({ id: p.id, need: item.qty, have });
        }
    }

    if (faltantes.length > 0) {
        return { ok: false, faltantes };
    }

    // Descontar stock y guardar
    const updated = products.map((p) => {
        const c = cart.find((i) => i.id === p.id);
        if (!c) return p;
        return { ...p, stock: Number(p.stock || 0) - c.qty };
    // Si querés, registrar una "orden" acá en LS.
    });

    setProductsLS(updated);
    clearCart();
    return { ok: true };
};