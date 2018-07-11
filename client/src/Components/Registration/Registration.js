import React, {Component} from "react";
import {Col} from "react-bootstrap";
import Login from "../Login";
import Register from "../Register";

import "./Registration.css";

import circle from "../../Images/circle.svg";
import circleoverlap from "../../Images/circleoverlap.svg";




const Registration = props => (

    <div className="container-fluid wrapper" id="Registration">
    <div className="circle"><img className="bg-circle" src={circle} /></div>
    <div className="circle-overlap"><img className="bg-overlap" src={circleoverlap} /></div>

    <div className="header"><h1 className="colon">CHOC:PB</h1></div>
    <div className="container-inner">
        <div className="row text">
   
        <Col sm={12} className="login">
            <h1 className="welcome">Welcome to the Reeses's Match</h1>
            <h2 className="subtext">Sign in or register</h2>

        </Col>
        </div>
        <Col sm={12} className="login">

    <div className="row form">
        <Col md={6}>
        <Login />
        </Col>
        <Col md={6}>
        <Register />
        </Col>
    
    </div>
        </Col>
    </div>
    </div>

)

export default Registration;
