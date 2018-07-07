import React from "react";
import "./Footer.css";
import { Col } from "react-bootstrap";


const Footer = props => (

    <div className="container-fluid">
        <div className="row footer">
            <Col md={6} className="disclaimer">
            </Col>
            <Col md={6} className="copyright">
                <h4 className="copyright-text">&copy 2018 Alexa I. Stefanou</h4>
            </Col>
        </div>
    </div>

)

export default Footer;