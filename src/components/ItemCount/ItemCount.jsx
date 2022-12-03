
import {useState} from 'react';

const ItemCount = ({stock, onAdd}) => {
    const [quantity, setQuantity] = useState(1) 

    const add = () => quantity < stock && setQuantity(quantity + 1)

    const decrease = () => quantity > 1 && setQuantity(quantity - 1)

    const addToCart = () => {
        onAdd(quantity)
    }
    return (
            <div className="detalleProducto-body-agregar ">
                <div className='agregar-quantity'>
                    <p>Cantidad:</p>
                    <div className='quantityButton'>
                        <button onClick={decrease} className='quantityButton+'>-</button>
                        <p className='prodQuantity'>{quantity}</p>
                        <button onClick={add} className='quantityButton+'>+</button>
                    </div>
                </div>    
                <button className='agregar-butt' onClick={addToCart}>Agregar al carrito</button>    
            </div>

    );
}

export default ItemCount;