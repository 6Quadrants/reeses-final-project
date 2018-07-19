import React from "react";
import "./Footer.css";
import { Col } from "react-bootstrap";


const Footer = props => (

    <div className="container-fluid">
        <div className="row footer">
            <Col md={6}>
            <h4 className="copyright-text disclaimer">This project is in no way affiliated with The Hershey Company</h4>

            </Col>
            <Col md={6} className="copyright">
                <h4 className="copyright-text copy">copyright 2018 Alexa I. Stefanou</h4>
            </Col>
        </div>
    </div>

)

export default Footer;