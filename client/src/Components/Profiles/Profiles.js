import React, { Component } from "react";
import "./Profiles.css";

import { Col} from "react-bootstrap";

import Ratioresult from "../Ratioresult";

import profiledata from "./profiledata.json";
// import Profileclassic from "../../";



import classic from "../../Images/classic.png";
import bigcup from "../../Images/bigcup.png";
import mini from "../../Images/mini.png";
import miniature from "../../Images/miniature.png";



class Profiles extends Component {

    state = {
        profiledata
    };

    // state = {
    //     reeses: [],
    //     product: "",
    //     peanutbutter: "",
    //     chocolate: ""
        
    //   };
    
    //   componentDidMount() {
    //     this.loadReeses();
    //   }
    
    //   loadReeses = () => {
    //     API.getReeses()
    //       .then(res => this.setState({ reeses: res.data }))
    //       .catch(err => console.log(err));
    //   };
    
  
    
render() {
return (

<div className="container-fluid profile-cont" id="Profiles">


    <div className="cont">

    <Col md={6} sm={12}className="profile-images cardmini">
        
        <div className="bio-card ">
        <div className="inner-row">
        <Col md={6} className="innercolumn">
            <div className="images mini">
                <img className="product-img" src={mini} id="1" alt="reeses peanut butter cup mini"/>   
            </div>
        </Col>
        
        <Col md={6} className="innercolumn right">
            <div className="bioinfo">
                <h1 className="productname">Mini</h1>
                <p className="product-description">
                Don't blink because you may miss the mini. A poppable cup with a thick outer shell.
                </p>
            </div>
            <Ratioresult 
                chocolate={profiledata[0].chocolate}
                peanutbutter={profiledata[0].peanutbutter}
            />
        </Col>
        </div>
        </div>  
        </Col>

        <Col md={6} sm={12}className="profile-images cardminiature">
        
        <div className="bio-card ">
        <div className="inner-row">
        <Col md={6} className="innercolumn">
            <div className="images mini">
                <img className="product-img" src={miniature} id="1" alt="reeses peanut butter cup miniature"/>   
            </div>
        </Col>
        
        <Col md={6} className="innercolumn right">
            <div className="bioinfo">
                <h1 className="productname">Miniature</h1>
                <p className="product-description">
                Don't confuse The Miniature with the mini. The individually wrapped Miniature is its with a unique personality and loves to travel.
                </p>
            </div>
            <Ratioresult 
                chocolate={profiledata[1].chocolate}
                peanutbutter={profiledata[1].peanutbutter}
            />
        </Col>
        </div>
        </div>  
        </Col>
</div>

    <div className="cont">
        <Col md={6} sm={12}className="profile-images cardclassic">
        
        <div className="bio-card">
        <div className="inner-row">
        <Col md={6} className="innercolumn">
            <div className="images mini">
                <img className="product-img" src={classic} id="1" alt="reeses peanut butter cup classic"/>   
            </div>
        </Col>

        <Col md={6} className="innercolumn right">
            <div className="bioinfo">
                <h1 className="productname">Classic</h1>
                <p className="product-description">
                The Classic is a well-balanced cup and offers a healthy balance of salty and sweet.
                </p>
            </div>
            <Ratioresult 
                chocolate={profiledata[2].chocolate}
                peanutbutter={profiledata[2].peanutbutter}
            />
        </Col>
        </div>
        </div>  
        </Col>


        <Col md={6} sm={12}className="profile-images cardbigcup">
        
        <div className="bio-card ">
        <div className="inner-row">
        <Col md={6} className="innercolumn">
            <div className="images mini">
                <img className="product-img" src={bigcup} id="1" alt="reeses peanut butter cup big cup"/>   
            </div>
        </Col>
        
        <Col md={6} className="innercolumn right">
            <div className="bioinfo">
                <h1 className="productname">Big Cup</h1>
                <p className="product-description">
                The Classic is a well-balanced cup and offers a healthy balance of salty and sweet.
                </p>
            </div>
            <Ratioresult 
                chocolate={profiledata[3].chocolate}
                peanutbutter={profiledata[3].peanutbutter}
            />
        </Col>
        </div>
        </div>  
        </Col>


    </div>
</div>
)}
}

export default Profiles;

           