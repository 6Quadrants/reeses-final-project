import React from "react";
import "./Match.css";

// import Form from "../Form";
// import FormDrop from "../FormDrop";
import SaltyForm from "../FormDrop/SaltyForm";
import SweetForm from "../FormDrop/SweetForm";
import SmoothForm from "../FormDrop/SmoothForm";
import ChewyForm from "../FormDrop/ChewyForm";
import MeltyForm from "../FormDrop/MeltyForm";



import CardResult from "../CardResult";
import {Col} from "react-bootstrap";




const Match = props => (

    <div className="container-fluid profile-cont" id="Match">
        <div className="row profile-cont">
            <Col sm={12} className="slider-reference">
                <div className="headers">
                    <div className="headings">
                    <h1 className="match-headings">What do you really want in a<br></br>
                    Reese's Peanut Butter Cup?</h1>
                    </div>
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
                    <div>
                        <SaltyForm />
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
                    <div>
                        <SweetForm />
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
                    <div>
                        <SmoothForm />
                    </div>
                    </Col>
                </div>

                  <div className="form-row">
                    <Col md={4} className="sliders-title-b">
                    <div>
                        <h1 className="form-title">MELTY</h1>
                    </div>
                    </Col>
                    <Col md={8} className="sliders-form-b">
                    <div>
                        <MeltyForm />
                    </div>
                    </Col>
                </div>

                  <div className="form-row">
                    <Col md={4} className="sliders-title-y">
                    <div>
                        <h1 className="form-title">CHEWY</h1>
                    </div>
                    </Col>
                    <Col md={8} className="sliders-form-y">
                    <div>
                        <ChewyForm />
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