import React from "react";
import "./CardResult.css";
import {Col} from "react-bootstrap";

import mini from "../../Images/mini.png";
import miniatureicon from "../../Images/miniatureicon.svg";




const CardResult = props => (

    <div className="blah">
        <div className="r">
            <Col sm={12} className="">
                <div className="card-holder">
                <div className="">
                    <img className="card-image-bg" src={mini} alt="reeses peanut butter cup mini" />
                </div>
                {/* <div className="">
                
                <div className="digit"><h4 className="resultsnumb">1</h4></div>
                <div className="number"><h4 className="results one">First Place</h4></div>
                    
                </div> */}
                <div className="card-text">
                            <img className="winnericon" src={miniatureicon} alt="reeses peanut butter cup icon" />
                            <h2 className="">{props.name}</h2>
                            <h3 className="winner-hilite">HIGHLIGHTED INFO AREA</h3>
                            <p className="">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, 
                            </p>
                </div>
                     </div>
            </Col>
         

        </div>
    </div>

)

export default CardResult;

