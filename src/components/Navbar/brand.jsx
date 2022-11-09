import { Link } from "react-router-dom";
const Brand = () => {
    return (
        <>
            <Link className="navbar-brand" to="/"><img src="../logo.png" alt="" /></Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon" />
            </button>
        </>
    );
}

export default Brand;
