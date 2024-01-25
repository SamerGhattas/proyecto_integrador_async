import { Link } from "react-router-dom"
import { ItemList } from "../ItemList/ItemList"
import { useCarritoContext } from "../context/CarritoContext"
export const Cart = () => {
    const {carrito, totalPrice, emptyCart } = useCarritoContext()
    return(
        <>
            { carrito.length === 0 
              ? //Si el carrito está vacío
                <>  
                    <div className="container mt-7">
                        <div className="row justify-content-center">
                            <div className="col-6">
                            <h2>Ups! Tu carrito está vacío</h2>
                            <p>Navega en nuestro catálogo de servicios y añádelos al carrito</p>
                            <Link className="nav-link" to={'/'}><button className="btn btn-dark">Ir al Catálogo</button></Link> 
                            </div>
                        </div>
                    </div>
                </>
              : //Si carrito tiene productos
                <div className="container cartContainer mt-7">
                    {<ItemList products={carrito} plantilla={'itemCart'}/>}
                    <div className="divButtons">
                        <p>Resumen de la compra: $ {new Intl.NumberFormat('de-DE').format(totalPrice())}</p>
                        <button className="btn btn-danger" onClick={() => emptyCart()}>Vaciar carrito</button>
                        <Link className="nav-link" to={'/'}><button className="btn btn-dark my-3">Continuar Comprando</button></Link> 
                        <Link className="nav-link" to={'/checkout'}><button className="btn btn-dark">Finalizar compra</button></Link> 
                    </div>
                </div>
            }
        </>
    )
   
}