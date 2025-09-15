import PropTypes from "prop-types";
import "./highlighted-paragraph.scss";

const HighlightedParagraph = ({ text }) => {
    return (
        <section className="highlighted-paragraph">
            <p>{text}</p>
        </section>
    );
};

HighlightedParagraph.propTypes = {
    text: PropTypes.string.isRequired,
};

export default HighlightedParagraph;