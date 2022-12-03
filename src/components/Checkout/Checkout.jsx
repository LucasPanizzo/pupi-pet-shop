import React, {useContext} from "react"
import { useNavigate, Link } from "react-router-dom";
import { createBuyOrder, getProduct, updateProduct } from "../../assets/firebase"
import { CartContext } from "../../context/CartContext"
import {toast } from 'react-toastify';


const Checkout = () => {
    const datosFormulario = React.useRef()
    let navigate = useNavigate()
    const {cart,emptyCart, total} = useContext(CartContext);
    

    const consultarFormulario = (e) => {
            e.preventDefault()
            const datForm = new FormData(datosFormulario.current)
            const valores = Object.fromEntries(datForm)
            if(valores.email === valores.emailVerify){
                const aux = [...cart]
                aux.forEach(producto => {
                    getProduct(producto.id)
                    .then(prod => {
                        prod.stock -= producto.cant
                        updateProduct(producto.id, prod)
                    })
                })
                
                createBuyOrder(aux,valores, total(), new Date().toISOString().slice(0, 10)).then(order => {
                    toast.success(`Tu orden con la ID ${order.id}, fue creada con exito.`)
                    emptyCart()
                    e.target.reset()
                    navigate("/")
                  
                }).catch(error => {
                    toast.error(`Hubo un error en tu orden.`)
                    console.error(error)
                })
                
            } else{
                toast.error(`Los emails no coinciden`)
            }
 
    }

    return (
        <div className="container">
            <form onSubmit={consultarFormulario} ref={datosFormulario}>
                <div className="mb-3">
                    <label htmlFor="nombre" className="form-label">Nombre y Apellido</label>
                    <input type="text" className="form-control" name="nombre" required/>
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input type="email" className="form-control" name="email" required/>
                </div>
                <div className="mb-3">
                    <label htmlFor="emailVerify" className="form-label">Vuelva a ingresar su mail</label>
                    <input type="email" className="form-control" name="emailVerify" required/>
                </div>
                <div className="mb-3">
                    <label htmlFor="dni" className="form-label">DNI</label>
                    <input type="number" className="form-control" name="dni" required/>
                </div>
                <div className="mb-3">
                    <label htmlFor="celular" className="form-label">Numero telefonico</label>
                    <input type="number" className="form-control" name="celular" />
                </div>
                <div className="mb-3">
                    <label htmlFor="direccion" className="form-label">Dirección</label>
                    <input type="text" className="form-control" name="direccion" />
                </div>
                <button type="submit" className="btn btn-primary">Finalizar Compra</button>
            </form>

        </div>
    );
}

export default Checkout;