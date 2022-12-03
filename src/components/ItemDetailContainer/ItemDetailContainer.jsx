import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getProduct } from "../../assets/firebase";
import ItemDetail from "../ItemDetail/ItemDetail";
import '../App.css';
const ItemDetailContainer = () => {
    
    const [prod, setprod] = useState([]);
    const {id} = useParams()
    useEffect(() => {
        getProduct(id).then(product => {
            setprod(product)
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

export default ItemDetailContainer;

