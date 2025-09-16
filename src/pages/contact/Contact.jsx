import { Text } from "@/components/texts";
import ContactForm from "./contact-form/ContactForm.jsx";
import "./contact.scss";

const Contact = () => {
    return (
        <section className="contact">
            <Text className="contact__title" variant="h2">Contacto</Text>

            <div className="contact__content">
                <article className="contact__data">
                    <Text className="contact__subtitle" variant="h3">Datos de contacto</Text>
                    <ul className="contact__list">
                        <li className="contact__item">
                            <i className="fas fa-building"></i> AF Revestimientos
                        </li>
                        <li className="contact__item">
                            <i className="fas fa-map-marker-alt"></i> Domicilio: Montevideo 4075, Villa Ballester, Buenos Aires, Argentina
                        </li>
                        <li className="contact__item">
                            <i className="fas fa-mailbox"></i> Código postal: 1653
                        </li>
                        <li className="contact__item">
                            <i className="fas fa-envelope"></i> Email:{" "}
                            <a href="mailto:alfredok@live.com.ar">alfredok@live.com.ar</a>
                        </li>
                        <li className="contact__item">
                            <i className="fas fa-phone-alt"></i> Teléfono:{" "}
                            <a href="tel:+541159328928">+54 11 5932-8928</a>
                        </li>
                    </ul>
                </article>

                <article className="contact__form">
                    <Text className="contact__subtitle" variant="h3">Formulario de consulta</Text>
                    <ContactForm />
                </article>
            </div>
        </section>
    );
};

export default Contact;