import { useCarritoContext } from "../context/CarritoContext"
import { Link } from "react-router-dom"
import  React  from "react"
import { useNavigate } from "react-router-dom"
import {toast} from 'react-toastify'
import { createOrdenCompra, getOrdenCompra, getProducto, updateProducto } from "../../firebase/firebase";

export const Checkout = () => {
    const {carrito, emptyCart, totalPrice} = useCarritoContext()
    const datosFormulario = React.useRef()
    let navigate = useNavigate()

    const consultarFormulario = (e) => {
        e.preventDefault()
        const datForm = new FormData(datosFormulario.current)
        const cliente = Object.fromEntries(datForm)
        
        const aux = [...carrito]

        aux.forEach(prodCarrito => {
            getProducto(prodCarrito.id).then(prodBDD => {
                prodBDD.stock -= prodCarrito.cant //Descuento del stock la cantidad comprada
                updateProducto(prodCarrito.id, prodBDD)
            })
        })

        createOrdenCompra(cliente, aux, totalPrice(), new Date().toISOString()).then(ordenCompra =>{
            toast.success(`¡Gracias por comprar con nosotros!, Tu ID de orden de compra es: ${ordenCompra.id
            } por un total de $ ${new Intl.NumberFormat('de-DE').format(totalPrice())}`)
            emptyCart()
            e.target.reset()
            navigate("/")
        })

    }


    return (
    <>
        {carrito.length === 0 
        ? 
        <>  
            <div className="container mt-7">
                <div className="row justify-content-center">
                    <div className="col-6">
                    <h1>Checkout</h1>
                    <h2>Ups! Tu carrito está vacío</h2>
                    <p>Navega en nuestro catálogo de servicios y añádelos al carrito</p>
                    <Link className="nav-link" to={'/'}><button className="btn btn-dark">Ir al Catálogo</button></Link> 
                    </div>
                </div>
            </div>
        </>
        :
            <div className="container" style={{marginTop:"100px"}}>
            <form onSubmit={consultarFormulario} ref={datosFormulario}>
                <div className="mb-3">
                <label htmlFor="nombre" className="form-label">Nombre y apellido</label>
                <input type="text" className="form-control" name="nombre"/>
            </div>
                <div className="mb-3">
                <label htmlFor="email" className="form-label">Email</label>
                <input type="email" className="form-control" name="email" />
            </div>
            <div className="mb-3">
                <label htmlFor="repEmail" className="form-label">Confirmar Email</label>
                <input type="email" className="form-control" name="repEmail" />
            </div>
            <div className="mb-3">
                <label htmlFor="celular" className="form-label">Teléfono</label>
                <input type="number" className="form-control" name="celular" />
            </div>
            <div className="mb-3">
                <label htmlFor="direccion" className="form-label">Dirección</label>
                <input type="text" className="form-control" name="direccion" />
            </div>

            <button type="submit" className="btn btn-primary">Ir a Pagar</button>
            </form>
        </div>
        }
    
    </>
    )
}