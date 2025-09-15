import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import "./slider.scss";

const Slider = ({ images, interval }) => {
    const [ currentIndex, setCurrentIndex ] = useState(0);

    // Auto-slide
    useEffect(() => {
        const slideInterval = setInterval(() => {
            setCurrentIndex((prevIndex) =>
                prevIndex === images.length - 1 ? 0 : prevIndex + 1,
            );
        }, interval);

        return () => clearInterval(slideInterval);
    }, [ images, interval ]);

    return (
        <div className="slider">
            {images.map((img, index) => (
                <div
                    key={index}
                    className={`slide ${index === currentIndex ? "active" : ""}`}>
                    <img src={img} alt={`slide-${index}`} />
                </div>
            ))}

            {/* Botones de navegación */}
            <button
                className="prev"
                onClick={() =>
                    setCurrentIndex(
                        currentIndex === 0 ? images.length - 1 : currentIndex - 1,
                    )
                }>
        ❮
            </button>
            <button
                className="next"
                onClick={() =>
                    setCurrentIndex(
                        currentIndex === images.length - 1 ? 0 : currentIndex + 1,
                    )
                }>
        ❯
            </button>

            {/* Indicadores */}
            <div className="indicators">
                {images.map((_, index) => (
                    <span
                        key={index}
                        className={index === currentIndex ? "active" : ""}
                        onClick={() => setCurrentIndex(index)}/>
                ))}
            </div>
        </div>
    );
};

// ✅ Validación de props
Slider.propTypes = {
    images: PropTypes.arrayOf(PropTypes.string).isRequired,
    interval: PropTypes.number,
};

// ✅ Valor por defecto (si no se pasa interval)
Slider.defaultProps = {
    interval: 3000,
};

export default Slider;