import { CartWidget } from "../CartWidget/CartWidget";
import Brand from "./Brand/Brand";
import { ResponsiveNavbar } from "./ResponsiveNavbar/ResponsiveNavbar";
import Secciones from "./Secciones/Secciones";

export const Navbar = () => {
    return(
        <nav className="navbar fixed-top navbar-expand-md navbar-dark bg-dark">
            <div className="container-fluid">
                <Brand/>
                <ResponsiveNavbar/>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <Secciones/>
                    <CartWidget/>
                </div>
            </div>
        </nav>
    ); 
}