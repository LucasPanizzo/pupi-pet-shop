import { Link } from "react-router-dom";

const Item = ({prod}) => {
    return (
        <div className="card cardProducto" key={prod.id}>
            <img src={prod.img} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{prod.nombre}</h5>
                <p className="card-text">Precio: ${prod.precio}</p>
                <Link to ={`/productos/${prod.id}`}><button className='boton-detalle'>Ver producto</button></Link>
            </div>
        </div>
    );
}

export default Item;

