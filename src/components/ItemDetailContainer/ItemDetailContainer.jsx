import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { cargarProd } from "../../assets/funcionproductos";
import ItemDetail from "../ItemDetail/ItemDetail";
const Product = () => {
    
    const [prod, setprod] = useState([]);
    const {Id} = useParams()
    useEffect(() => {
        cargarProd('../json/products.json').then(productos => {
            const prod = productos.find(el => el.Id === parseInt(Id))
            setprod(prod)
        })
    }, []);

    return (
        <div>
            <div className="detail-container container-fluid">
                <ItemDetail producto={prod}/>
            </div>
        </div>
    );
}

export default Product;

