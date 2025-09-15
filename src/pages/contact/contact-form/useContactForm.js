import { useFormik } from "formik";
import { useState } from "react";
import initialValues from "./contact-form.initial-value";
import validationSchema from "./contact-form.validation-schema";

export const useContactForm = () => {
    const [ isSubmitted, setIsSubmitted ] = useState(false);

    const formik = useFormik({
        initialValues,
        validationSchema,
        onSubmit: (values, { resetForm }) => {
            console.log("Consulta enviada:", values); // 👈 debería salir en consola
            setIsSubmitted(true); // 👈 activa la alerta
            resetForm();
        },
    });

    const handleClose = () => {
        console.log("Cerrando alerta..."); // 👈 debug
        setIsSubmitted(false);
    };

    return { formik, isSubmitted, handleClose };
};