import React from "react";
import "./Match.css";

import Form from "../Form";
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
            <div className="row form-container">

             <Col sm={12} className="sliders">
             {/* <h1>Some form?</h1> */}
             <div>
                <h3><span className="form-title">Saltiness</span></h3>
                <Form />
             </div>
             <div>
             <h3><span className="form-title">Saltiness</span></h3>
                <Form />
             </div>
             <div>
             <h3><span className="form-title">Saltiness</span></h3>
                <Form />
             </div>
             <div>
             <h3><span className="form-title">Saltiness</span></h3>
                <Form />
             </div>
         
            
         

             {/* <Button className="submit">SUBMIT</Button>
             <Button className="reset">RESET</Button> */}

             </Col>
             </div>

        </div>
)

export default Match;