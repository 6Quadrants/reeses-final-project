import React from "react";
import "./Results.css";
import {Col, Form, Image } from "react-bootstrap";



const Results = props => (

    <div className="container-fluid profile-cont">
        <div className="row profile-cont">
            <Col md={6} sm={12} className="top-three">
                <div className="first-place">
                    <div className="number"><h2 className="results one">First Place</h2></div>
                    <div className="image">
                        {/* <Image src="" className="first-place-image" /> */}
                    </div>
                </div>
            
            <div className="row second-third">
                <Col md={6} className="second">
                    <div className="number"><h2 className="results one">Second Place</h2></div>
                    <div className="image">
                        {/* <Image src="" className="first-place-image" /> */}
                    </div>
                </Col>
                    <Col md={6} className="third">
                    <div className="number"><h2 className="results one">Third Place</h2></div>
                    <div className="image">
                        {/* <Image src="" className="first-place-image" /> */}
                    </div>
                    </Col>
                    </div>
            </Col>
            

            <Col md={6} sm={12} className="top-profile">
                <div className="results-info">
                    {/* <Image src="../Images/miniature-icon.svg" className="profile-icon">   */}
                    <h2 className="resultsone">MINIATURE</h2>
                    <h3 className="highlight">HIGHLIGHTED INFO AREA</h3>
                    <p className="profileinfo">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, 
                    </p>
                </div>
         
            </Col>

        </div>
    </div>
)

export default Results;

