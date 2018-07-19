import React from "react";
import "./Stats.css";

import { Col } from "react-bootstrap";
import AllRatios from "../Stats/AllRatios";
import MiniRatio from "../Stats/MiniRatio";

import MiniatureRatio from "../Stats/MiniatureRatio";
import ClassicRatio from "../Stats/ClassicRatio";
import BigCupRatio from "../Stats/BigCupRatio";


import AllWeights from "../Stats/AllWeights";
import Circumference from "../Stats/Circumference";



const Stats = props => (

    <div className="container-fluid">
    <div className="inner-wrapper">

    <div className="row">
        <Col md={8}>
            <div className="stats-container">
            <AllRatios />
            <div className="label">    
            <h3 className="chart-label">Choc:PB for each Reeses's Cup</h3>
            </div>
            </div>
        </Col>
      
        <Col md={4}>
            <div className="stats-info">
            <h2 className="stats-header">
            Not all Reeses's Cups are created equal.
            </h2>
            <p>
            I'm not talking about thier place in candy society, I'm talking about how their size and shape affects how much chocolate and how much peanut butter they end up with.</p>
            <p>
            Everyone likes something a little different and everyone can benefit from know just what they're getting when they pick up that little (or big) chocolate covered peanut butter.
            </p>
            </div>
        </Col>
        
    </div>


    <div className="row">
        <Col md={3}>
            <div className="stats-container">
            <MiniRatio />
            <div className="label">    
            <h3 className="chart-label">Choc:PB Mini</h3>
            </div>
            </div>
        </Col>
        <Col md={3}>
            <div className="stats-container">
            <MiniatureRatio />
            <div className="label">    
            <h3 className="chart-label">Choc:PB Miniature</h3>
            </div>
            </div>
        </Col>
        <Col md={3}>
            <div className="stats-container">
            <ClassicRatio />
            <div className="label">    
            <h3 className="chart-label">Choc:PB Classic</h3>
            </div>
            </div>
        </Col>
        <Col md={3}>
            <div className="stats-container">
            <BigCupRatio />
            <div className="label">    
            <h3 className="chart-label">Choc:PB Big Cup</h3>
            </div>
            </div>
        </Col>
        
    </div>

    <div className="row">
        <Col md={6}>
            <div className="stats-container">
            <AllWeights />
            <div className="label">    
            <h3 className="chart-label">Weight in Grams</h3>
            </div>
            </div>
        </Col>
        <Col md={6}>
            <div className="stats-container">
            <Circumference />
            <div className="label">    
            <h3 className="chart-label">Relative Circumference</h3>
            </div>
            </div>
        </Col>
        
    </div>
       
    </div>   
    </div>

)

export default Stats;