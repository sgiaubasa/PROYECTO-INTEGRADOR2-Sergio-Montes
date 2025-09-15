import { ButtonPrimary } from "@/components/buttons";
import { Skeleton } from "@/components/skeleton";
import { Text } from "@/components/texts";
import AppContext from "@/contexts/AppContext";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import { CardActionArea, Card as MuiCard } from "@mui/material";
import PropTypes from "prop-types";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import "./product-item.scss";

const ProductItem = (props) => {
    const {
        product,
        isLoading,
        className,
        onDelete,
        ...restProps
    } = props;

    const navigate = useNavigate();
    const { shoppingCartContext } = useContext(AppContext);
    const { addArticle, subtractArticle } = shoppingCartContext;

    const classes = `product-item ${className ?? ""}`;

    const displayName = product.name || product.title || "Sin nombre";

    // 🔧 (1) SIEMPRE me quedo con el nombre de archivo y lo codifico (soporta espacios)
    const rawThumb = product.thumbnail || product.image || "placeholder.png";
    const thumbnailFile = String(rawThumb).split(/[/\\]/).pop(); // <-- limpia rutas
    const imageSrc = `/images/products/${encodeURIComponent(thumbnailFile)}`;

    // DEBUGs
    console.log("DEBUG ProductItem → recibido:", product);
    console.log("DEBUG ProductItem → imagen src:", imageSrc);

    const handleEditProduct = () => {
        navigate(`/products/${product.id}`);
    };

    const handleAddArticle = () => addArticle(product.id, 1);
    const handleSubtractArticle = () => subtractArticle(product.id, 1);

    const handleDeleteProduct = () => {
        if (window.confirm("¿Seguro que deseas eliminar este producto?")) {
            if (onDelete) {
                onDelete(product.id);
            } else {
                window.dispatchEvent(
                    new CustomEvent("delete-product", { detail: { id: product.id } }),
                );
            }
        }
    };

    const renderActions = () => {
        if (product.stock === 0) {
            return <Text variant="p" className="product-item__nostock">SIN STOCK</Text>;
        }

        return (
            <>
                <Skeleton className="product-item__actions--skeleton" isLoading={isLoading}>
                    <ButtonPrimary
                        className="product-item__add"
                        size="sm"
                        onClick={handleAddArticle}>
                        <AddShoppingCartIcon/>
                    </ButtonPrimary>
                </Skeleton>
                <Skeleton className="product-item__actions--skeleton" isLoading={isLoading}>
                    <ButtonPrimary
                        className="product-item__remove"
                        size="sm"
                        onClick={handleSubtractArticle}>
                        <RemoveCircleOutlineIcon/>
                    </ButtonPrimary>
                </Skeleton>
            </>
        );
    };

    return (
        <MuiCard className={classes} {...restProps}>
            <Skeleton className="product-item__image--skeleton" isLoading={isLoading}>
                <CardActionArea>
                    <img
                        className="product-item__image"
                        src={imageSrc}
                        alt={displayName}
                        onClick={handleEditProduct}
                        // 🔧 (2) FALLBACK si la imagen no existe
                        onError={(e) => {
                            e.currentTarget.onerror = null;
                            e.currentTarget.src = "/images/products/placeholder.png";
                        }}/>
                </CardActionArea>
            </Skeleton>

            <div className="product-item__content">
                <Skeleton className="product-item__name--skeleton" isLoading={isLoading}>
                    <Text className="product-item__name" variant="h3">{displayName}</Text>
                </Skeleton>
                <Skeleton className="product-item__description--skeleton" isLoading={isLoading}>
                    <Text className="product-item__description" variant="p">
                        {product.description}
                    </Text>
                </Skeleton>
                <Skeleton className="product-item__price--skeleton" isLoading={isLoading}>
                    <Text className="product-item__price" variant="span">
            ${Number(product.price ?? 0).toFixed(2)}
                    </Text>
                </Skeleton>
            </div>

            <div className="product-item__actions">
                {renderActions()}

                <Skeleton className="product-item__actions--skeleton" isLoading={isLoading}>
                    <ButtonPrimary className="product-item__edit" size="sm" onClick={handleEditProduct}>
                        <EditIcon/>
                    </ButtonPrimary>
                </Skeleton>
                <Skeleton className="product-item__actions--skeleton" isLoading={isLoading}>
                    <ButtonPrimary className="product-item__delete" size="sm" onClick={handleDeleteProduct}>
                        <DeleteIcon/>
                    </ButtonPrimary>
                </Skeleton>
            </div>
        </MuiCard>
    );
};

ProductItem.propTypes = {
    product: PropTypes.shape({
        id: PropTypes.oneOfType([ PropTypes.string, PropTypes.number ]).isRequired,
        name: PropTypes.string,
        title: PropTypes.string,
        description: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        stock: PropTypes.number.isRequired,
        thumbnail: PropTypes.string, // 👈 puede venir vacío
        image: PropTypes.string,
    }),
    isLoading: PropTypes.bool.isRequired,
    className: PropTypes.string,
    onDelete: PropTypes.func,
};

export default ProductItem;