import PropTypes from "prop-types";
import { useState } from "react";
import "./SearchProduct.scss";

const SearchProduct = ({ onSearch }) => {
    const [ query, setQuery ] = useState("");

    const handleChange = (e) => {
        const value = e.target.value;
        setQuery(value);
        onSearch(value);
    };

    return (
        <form onSubmit={(e) => e.preventDefault()} className="search-product">
            <input
                type="text"
                value={query}
                onChange={handleChange}
                placeholder="🔎 Buscar por nombre o código..."
                className="search-product__input"/>
            <button
                type="submit"
                onClick={() => onSearch(query)}
                className="search-product__button">
        Buscar
            </button>
        </form>
    );
};

SearchProduct.propTypes = {
    onSearch: PropTypes.func.isRequired,
};

export default SearchProduct;