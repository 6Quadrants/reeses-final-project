import React from "react";
import "./Profiles.css";
import { Grid, Button, Col} from "react-bootstrap";

import classic from "../../Images/classic.png";
import bigcup from "../../Images/bigcup.png";
import mini from "../../Images/mini.png";
import miniature from "../../Images/miniature.png";


const GoogleFontsPlugin = require("google-fonts-webpack-plugin");

const Profiles = props => (

<div className="container-fluid profile-cont" id="Profiles">
    <div className="row profile-cont">
   
        <Col lg={8} sm={12} className="profile-grid">
            <div className="profile-text">
                <div className="profile-header"><h2 className="text-padding"><span className="orange-header">ALL THE PROFILES</span></h2></div>
                <div className="profile-header"><h4 className="text-padding"><span className="yellow-header">HIGHLIGHTED INFO AREA</span></h4></div>
            </div>
        {/* <Image src="" className="brown-cir" />  */}
            <div className="product-grid">
                <div className="products">
                <img className="product-img" src={miniature} onClick={(e) => 
                    console.log("lol wut")} key = "1"/></div>
                <div className="products"><img className="product-img" src={mini} id="1" /></div>
                <div className="products"><img className="product-img" src={classic} id="3"/></div>
                <div className="products"><img className="product-img" src={bigcup} id="4" /></div>
            </div>
        </Col>
      

        <Col lg={4} className="profile-bio">
            <div className="profile-info">
            
                <h1 className="product-name">{props.name}</h1>
                <p className="product-description">
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Lorem ipsum dolor sit amet, consectetuer adipiscing elit
                </p>
            <div class="ratio-result">
                <h1 class="ratio">
                    <span className="chocolate">{props.chocolate}</span>
                    <span className="colon">:</span>
                    <span className="pb">{props.peanutbutter}</span>
                </h1>
            </div>
            <Button><a href="#">BUTTON</a></Button>
            </div>

        </Col>
    </div>

</div>

);

export default Profiles;