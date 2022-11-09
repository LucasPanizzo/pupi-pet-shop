import { Link } from "react-router-dom";
import Dropdown from "./Dropdown";

const Sections = () => {
    return (
        <>
            <li className="nav-item">
                <Link className="nav-link" to="#">Inicio</Link>
            </li>
            <Dropdown/>
            <li className="nav-item">
                <Link className="nav-link" to="#">Nosotros</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="#">Contacto</Link>
            </li>
        </>
    );
}

export default Sections;
