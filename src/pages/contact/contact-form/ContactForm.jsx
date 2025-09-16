import AlertSuccessForm from "@/components/alerts/AlertSuccessForm";
import { ButtonPrimary } from "@/components/buttons";
import "./contact-form.scss";
import { useContactForm } from "./useContactForm.js";

const ContactForm = () => {
    const { formik, isSubmitted, handleClose } = useContactForm();

    return (
        <form
            className="contact-form"
            onSubmit={(e) => {
                e.preventDefault();
                formik.handleSubmit(e);
            }}>
            <h2>Formulario de consulta</h2>

            {/* Nombre */}
            <div className="form-group">
                <label htmlFor="name">Nombre:</label>
                <input
                    id="name"
                    type="text"
                    name="name"
                    placeholder="Ingresa tu nombre"
                    value={formik.values.name}
                    onChange={formik.handleChange}/>
                {formik.errors.name && <span className="error">{formik.errors.name}</span>}
            </div>

            {/* Apellido */}
            <div className="form-group">
                <label htmlFor="surname">Apellido:</label>
                <input
                    id="surname"
                    type="text"
                    name="surname"
                    placeholder="Ingresa tu apellido"
                    value={formik.values.surname}
                    onChange={formik.handleChange}/>
                {formik.errors.surname && <span className="error">{formik.errors.surname}</span>}
            </div>

            {/* Email */}
            <div className="form-group">
                <label htmlFor="email">Email:</label>
                <input
                    id="email"
                    type="email"
                    name="email"
                    placeholder="Ingresa tu correo electrónico"
                    value={formik.values.email}
                    onChange={formik.handleChange}/>
                {formik.errors.email && <span className="error">{formik.errors.email}</span>}
            </div>

            {/* Teléfono */}
            <div className="form-group">
                <label htmlFor="phone">Teléfono:</label>
                <input
                    id="phone"
                    type="text"
                    name="phone"
                    placeholder="Ingresa tu número telefónico"
                    value={formik.values.phone}
                    onChange={formik.handleChange}/>
                {formik.errors.phone && <span className="error">{formik.errors.phone}</span>}
            </div>

            {/* Consulta */}
            <div className="form-group">
                <label htmlFor="inquiry">Consulta:</label>
                <textarea
                    id="inquiry"
                    name="inquiry"
                    placeholder="Ingresa tu consulta"
                    value={formik.values.inquiry}
                    onChange={formik.handleChange}/>
                {formik.errors.inquiry && <span className="error">{formik.errors.inquiry}</span>}
            </div>

            {/* Botón */}
            <ButtonPrimary type="submit">Enviar</ButtonPrimary>

            {/* ✅ Cartel de confirmación */}
            <AlertSuccessForm
                open={isSubmitted}
                message="Tu consulta fue enviada correctamente. Te responderemos en breve."
                onClose={handleClose}/>
        </form>
    );
};

export default ContactForm;