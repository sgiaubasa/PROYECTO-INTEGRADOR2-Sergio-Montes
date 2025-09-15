import PropTypes from "prop-types";
import HighlightedProductCard from "./HighlightedProductCard";
import "./highlighted-products.scss";

const HighlightedProducts = ({ products }) => {
    return (
        <section className="highlighted-products">
            <h2>Productos Destacados</h2>
            <div className="highlighted-grid">
                {products.map((p) => (
                    <HighlightedProductCard key={p.id} product={p} />
                ))}
            </div>
        </section>
    );
};

HighlightedProducts.propTypes = {
    products: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            image: PropTypes.string.isRequired,
            title: PropTypes.string.isRequired,
            description: PropTypes.string.isRequired,
            price: PropTypes.number.isRequired,
        }),
    ).isRequired,
};

export default HighlightedProducts;