import { Text } from "@/components/texts";
import "./values.scss";

const Values = () => {
    return (
        <section className="values">
            <Text className="values__title" variant="h3">Valores</Text>
            <div>
                <img
                    className="values__image"
                    src={"/images/about/values.png"}
                    alt="Imagen de los valores de la empresa"/>
                <Text className="values__description" variant="p">
                    En AF Revestimientos nos guiamos por valores fundamentales que definen
                    nuestra forma de trabajar. Creemos en la importancia de la calidad, por eso
                    seleccionamos cuidadosamente los materiales y proveedores para garantizar
                    productos duraderos y confiables. Nuestro compromiso con cada cliente se
                    refleja en la responsabilidad y seriedad con la que asumimos cada venta.
                    Apostamos a la innovación, manteniéndonos actualizados en tendencias y
                    tecnologías que aporten valor a nuestros productos. Valoramos profundamente
                    la atención personalizada, escuchando y comprendiendo las necesidades de cada
                    persona que confía en nosotros. Actuamos con total transparencia en cada
                    operación, brindando información clara y honesta. Finalmente, sentimos una
                    verdadera pasión por el diseño, convencidos de que un buen revestimiento
                    puede transformar un espacio y mejorar la calidad de vida.
                </Text>
            </div>
        </section>
    );
};

export default Values;