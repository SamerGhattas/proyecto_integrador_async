import { useState } from "react";
import {toast} from 'react-toastify';

export const ItemCount = ({valInicial, stock, onAdd}) => {
    
    const [contador, setContador] = useState(valInicial)

    const sumar = () =>  (contador < stock) && setContador(contador + 1)
    const restar = () => (contador > valInicial)  && setContador(contador - 1)

    const agregarCarrito = () => {
      onAdd(contador)
      toast(`🦄 Agregaste ${contador} productos al carrito!`) 
     

    }
  return (
    <>
        <button className="btn btn-dark mx-2" onClick={() => restar()}>-</button>
            {contador}
        <button className="btn btn-dark mx-2" onClick={() => sumar()}>+</button>
        <button type="button" className='btn btn-success mx-1' onClick={() => agregarCarrito()}><i className="bi bi-cart"/> Agregar al Carrito</button>
        

    </>
  )
}