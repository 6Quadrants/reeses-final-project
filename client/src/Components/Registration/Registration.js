import React from "react";
import {Col} from "react-bootstrap";
import Login from "../Login";
import Register from "../Register";

import "./Registration.css";

import circle from "../../Images/circle.svg";
import circleoverlap from "../../Images/circleoverlap.svg";




const Registration = props => (

    <div className="container-fluid wrapper" id="Registration">
    <div className="circle"><img className="bg-circle" src={circle} alt="brown circle graphic" /></div>
    <div className="circle-overlap"><img className="bg-overlap" src={circleoverlap} alt="brown circle graphic"/></div>

    <div className="header"></div>
    <div className="container-inner">
        <div className="intro">
   
        <Col sm={12} className="login">
            <h1 className="welcome">Welcome to the Reeses's Match</h1>
            <h2 className="subtext">Sign in or register to begin</h2>

        </Col>
        </div>
        <Col sm={12} className="login">

    <div className="row form">
        <Col md={6}>
        <div className="card-login">
        <Login />
        </div>
        </Col>
        <Col md={6}>
        <div className="card-register">
        <Register />
        </div>
        </Col>
    
    </div>
        </Col>
    </div>
    </div>

)

export default Registration;
