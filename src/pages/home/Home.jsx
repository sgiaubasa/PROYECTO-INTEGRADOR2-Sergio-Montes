import HighlightedProducts from "../../components/product/HighlightedProducts";
import Slider from "../../components/slider/Slider";
import HighlightedParagraph from "../../components/texts/HighlightedParagraph";

const featuredProducts = [
    {
        id: 1,
        title: "Revestimiento Roble",
        description: "Elegancia natural para interiores.",
        price: 1200,
        image: "/images/destacado/revestimientoroble.jpg",
    },
    {
        id: 2,
        title: "Deck de Madera",
        description: "Resistente y estético para exteriores.",
        price: 2500,
        image: "/images/destacado/deckmadera.jpg",
    },
    {
        id: 3,
        title: "Piso Flotante",
        description: "Confort y diseño para tu hogar.",
        price: 1800,
        image: "/images/destacado/piso.jpg",
    },
];

const Home = () => {
    return (
        <main className="home">
            {/* Slider con 3 imágenes */}
            <Slider
                images={[
                    "/images/slider/slider1.jpg",
                    "/images/slider/images6.jpg",
                    "/images/slider/media.jpg",
                ]}
                interval={4000}/>

            {/* Texto de bienvenida */}
            <HighlightedParagraph text="¡Bienvenido a nuestra tienda de servicios de colocación y revestimiento en madera! Descubre calidad, diseño y confianza en cada proyecto." />

            {/* Productos destacados */}
            <HighlightedProducts products={featuredProducts} />
        </main>
    );
};

export default Home;