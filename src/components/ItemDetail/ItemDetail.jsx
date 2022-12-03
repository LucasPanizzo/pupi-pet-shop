import {useContext} from 'react';
import './ItemDetail.css';
import ItemCount from '../ItemCount/ItemCount';
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';


const ItemDetail = ({producto}) => {

    const {addItem} = useContext(CartContext)

    const onAdd = (count) => {
        addItem(producto,count)
    }

    return (
        <>
            {producto.stock < 1 ?
                    <div className="detalleProducto row" key={producto.id}>
                        <div className='col-md-6'>
                            <img src={producto.img} className="card-img-top" alt="..." />
                        </div>
                        <div className="col-md detalleProducto-body">
                            <p className='detalleProductoRef'>Referencia ID: {producto.id}</p>
                            <h5 className="body-title">{producto.nombre}</h5>
                            <p className="body-text">${producto.precio}</p>
                            <p className='no-stock'>Actualmente no poseemos stock de este producto.</p>
                        </div>
                    </div>
           : 
            <div className="detalleProducto row" key={producto.id}>
                <div className='col-md-6'>
                    <img src={producto.img} className="card-img-top" alt="..." />
                </div>
                <div className="col-md detalleProducto-body">
                    <p className='detalleProductoRef'>Referencia ID: {producto.id}</p>
                    <h5 className="body-title">{producto.nombre}</h5>
                    <p className="body-text">${producto.precio}</p>
                    <ItemCount stock = {producto.stock} onAdd={onAdd}/>
                    <button className="finalizar-butt"><Link to="/carrito" className="nav-link">Finalizar compra</Link></button>
                </div>
            </div>
            }
        </>
    );
}

export default ItemDetail;
