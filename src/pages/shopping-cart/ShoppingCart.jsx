import { Text } from "@/components/texts";
import AppContext from "@/contexts/AppContext";
import { Table, TableBody, TableCell, TableHead, TableRow } from "@mui/material";
import { useContext } from "react";
import "./shopping-cart.scss";

const ShoppingCart = () => {
    const { shoppingCartContext } = useContext(AppContext);
    const {
        shoppingCart,
        addArticle,
        subtractArticle,
        removeArticle,
        clearCart,
        buy,
    } = shoppingCartContext;

    return (
        <div className="shopping-cart">
            <Text variant="h2">Carrito</Text>

            <Table>
                <TableHead>
                    <TableRow className="table__head">
                        <TableCell>ID</TableCell>
                        <TableCell>Producto</TableCell>
                        <TableCell align="right">Cant.</TableCell>
                        <TableCell align="right">Precio</TableCell>
                        <TableCell align="right">Importe</TableCell>
                        <TableCell align="center">Acciones</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {shoppingCart.articles?.map((article) => (
                        <TableRow key={article.id} className="table__body">
                            <TableCell>{article.id}</TableCell>
                            <TableCell>{article.name}</TableCell>
                            <TableCell align="right">
                                <button onClick={() => subtractArticle(article.id, 1)}>-</button>
                                <span style={{ margin: "0 8px" }}>{article.quantity}</span>
                                <button
                                    onClick={() => addArticle(article.id, 1)}
                                    disabled={article.quantity >= article.stock}>
                                    +
                                </button>
                            </TableCell>
                            <TableCell align="right">${article.price?.toFixed(2)}</TableCell>
                            <TableCell align="right">${article.amount?.toFixed(2)}</TableCell>
                            <TableCell align="center">
                                <button onClick={() => removeArticle(article.id)}>Eliminar</button>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>

            <div className="table__footer">
                <Text className="table__total" variant="p">
                    Total unidades: {shoppingCart.totalQuantity} — Total: $
                    {shoppingCart.totalAmount?.toFixed(2)}
                </Text>
            </div>

            {shoppingCart.articles?.length > 0 && (
                <div className="cart__actions">
                    <button className="btn btn--danger" onClick={clearCart}>
                        Cancelar
                    </button>
                    <button className="btn btn--primary" onClick={buy}>
                        Comprar
                    </button>
                </div>
            )}
        </div>
    );
};

export default ShoppingCart;