import PropTypes from "prop-types";
import "./highlighted-product-card.scss";

const HighlightedProductCard = ({ product }) => {
    return (
        <div className="highlighted-card">
            <img src={product.image} alt={product.title} />
            <h3>{product.title}</h3>
            <p>{product.description}</p>
            <span className="price">${product.price}</span>
        </div>
    );
};

HighlightedProductCard.propTypes = {
    product: PropTypes.shape({
        image: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
    }).isRequired,
};

export default HighlightedProductCard;