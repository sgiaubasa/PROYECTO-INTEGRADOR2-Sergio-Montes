import AlertSuccessForm from "@/components/alerts/AlertSuccessForm";
import { ButtonPrimary } from "@/components/buttons";
import { useFormik } from "formik";
import initialValues from "./contact-form.initial-value";
import "./contact-form.scss";
import contactFormSchema from "./contact-form.validation-schema";

const ContactForm = () => {
    const formik = useFormik({
        initialValues,
        validationSchema: contactFormSchema,
        onSubmit: (values, { resetForm, setStatus }) => {
            console.log("✅ Datos enviados:", values);

            // 👉 activa la alerta
            setStatus({ success: true });

            // la cerramos a los 3 segundos y limpiamos el form
            setTimeout(() => {
                resetForm();
                setStatus({ success: false });
            }, 3000);
        },
    });

    return (
        <form
            className="contact-form"
            // 🚫 evita que se recargue la página con ?name=...
            onSubmit={(e) => {
                e.preventDefault();
                formik.handleSubmit(e);
            }}>
            <input
                type="text"
                name="name"
                placeholder="Nombre"
                value={formik.values.name}
                onChange={formik.handleChange}/>

            <input
                type="text"
                name="surname"
                placeholder="Apellido"
                value={formik.values.surname}
                onChange={formik.handleChange}/>

            <input
                type="email"
                name="email"
                placeholder="Email"
                value={formik.values.email}
                onChange={formik.handleChange}/>

            <input
                type="text"
                name="phone"
                placeholder="Teléfono"
                value={formik.values.phone}
                onChange={formik.handleChange}/>

            <textarea
                name="query"
                placeholder="Consulta"
                value={formik.values.query}
                onChange={formik.handleChange}/>

            <ButtonPrimary type="submit">Enviar</ButtonPrimary>

            {/* ✅ Cartel de confirmación */}
            <AlertSuccessForm
                open={formik.status?.success || false}
                message="Tu consulta fue enviada correctamente. Te responderemos en breve."
                onClose={() => formik.setStatus({ success: false })}/>
        </form>
    );
};

export default ContactForm;