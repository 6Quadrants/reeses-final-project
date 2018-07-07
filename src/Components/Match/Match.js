import React from "react";
import "./Match.css";
import {Col, Button, Image } from "react-bootstrap";
import Form from "../../Components/Form";


const Match = props => (

    <div className="container-fluid profile-cont" id="Match">
        <div className="row profile-cont">
            <Col lg={4} sm={12} className="slider-reference">

                <div className="headers">
                {/* <svg width="400" height="100">
                <rect width="300" height="100" style="fill:rgb(75,28,27)" />
                </svg> */}
                    <div className="slider-ref-text"><h1><span className="profile-subheader">SOME KINDA</span></h1></div> 
                    <div className="slider-ref-text"><h1><span className="profile-yellow">REFERENCElongword</span></h1></div>
                    <div className="slider-ref-text"><h1><span className="profile-yellow">REFERENCE</span></h1></div>
                </div>
                </Col>

             <Col lg={8} sm={12} className="sliders">
             <Form />
             <Button className="submit">SUBMIT</Button>
             <Button className="reset">RESET</Button>
             </Col>

        </div>
    </div>
)

export default Match;