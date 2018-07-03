import React from "react";
import "./Results.css";
import {Col, Form, Image } from "react-bootstrap";



const Results = props => (

    <div className="container-fluid profile-cont">
        <div className="row profile-cont">
            <Col md={6} sm={12} className="slider-reference">

                <div className="headers">
                    <div className="slider-ref-text"><h1><span className="profile-subheader">SOME KINDA</span></h1></div> 
                    <div className="slider-ref-text"><h1><span className="profile-yellow">REFERENCElongword</span></h1></div>
                    <div className="slider-ref-text"><h1><span className="profile-yellow">REFERENCE</span></h1></div>
                </div>
                </Col>

             <Col md={6} sm={12} className="sliders">
             </Col>

        </div>
    </div>
)

export default Results;

<div class="container-fluid profile-cont">
<div class="row">
    <div class="col-md-6 top-three">
         <div class="first-place">
             <div class="number"><h2 class="results one">first place</h2></div>
          <div class="image">
              <img src="../Images/miniature.png" class="first-place-image"></div>
         </div>
         <div class="row second-third">
              <div class="col-md-6 first-place second">
                      <div class="number"><h2 class="results one">second place</h2></div>

                  <img src="../Images/classic.png" class="first-place-image">
              </div>
              <div class="col-md-6 first-place third">
                      <div class="number"><h2 class="results one">third place</h2></div>

                  <img src="../Images/mini.png" class="first-place-image">
              </div>
         </div>
         
         
      </div>
      <div class="col-md-6 top-profile">
          <div class="results-info p-5">
              <img src="../Images/miniature-icon.svg" class="profile-icon my-3">  
              <h2 class="resultsone">MINIATURE</h2>
              <h3 class="highlight">HIGHLIGHTED INFO AREA</h3>
              <p class="profileinfo">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, 
              </p>
          </div>
         
      </div>