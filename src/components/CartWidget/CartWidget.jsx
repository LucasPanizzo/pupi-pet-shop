import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
const CartWidget = () => {
    const {getItemQuantity} = useContext(CartContext)
    return (
        <>
        <Link to="/carrito">
            <i className="bi-cart"/>{getItemQuantity() >= 1 && <span class="badge bg-secondary">{getItemQuantity()}</span>}
        </Link>    
        </>
    );
}

export default CartWidget;
