import { Link } from "react-router-dom";
export const Item = ({item}) => {
    return(
        <>
        <div className="card col-6 col-md-4 my-3 mx-1 p-2">
        <img src={item.img} className="card-img-top" alt={`Imagen de ${item.nombre}`} />

        <div className="card-body">
          <h5 className="card-title">{item.nombre}</h5>
          <p className="card-text">{item.descripcion}</p>
          <hr />
          <h6 className="card-subtitle mb-3 text-muted"> Precio: ${new Intl.NumberFormat('de-DE').format(item.valorNormal)}</h6>
          <button className="btn btn-dark"><Link className="nav-link" to={`/item/${item.id}`}>Ver Producto</Link></button>
        </div>
        </div>
        </>
    ); 
}
