import './Navbar.css';
import Sections from'./Sections';
import Brand from './brand';
import CartWidget from './CartWidget';

const Navbar = () =>{
    return (
        <nav className="navbar navbar-expand-sm">
            <div className="container-fluid">
                <Brand/>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 container-fluid justify-content-center">
                        <Sections/>
                    </ul>
                </div>
                <CartWidget/>
            </div>
        </nav>
    )
}

export default Navbar