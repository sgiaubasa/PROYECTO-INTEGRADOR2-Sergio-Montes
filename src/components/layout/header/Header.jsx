import { IconButtonBadge } from "@/components/icon-buttons";
import { Text } from "@/components/texts";
import AppContext from "@/contexts/AppContext";
import { ShoppingCart as ShoppingCartIcon } from "@mui/icons-material";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import "./header.scss";
import InstitutionLogo from "./institution-logo/InstitutionLogo";

const Header = () => {
    const { shoppingCartContext } = useContext(AppContext);
    const { shoppingCart } = shoppingCartContext;
    const navigate = useNavigate();

    const handleShoppingCart = () => {
        navigate("/shopping-cart");
    };

    return (
        <header className="header">
            {/* Logo a la izquierda */}
            <InstitutionLogo className="header__institution" />

            {/* Título centrado */}
            <Text className="header__title-center" variant="h1">
                AF Revestimiento
            </Text>

            {/* Carrito a la derecha */}
            <IconButtonBadge
                className="header__shopping-cart"
                badgeContent={shoppingCart.totalQuantity ?? 0}>
                <ShoppingCartIcon onClick={handleShoppingCart} />
            </IconButtonBadge>
        </header>
    );
};

export default Header;