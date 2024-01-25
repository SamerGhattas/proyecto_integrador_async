import { Link } from "react-router-dom";
import ampersandLogo from '../../../img/logo-ampersand.svg';
const Brand = () =>{
    return(
        <Link className="navbar-brand" to={'/'}>
        <img src={ampersandLogo} alt="Logo" width={30} height={24} className="d-inline-block align-text-top" />
        </Link>
    );
}

export default Brand;