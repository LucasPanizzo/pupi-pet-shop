import { Link } from "react-router-dom";
const Brand = () => {
    return (
        <>
            <Link className="navbar-brand" to="/"><img src="https://firebasestorage.googleapis.com/v0/b/pupi---pet-store.appspot.com/o/extras%2Flogo.png?alt=media&token=d3b936a8-6d49-40bf-a782-8708400508dc" alt="" /></Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon" />
            </button>
        </>
    );
}

export default Brand;
