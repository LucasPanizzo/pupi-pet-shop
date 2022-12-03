import { Link } from "react-router-dom";
import Dropdown from "./Dropdown";

const Sections = () => {
    return (
        <>
            <li className="nav-item">
                <Link to="/" className="nav-link">Todos</Link>
            </li>
            <Dropdown/>
            <li className="nav-item">
                <Link to="/categoria/3" className="nav-link">Camas</Link>
            </li>
            <li className="nav-item">
                <Link to="/categoria/4" className="nav-link">Otros</Link>
            </li>
        </>
    );
}

export default Sections;
