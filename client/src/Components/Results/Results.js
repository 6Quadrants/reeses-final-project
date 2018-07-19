import React from "react";
import "./Results.css";
import {Col} from "react-bootstrap";
import classic from "./classic.png";
import mini from "../../Images/mini.png";
import miniatureicon from "../../Images/miniatureicon.svg";




const Results = props => (


    <div className="container-fluid profile-cont" id="Results">
        <div className="row profile-cont">
            <Col md={6} sm={12} className="top-three">
                <div className="first-place">
                <div className="digit"><h4 className="resultsnumb">1</h4></div>
                <div className="number"><h4 className="results one">First Place</h4></div>
                    <div className="image-bg">
                        <img className="first-place-image" src={classic} />
                    </div>
                </div>
            
            <div className="row second-third">
                <Col md={6} className="second">
                    <div className="digit"><h4 className="resultsnumb">2</h4></div>

                    <div className="number"><h4 className="results one">Miniature</h4></div>
                    <div className="image">
                       <img className="first-place-image" src={mini} />
                    </div>
                </Col>
                    <Col md={6} className="third">
                    <div className="digit"><h4 className="resultsnumb">3</h4></div>
                    <div className="number"><h4 className="results one">Third Place</h4></div>
                    <div className="image">
                        {/* <Image src="" className="first-place-image" /> */}
                    </div>
                    </Col>
                    </div>
            </Col>
            
            <Col md={6} sm={12} className="top-profile">
                <div className="results-info">
                            <img className="icon" src={miniatureicon} />
                            <h2 className="resultsone">{props.name}</h2>
                            <h3 className="highlight">HIGHLIGHTED INFO AREA</h3>
                            <p className="profileinfo">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, 
                            </p>
                </div>
         
            </Col>

        </div>
    </div>

)

export default Results;

