import React from "react";
import "./Match.css";

import Form from "../Form";
import CardResult from "../CardResult";
import {Col, Button, Image } from "react-bootstrap";




const Match = props => (

    <div className="container-fluid profile-cont" id="Match">
        <div className="row profile-cont">
            <Col sm={12} className="slider-reference">

                <div className="headers">
             
                    <div className="headings">
                    <h1 className="match-headings">Something about matching your Reeses's</h1>
                    </div>
                    {/* <div className="slider-ref-text"><h1><span className="profile-subheader">SOME KINDA</span></h1></div> 
                    <div className="slider-ref-text"><h1><span className="profile-yellow">REFERENCElongword</span></h1></div>
                    <div className="slider-ref-text"><h1><span className="profile-yellow">REFERENCE</span></h1></div> */}
                </div>
                </Col>
            </div>
            <div className="form-container">

                <div className="form-row">
                <Col md={4} className="sliders-title-y">
                <div>
                    <h1 className="form-title">SALTY</h1>
                </div>
                </Col>
                <Col md={8} className="sliders-form-y">
                <div className="theforms">
                    <Form />
                </div>
                </Col>
                </div>

                <div className="form-row">
                <Col md={4} className="sliders-title-b">
                <div>
                    <h1 className="form-title">SWEET</h1>
                </div>
                </Col>
                <Col md={8} className="sliders-form-b">
                <div className="theforms">
                    <Form />
                </div>
                </Col>
                </div>

                <div className="form-row">
                <Col md={4} className="sliders-title-y">
                <div>
                    <h1 className="form-title">MELTABLE</h1>
                </div>
                </Col>
                <Col md={8} className="sliders-form-y">
                <div className="theforms">
                    <Form />
                </div>
                </Col>
                </div>

                <div className="form-row">
                <Col md={4} className="sliders-title-b">
                <div>
                    <h1 className="form-title">CHEWY</h1>
                </div>
                </Col>
                <Col md={8} className="sliders-form-b">
                <div className="theforms">
                    <Form />
                </div>
                </Col>
                </div>

                <div className="form-row">
                <Col md={4} className="sliders-title-y">
                <div>
                    <h1 className="form-title">SMOOTH</h1>
                </div>
                </Col>
                <Col md={8} className="sliders-form-y">
                <div className="theforms">
                    <Form />
                </div>
                </Col>
                </div>
           
             </div>

             <div className="row result-container">
             <CardResult />
             </div>
             

        </div>
)

export default Match;