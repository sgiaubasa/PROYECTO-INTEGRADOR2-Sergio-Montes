import { useFormik } from "formik";
import { useState } from "react";
import initialValues from "./contact-form.initial-value.js";
import contactFormSchema from "./contact-form.validation-schema.js";

export const useContactForm = () => {
    const [ isSubmitted, setIsSubmitted ] = useState(false);

    const formik = useFormik({
        initialValues,
        validationSchema: contactFormSchema,
        validateOnChange: false, // 🔹 Solo valida al enviar
        validateOnBlur: false, // 🔹 No valida al salir de un campo
        onSubmit: (values, { resetForm }) => {
            console.log("📨 Consulta enviada:", values);
            setIsSubmitted(true);
            resetForm();
            setTimeout(() => setIsSubmitted(false), 3000);
        },
    });

    const handleClose = () => setIsSubmitted(false);

    return { formik, isSubmitted, handleClose };
};