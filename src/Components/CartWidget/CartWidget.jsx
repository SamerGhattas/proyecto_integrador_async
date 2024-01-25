import { Link } from "react-router-dom";
import { useCarritoContext } from "../context/CarritoContext";
export const CartWidget = () => {
    const {getItemQuantity} = useCarritoContext()
    return (
        <>
            <Link className="nav-link" to={'/cart'}>
                <button className="btn btn-outline-info"><i className="bi bi-cart" /></button>
                {getItemQuantity() > 0 && <span className="cantCarrito">{getItemQuantity()}</span>}
            </Link> 
        </>
    );
}