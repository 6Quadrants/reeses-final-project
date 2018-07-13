import React, { Component } from "react";
import "./Profiles.css";
import API from "../../utils/API";
import { Link } from "react-router-dom";
import { Col} from "react-bootstrap";
import { List, ListItem } from "../../Components/List";

import Ratioresult from "../Ratioresult";

import profiledata from "./profiledata.json";


import classic from "../../Images/classic.png";
import bigcup from "../../Images/bigcup.png";
import mini from "../../Images/mini.png";
import miniature from "../../Images/miniature.png";



const GoogleFontsPlugin = require("google-fonts-webpack-plugin");

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
   
    <div className="row profile-cont">
        <Col md={12} className="profile-grid">
            <div className="profile-text">
                <div className="profile-header"><h2 className="text-padding"><span className="orange-header">ALL THE PROFILES</span></h2></div>
                <div className="profile-header"><h4 className="text-padding"><span className="yellow-header">HIGHLIGHTED INFO AREA</span></h4></div>
            </div>
        </Col>
    </div>
         

    <div className="row profile-images">

        <Col lg={3} md={6} sm={12}className="profile-images">

            <div className="bio-card">
            <div className="images mini">
                <img className="product-img" src={miniature} id="1" />   
            </div>
            <Ratioresult 
                chocolate={profiledata[0].chocolate}
                peanutbutter={profiledata[0].peanutbutter}
            />
            
        </div>  
        </Col>
        
        <Col lg={3} md={6} sm={12}className="profile-images">

        <div className="bio-card">
            <div className="images mini">
                <img className="product-img" src={miniature} id="1" />   
            </div>
            <Ratioresult 
                chocolate={profiledata[1].chocolate}
                peanutbutter={profiledata[1].peanutbutter}
            />
        </div>  
        </Col>

        <Col lg={3} md={6} sm={12}className="profile-images">

        <div className="bio-card">
            <div className="images mini">
                <img className="product-img" src={classic} id="1" />   
            </div>
            <Ratioresult 
                chocolate={profiledata[2].chocolate}
                peanutbutter={profiledata[2].peanutbutter}
            />
        </div>  
        </Col>

        <Col lg={3} md={6} sm={12}className="profile-images">
        <div className="bio-card">
            <div className="images mini">
                <img className="product-img" src={bigcup} id="1" />   
            </div>
            <Ratioresult 
                chocolate={profiledata[3].chocolate}
                peanutbutter={profiledata[3].peanutbutter}
            />
        </div>  
        </Col>
    </div>
</div>
)}
}

export default Profiles;

                


            //  {this.state.reeses.length ? ( 
            //   <List>
            //     {this.state.reeses.map(reeses => (
            //       <ListItem key={reeses._id}>
            //         <Link to={"/reeses/" + reeses._id}>
            //           <strong>
            //             {reeses.chocolate} by {reeses.peanutbutter} and {reeses.product}
            //           </strong>
            //         </Link>
            //       </ListItem>
            //     ))}
            //   </List>
            // ) : (
            //   <h3>No Results to Display</h3>
            // )}


            
   

             /* <ProfileClassic />  */
            
                 /* <h1 className="product-name">{props.name}</h1>
                <p className="product-description">
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Lorem ipsum dolor sit amet, consectetuer adipiscing elit
                </p>
            <div className="ratio-result">
                <h1 className="ratio">
                    <span className="chocolate">{props.chocolate}</span>
                    <span className="colon">:</span>
                    <span className="pb">{props.peanutbutter}</span>
                </h1>
            </div>
            <Button><a href="#">BUTTON</a></Button>  */
           /* </div> */








