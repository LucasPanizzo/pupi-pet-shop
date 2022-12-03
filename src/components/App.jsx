//General
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import { ToastContainer } from 'react-toastify';
import {BrowserRouter, Routes,Route} from 'react-router-dom';
//Context
import { CartContextProvider } from '../context/CartContext';
//Components
import Navbar from './Navbar/Navbar';
import ItemDetailContainer from './ItemDetailContainer/ItemDetailContainer';
import ItemListContainer from './ItemListContainer/ItemListContainer';
import Cart from './Cart/Cart';
import Checkout from './Checkout/Checkout';
import Footer from './Footer/Footer';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <CartContextProvider>
          <ToastContainer/>
          <Navbar/>
          <Routes>
            <Route path='/' element={<ItemListContainer/>}/>
            <Route path='/productos/:id' element={<ItemDetailContainer/>}/>
            <Route path='/carrito' element={<Cart/>}/>
            <Route path='/categoria/:category' element={<ItemListContainer/>}/>
            <Route path='/checkout' element={<Checkout/>}/>
          </Routes>
          <Footer/>
        </CartContextProvider>  
      </BrowserRouter>
   
    </>
  )
}

export default App