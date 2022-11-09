import React from 'react';
import './ItemDetail.css'

const ProductDetail = ({producto}) => {

    return (
        <div className="detalleProducto row" key={producto.Id}>
            <div className='col-md-6'>
                <img src={`../img/${producto.img}`} className="card-img-top" alt="..." />
            </div>
            <div className="col-md detalleProducto-body">
                <p className='detalleProductoRef'>Referencia ID: {producto.Id}</p>
                <h5 className="body-title">{producto.nombre}</h5>
                <p className="body-text">${producto.precio}</p>
                <div class="detalleProducto-body-agregar ">
                        <div className='agregar-quantity'>
                            <p>Cantidad:</p>
                            <div className='quantityButton'>
                                <button className='quantityButton+'>-</button>
                                <p className='prodQuantity'>1</p>
                                <button className='quantityButton+'>+</button>
                            </div>
                        </div>    
                        <button className='agregar-butt'>Agregar al carrito</button>    
                </div>
            </div>
        </div>
    );
}

export default ProductDetail;
