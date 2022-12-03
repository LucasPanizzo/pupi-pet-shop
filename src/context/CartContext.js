import {useState, createContext} from 'react'

const CartContext = createContext([])

const CartContextProvider = (props) => {
    const [cart, setCart] = useState([]);

    const isInCart = (id) => {
        return cart.find(prod => prod.id === id)
    }

    const addItem = (item, quantity) => {
        if(isInCart(item.id)) {
            const selectedItem = cart.findIndex(prod => prod.id === item.id)
            const aux = [...cart]
            aux[selectedItem].cant = quantity
            setCart(aux)
        } else {
            const newItem = {
                ...item,
                cant: quantity
            }

            setCart([...cart, newItem])
        }
        
    }

    const emptyCart = () => {
        return setCart([])
    }
   
    const removeItem = (id) => {
        return setCart(cart.filter(prod => prod.id !== id))
    }

    const getItemQuantity = () => {
        return cart.reduce((acc, prod) => acc += prod.cant, 0)
        
    }

    const total = () => {
        return cart.reduce((acc, prod) => acc += (prod.cant * prod.precio), 0)
    }
    console.log(cart)
    console.log(getItemQuantity())
    return (
        <CartContext.Provider value = {{cart, isInCart, addItem, emptyCart, removeItem,getItemQuantity, total}}>
            {props.children}
        </CartContext.Provider>
    )

}

export {CartContextProvider, CartContext}