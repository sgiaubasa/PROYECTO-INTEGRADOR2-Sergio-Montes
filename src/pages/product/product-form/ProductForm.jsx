import AlertSuccessForm from "@/components/alerts/AlertSuccessForm";
import { ButtonDanger, ButtonPrimary } from "@/components/buttons";
import {
    InputDescription,
    InputName,
    InputPrice,
    InputStock,
    InputThumbnail,
} from "@/components/inputs";
import AppContext from "@/contexts/AppContext";
import PropTypes from "prop-types";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import "./product-form.scss";
import useProductForm from "./useProductForm.js";

const ProductForm = ({ idProduct, className, ...restProps }) => {
    const classes = `product-form ${className ?? ""}`;

    const { formik, isSubmitted, isSubmitDisabled, cancel, close } =
        useProductForm(idProduct);

    const navigate = useNavigate();
    const { productsContext } = useContext(AppContext);
    const { fetchProducts } = productsContext;

    // función para limpiar rutas tipo C:\fakepath\
    const normalizeThumbnail = (value) => {
        if (!value) return "placeholder.png";
        return value.replace(/^.*[\\/]/, "");
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const normalizedValues = {
            ...formik.values,
            thumbnail: normalizeThumbnail(formik.values.thumbnail),
        };
        formik.setValues(normalizedValues, false);
        formik.handleSubmit(e);
    };

    // ✅ cuando se cierre la alerta → refrescamos productos y navegamos
    const handleCloseSuccess = () => {
        fetchProducts(); // refresca la lista
        navigate("/products"); // redirige a listado
    };

    return (
        <form className={classes} onSubmit={handleSubmit} {...restProps}>
            <InputName formik={formik} />
            <InputDescription formik={formik} />
            <InputPrice formik={formik} />
            <InputStock formik={formik} />
            <InputThumbnail formik={formik} />

            <img
                className="product-form__image"
                src={`/images/products/${formik.values.thumbnail || "placeholder.png"}`}
                alt="Imagen del producto"/>

            <div className="product-form__actions">
                <ButtonPrimary type="submit" disabled={isSubmitDisabled}>
                    Guardar
                </ButtonPrimary>
                <ButtonDanger type="button" onClick={cancel}>
                    Cancelar
                </ButtonDanger>
                <ButtonDanger type="button" onClick={close}>
                    Cerrar
                </ButtonDanger>
            </div>

            <AlertSuccessForm
                open={isSubmitted}
                message={
                    idProduct
                        ? "Producto actualizado correctamente."
                        : "Producto creado correctamente."
                }
                onClose={handleCloseSuccess}/>
        </form>
    );
};

ProductForm.propTypes = {
    idProduct: PropTypes.oneOfType([ PropTypes.string, PropTypes.number ]),
    className: PropTypes.string,
};

export default ProductForm;