import { Link } from "react-router-dom";
const Dropdown = () => {
    return (
        <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Productos
            </a>
            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><Link to="/" className="dropdown-item">Todos</Link></li>
                <li><Link to="/categoria/1" className="dropdown-item">Juguetes Perros</Link></li>
                <li><Link to="/categoria/2" className="dropdown-item">Juguetes Gatos</Link></li>
                <li><Link to="/categoria/3" className="dropdown-item">Camas</Link></li>
                <li><Link to="/categoria/4" className="dropdown-item">Otros</Link></li>
            </ul>
        </li>
    );
}

export default Dropdown;
