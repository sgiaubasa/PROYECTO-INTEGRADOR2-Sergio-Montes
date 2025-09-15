import AppContext from "@/contexts/AppContext";
import PropTypes from "prop-types";
import { useContext } from "react";
import ProductItem from "../product-item/ProductItem";
import ProductNewItem from "../product-new-item/ProductNewItem";
import "./product-gallery.scss";

const ProductGallery = ({ products, onDeleteProduct }) => {
    const { productsContext } = useContext(AppContext);
    const { isLoading } = productsContext;

    const displayProducts = products || [];

    return (
        <div className="product-gallery">
            {/* Componente para crear un nuevo producto */}
            <ProductNewItem />

            {displayProducts.length > 0 ? (
                displayProducts.map((product) => (
                    <ProductItem
                        key={product.id}
                        product={product}
                        isLoading={isLoading}
                        onDelete={onDeleteProduct}/>
                ))
            ) : (
                <p>No se encontraron productos.</p>
            )}
        </div>
    );
};

// Validación estricta de props
ProductGallery.propTypes = {
    products: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.oneOfType([ PropTypes.string, PropTypes.number ]).isRequired,
            name: PropTypes.string.isRequired,
            title: PropTypes.string.isRequired,
            code: PropTypes.string,
            description: PropTypes.string,
            price: PropTypes.number,
            stock: PropTypes.number,
            thumbnail: PropTypes.string,
        }),
    ).isRequired,
    onDeleteProduct: PropTypes.func, // nueva prop
};

export default ProductGallery;