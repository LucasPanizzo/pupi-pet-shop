import { Link } from "react-router-dom";
const Dropdown = () => {
    return (
        <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Juguetes
            </a>
            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">

                <li><Link to="/categoria/1" className="dropdown-item">Juguetes Perros</Link></li>
                <li><Link to="/categoria/2" className="dropdown-item">Juguetes Gatos</Link></li>
            </ul>
        </li>
    );
}

export default Dropdown;
