import { Text } from "@/components/texts";
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

                    <form className="form">
                        <div className="form__group">
                            <label htmlFor="id-name">Nombre:</label>
                            <input type="text" id="id-name" name="name" placeholder="Ingresa tu nombre" required />
                        </div>

                        <div className="form__group">
                            <label htmlFor="id-surname">Apellido:</label>
                            <input type="text" id="id-surname" name="surname" placeholder="Ingresa tu apellido" required />
                        </div>

                        <div className="form__group">
                            <label htmlFor="id-email">Email:</label>
                            <input type="email" id="id-email" name="email" placeholder="Ingresa tu correo electrónico" required />
                        </div>

                        <div className="form__group">
                            <label htmlFor="id-phone">Teléfono:</label>
                            <input type="tel" id="id-phone" name="phone" placeholder="Ingresa tu número telefónico" required />
                        </div>

                        <div className="form__group">
                            <label htmlFor="id-query">Consulta:</label>
                            <textarea id="id-query" name="query" rows="5" placeholder="Ingresa tu consulta"></textarea>
                        </div>

                        <button type="submit" className="btn btn--primary">Enviar</button>
                    </form>
                </article>
            </div>
        </section>
    );
};

export default Contact;