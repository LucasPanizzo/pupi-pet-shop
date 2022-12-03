import React from 'react';
import { Link } from 'react-router-dom';
import './footer.css'

const Footer = () => {
    return (

        <footer>
          <div className="row">
            <div className="footer-info col-md mb-2">
              <Link to="./"><img src="https://firebasestorage.googleapis.com/v0/b/pupi---pet-store.appspot.com/o/extras%2Flogo.png?alt=media&token=d3b936a8-6d49-40bf-a782-8708400508dc" alt=""/></Link>
              <div className="footer-info-text">
                <Link to="/" className='footer-info-link'>Todos los Productos</Link>
                <Link to="/categoria/1" className='footer-info-link'>Juguetes de Perro</Link>
                <Link to="/categoria/2" className='footer-info-link'>Juguetes de Gato</Link>
                <Link to="/categoria/3" className='footer-info-link'>Camas</Link>
                <Link to="/categoria/4" className='footer-info-link'>Otros</Link>
              </div>    
            </div>
            <div className="footer-pagos col-md mb-2">
              <img src="https://firebasestorage.googleapis.com/v0/b/pupi---pet-store.appspot.com/o/extras%2Faceptamos_bitcoin.png?alt=media&token=38582e0c-7d90-4946-92a6-09e40c668573" alt="" />
              <img src="https://firebasestorage.googleapis.com/v0/b/pupi---pet-store.appspot.com/o/extras%2Fmercado-pago.png?alt=media&token=eeb21f04-2a65-4f26-b8b8-c45698b07ac3" alt="" />
            </div>
            <div className="footer-redes col-md mb-2">
              <span>Nuestras Redes</span>
              <div className="footer-redes-icons">
                <a href="#" target="_blank"><i className="bi-instagram" /></a>
                <a href="#" target="_blank"><i className="bi-facebook" /></a>
                <a href="#" target="_blank"><i className="bi-twitter" /></a>
                <a href="#" target="_blank"><i className="bi-telegram" /></a>
              </div>    
            </div>
          </div>
          <div className="footer-derechos">
            <p>© 2022 Vape Vibes. Todos los derechos reservados.</p>
          </div>
        </footer>
      );
}

export default Footer;
