import React from "react";
import "./Profiles.css";
import { Grid, Button, Col, Image } from "react-bootstrap";

const GoogleFontsPlugin = require("google-fonts-webpack-plugin");


const Profiles = props => (

<div className="container-fluid profile-cont">
    <div className="row profile-cont">
   
        <Col lg={8} sm={12} className="profile-grid">
        <Image src="" className="brown-cir" /> 
            <div className="product-grid">
                <div className="products"><Image src="" className="product-img" /></div>
                <div className="products"><Image src="" className="product-img" /></div>
                <div className="products"><Image src="" className="product-img" /></div>
                <div className="products"><Image src="" className="product-img" /></div>
            </div>
        </Col>
      

        <Col lg={4} className="profile-bio">
            <div className="profile-info">
                <Image />
                <h1 className="product-name">CLASSIC</h1>
                <p className="product-description">
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Lorem ipsum dolor sit amet, consectetuer adipiscing elit
                </p>
            <div class="ratio-result">
                <h1 class="ratio">
                    <span className="chocolate">2</span>
                    <span className="colon">:</span>
                    <span className="pb">3</span>
                </h1>
            </div>
            <Button><a href="#">BUTTON</a></Button>
            </div>

        </Col>
    </div>

</div>


              /* <div class="col-lg-8 col-sm-12 profile-grid">
                  <div class="brown-cir"><img src="../images/bgcircle.svg" class="bg"></div>
                        <div class="headers pt-5 ml-5">
                            <div class="py-3 mx-auto"><h1><span class="profile-header">ALL THE PROFILES</span></h1></div>
                            <div class="py-3 mx-auto"> <h3><span class="profile-subheader">HIGHLIGHTED TEXT AREA</span></h3></div>
                        </div>
                        <div class="product-grid">   
                             <div class="products"><img src="../images/mini.png" class="product-img"></div> 
                             <div class="products"><img src="../images/miniature.png" class="product-img"></div> 
                             <div class="products"><img src="../images/classic.png" class="product-img"></div> 
                             <div class="products"><img src="../images/big-cup.png" class="product-img"></div> 
                          </div>
                          </div>

              <div class="col-lg-4 col-sm-12 profile-bio">
                  <div class="profile-info">
                  <div class="profile-photo">
                      <img src="../images/classic.png" class="responsive=image">
                  </div>
                  <h1 class="product-name">CLASSIC</h1>
                  <p class="product-description">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, Lorem ipsum dolor sit amet, consectetuer adipiscing elit, Lorem ipsum dolor sit amet, consectetuer adipiscing elit, </p>
                  <div class="ratio-result">
                      <h1 class="ratio">
                        <span class="chocolate">2</span>
                        <span class="colon">:</span>
                        <span class="pb">3</span>
                    </h1>
                  </div>
                  </div>
              </div>
          </div>
      </div>
     */
);

export default Profiles;