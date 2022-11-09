
import {useState, useEffect} from 'react';
import {cargarProd} from '../../assets/funcionproductos'
import { useParams } from 'react-router-dom';
import ItemList from '../ItemList/ItemList';
const Home = () => {
   

    const [productos, setProductos] = useState([]);
    const {category} = useParams()

    useEffect(() => {
        if(category){
            cargarProd("../json/products.json").then(products =>{
                const productsList= products.filter(prod =>prod.categoria === parseInt(category))
                const cardProductos = ItemList({productsList})
                setProductos(cardProductos)
            })
        } else{
            cargarProd('./json/products.json').then(productsList => {
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

export default Home;
