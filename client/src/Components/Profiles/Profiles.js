import React, { Component } from "react";
import "./Profiles.css";
import API from "../../utils/API";
import { Link } from "react-router-dom";
import { Col} from "react-bootstrap";
import { List, ListItem } from "../../Components/List";


// import  { ProfileClassic }  from "../../Components/ReesesProfiles";


import BigCup from "../ReesesProfiles/BigCup/BigCup";

import classic from "../../Images/classic.png";
import bigcup from "../../Images/bigcup.png";
import mini from "../../Images/mini.png";
import miniature from "../../Images/miniature.png";



const GoogleFontsPlugin = require("google-fonts-webpack-plugin");

class Profiles extends Component {

    // state = {
    //     reeses: [],
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
    
      state = {
        datatest: [],
        product: "",
      };
    
      componentDidMount() {
        this.loadDatatest();
      }
    
      loadDatatest = () => {
        API.getDatatest()
          .then(res => this.setState({ datatest: res.data }))
          .catch(err => console.log(err));
      };
    
    
    // state = {
    //     reeses: {}
    //   };

    //   componentDidMount() {
    //     API.getReeses(this.props.match.params.id)

    //       .then(res => this.setState({ reeses: res.data }))
    //       .catch(err => console.log(err));
    //   }
    
    



render() {
return (

<div className="container-fluid profile-cont" id="Profiles">
    <div className="row profile-cont">
   
        <Col lg={8} sm={12} className="profile-grid">
            <div className="profile-text">
                <div className="profile-header"><h2 className="text-padding"><span className="orange-header">ALL THE PROFILES</span></h2></div>
                <div className="profile-header"><h4 className="text-padding"><span className="yellow-header">HIGHLIGHTED INFO AREA</span></h4></div>
            </div>
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


            {this.state.datatest.length ? (
              <List>
                {this.datatest.reeses.map(reeses => (
                  <ListItem key={datatest._id}>
                    <Link to={"/datatest/" + datatest._id}>
                      <strong>
                        {datatest.product} by 
                      </strong>
                    </Link>
                  </ListItem>
                ))}
              </List>
            ) : (
              <h3>No Results to Display</h3>
            )}

            {/* {this.state.reeses.length ? (
              <List>
                {this.state.reeses.map(reeses => (
                  <ListItem key={reeses._id}>
                    <Link to={"/reeses/" + reeses._id}>
                      <strong>
                        {reeses.chocolate} by {reeses.peanutbutter}
                      </strong>
                    </Link>
                  </ListItem>
                ))}
              </List>
            ) : (
              <h3>No Results to Display</h3>
            )} */}


            
        </div>

            {/* <ProfileClassic /> */}
            
                {/* <h1 className="product-name">{props.name}</h1>
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
            <Button><a href="#">BUTTON</a></Button> */}
           
        </Col>
    </div>

</div>

);
}
}


export default Profiles;