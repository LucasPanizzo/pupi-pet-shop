import './App.css';
import {BrowserRouter, Routes,Route} from 'react-router-dom';
import Navbar from './Navbar/Navbar';
import ItemDetailContainer from './ItemDetailContainer/ItemDetailContainer';
import ItemListContainer from './ItemListContainer/ItemListContainer';
import Cart from './Cart/Cart';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/' element={<ItemListContainer/>}/>
          <Route path='/productos/:Id' element={<ItemDetailContainer/>}/>
          <Route path='/carrito' element={<Cart/>}/>
          <Route path='/categoria/:category' element={<ItemListContainer/>}/>
        </Routes>
      </BrowserRouter>
   
    </>
  )
}

export default App