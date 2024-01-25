import { Link } from "react-router-dom";
import { Categorias } from "../Categorias/Categorias";
const Secciones =() =>{
    return (
        <ul className="navbar-nav me-auto mb-2 mb-lg-0 align-items-center">
          <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to={"/"}>Inicio</Link>
          </li>
          <Categorias/>
          <li className="nav-item">
            <Link className="nav-link" to={"/contacto"}><button className="btn btn-dark">Contacto</button></Link>
          </li>

        </ul>
    );
}

export default Secciones;