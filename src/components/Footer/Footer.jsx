import React from "react";
import {Container, Row} from "react-bootstrap";
import {BsFacebook, BsInstagram, BsTwitter, BsFillTelephoneFill, BsMailbox2} from 'react-icons/bs';
import {MdLocationOn} from 'react-icons/md';
import './Footer.css';

const Footer = () => {
    return(
        <div className="main-footer" sticky="bottom">
            <Container>
                <Row className="justify-content-center">
                    {/* Column1 */}
                    <div className="col-md-3 col-sm4">
                        <h4>G-Jewerly</h4>
                        <ul className="list-unstyled socials-icons">
                            <li><BsFacebook /></li>
                            <li><BsInstagram /></li>
                            <li><BsTwitter /></li>
                        </ul>
                    </div>
                    {/* Column2 */}
                    <div className="col-md-3 col-sm4">
                        <h4>Contacto</h4>
                        <ul className="list-unstyled">
                            <li><BsFillTelephoneFill /> 555 123 45 67</li>
                            <li><BsMailbox2 /> contacto@g-jewelry.com</li>
                            <li><MdLocationOn /> Centro Histórico, Chihuahua</li>
                        </ul>
                    </div>
                    {/* Column3 */}
                    <div className="col-md-3 col-sm4">
                        <h4>Nosotros</h4>
                        <ul className="list-unstyled">
                            <li>Soporte</li>
                            <li>FAQ</li>
                        </ul>
                    </div>
                </Row>
                {/* Footer Bottom */}
                <div className="footer-bottom">
                    <p className="text-xs-center">
                        &copy;{new Date().getFullYear} G-Jewelry - México. Todos los derechos reservados.
                    </p>
                </div>
            </Container>
        </div>
    )
}

export default Footer;