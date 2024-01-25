import {useState,useEffect} from 'react';
import { useParams } from 'react-router-dom';

import { ItemList } from '../ItemList/ItemList';

//Firebase
import { getProductos } from '../../firebase/firebase';
export const ItemListContainer = () => {
    const [productos, setProductos] = useState([])
    const {idCategoria}= useParams()

    useEffect(() => {
        if(idCategoria) {
            getProductos()
            .then(items => {
                const products = items.filter(prod => prod.stock > 0).filter(prod => prod.idCategoria === parseInt(idCategoria))
                const productsList = <ItemList products={products} plantilla={'item'}/> //Array de productos en JSX
                setProductos(productsList)
            })
        } else {
            getProductos()
            .then(items => {
                const products = items.filter(prod => prod.stock > 0)
                const productsList = <ItemList products={products} plantilla={'item'}/> //Array de productos en JSX
                setProductos(productsList)
            })
        }
        
    }, [idCategoria])
    return (
        <div className='container mt-4 pt-4'>
            <div className="row justify-content-center mt-5">
                <h3 className='text-center text-capitalize'>{idCategoria}</h3>
            </div>
            <div className='row justify-content-center cardProductos mt-4 pt-3'>
                {productos}
            </div>
        </div>

    )
}