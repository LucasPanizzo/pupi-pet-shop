import {useContext} from 'react';
import { CartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';
import './cart.css'



const Cart = () => {
    const {cart, emptyCart, total, removeItem} = useContext(CartContext)

    return (
        <>
            {cart.length === 0 ? 
            <div className='empty-cart'>
                <h2>Tu carrito esta vacio</h2>
                <img src="https://firebasestorage.googleapis.com/v0/b/pupi---pet-store.appspot.com/o/extras%2FcarritoVacio.png?alt=media&token=73f81552-6bfb-4557-b511-9a13de9bd6b1" alt="" />
                <p>Llena tu carrito para terminar la Compra</p>
                <Link to={'/'}><button>Ir al inicio</button></Link>
            </div> 
            :
            <div className='cart-container container-fluid'>
                <div className='cart-full'>
                    {cart.map((prod,indice) =><div className="card-cart row" key={indice}>

                        <div className='col-md-4'>
                            <img src={prod.img} className="card-img-top" alt="..." />
                        </div>
                        <div className="col-md cardCart-body">
                            <h5 className="card-title">{prod.nombre}</h5>
                            <p className="card-text">Cantidad: {prod.cant}</p>
                            <p className="card-text">Precio unitario: ${new Intl.NumberFormat('de-DE').format(prod.precio)}</p>
                            <p className="card-text">Subtotal: ${new Intl.NumberFormat('de-DE').format(prod.precio * prod.cant)}</p>
                            <button onClick={() => removeItem(prod.id)}>Eliminar Producto</button>
                        </div>
                    </div>
                    )}
                </div>
            <div className='cart-end'>
                <p>Total: ${new Intl.NumberFormat('de-DE').format(total())}</p>
                <button className="cart-empty" onClick={emptyCart}>Limpiar Carrito</button>
                <Link to="/checkout">
                    <button className="cart-finish">Finalizar Compra</button>
                </Link>
            </div>
            </div>
            }
        </>
    );
}

export default Cart;
