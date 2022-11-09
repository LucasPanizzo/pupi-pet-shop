import { Link } from "react-router-dom";
const CartWidget = () => {
    return (
        <>
        <Link to="/carrito">
            <i className="bi-cart"/>
        </Link>    
        </>
    );
}

export default CartWidget;
