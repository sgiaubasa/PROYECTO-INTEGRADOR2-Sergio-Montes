import { Text } from "@/components/texts";
import "./vision.scss";

const Vision = () => {
    return (
        <section className="vision">
            <Text className="vision__title" variant="h3">Visión</Text>
            <div>
                <img
                    className="vision__image"
                    src={"/images/about/vision.png"}
                    alt="Imagen de la visión de la empresa"/>
                <Text className="vision__description" variant="p">
                    Ser la empresa líder en soluciones de revestimientos decorativos en
                    Argentina, reconocida por la innovación, calidad y diseño en cada
                    producto, brindando experiencias únicas que transformen los espacios de
                    nuestros clientes.
                </Text>
            </div>
        </section>
    );
};

export default Vision;