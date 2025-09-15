import { Text } from "@/components/texts";
import "./mission.scss";

const Mission = () => {
    return (
        <section className="mission">
            <Text className="mission__title" variant="h3">Misión</Text>
            <div>
                <img
                    className="mission__image"
                    src={"/images/about/mission.png"}
                    alt="Imagen de la misión de la empresa"/>
                <Text className="mission__description" variant="p">
                    Ofrecer a nuestros clientes revestimientos de alta calidad que combinen
                    funcionalidad y estética, acompañando cada proyecto con asesoramiento
                    personalizado, compromiso y excelencia en el servicio, desde la compra
                    hasta la entrega final.
                </Text>
            </div>
        </section>
    );
};

export default Mission;