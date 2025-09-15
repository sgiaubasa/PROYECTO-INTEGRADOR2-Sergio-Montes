import AlertSuccessForm from "@/components/alerts/AlertSuccessForm";
import { ButtonPrimary } from "@/components/buttons";
import Input from "@/components/inputs/Input";
import "./contact-form.scss";
import useContactForm from "./useContactForm";

const ContactForm = () => {
    const { formik, isSubmitted, isSubmitDisabled, close } = useContactForm();

    const handleSubmit = (e) => {
        e.preventDefault(); // ✅ Evita que el form navegue a /contact?...
        formik.handleSubmit(e);
    };

    return (
        <form className="contact-form" onSubmit={handleSubmit}>
            <Input name="name" label="Nombre" formik={formik} />
            <Input name="surname" label="Apellido" formik={formik} />
            <Input name="email" label="Email" type="email" formik={formik} />
            <Input name="phone" label="Teléfono" formik={formik} />
            <Input name="query" label="Consulta" as="textarea" rows={4} formik={formik} />

            <div className="contact-form__actions">
                <ButtonPrimary type="submit" disabled={isSubmitDisabled}>
          Enviar
                </ButtonPrimary>
            </div>

            <AlertSuccessForm
                open={isSubmitted}
                message="Tu consulta fue enviada correctamente. Te responderemos en breve."
                onClose={close}/>
        </form>
    );
};

export default ContactForm;