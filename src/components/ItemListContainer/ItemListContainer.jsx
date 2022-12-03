
import {useState, useEffect} from 'react';
import { getProducts } from '../../assets/firebase';
import { useParams } from 'react-router-dom';
import ItemList from '../ItemList/ItemList';
const ItemListContainer = () => {
   

    const [productos, setProductos] = useState([]);
    const {category} = useParams()

    useEffect(() => {
        if(category){
            getProducts().then(products =>{
                const productsList= products.filter(prod =>prod.categoria === parseInt(category))
                const cardProductos = ItemList({productsList})
                setProductos(cardProductos)
            })
        } else{
            getProducts().then(productsList => {
                const cardProductos = ItemList({productsList})
                setProductos(cardProductos)
            })
        }
    },[category]);
    

    return (
        <div className='row cardsContainer container-fluid'>
            {productos}
        </div>
       
    );
}

export default ItemListContainer;
