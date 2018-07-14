import React, { Component } from "react";
import "../../ReesesProfiles/Reesesprofiles.css";
import API from "../../../utils/API";
import { Col, Button} from "react-bootstrap"

import Ratioresult from "../../Ratioresult";
import profiledata from "./profiledata.json";


import classic from "../../Images/classic.png";



class Profileclassic extends Component {

//   state = {
//     reeses: []
//   };

//   componentDidMount() {
//     this.loadReeses();
//   }

//   loadReeses = () => {
//     API.getReeses()
//       .then(res => this.setState({ reeses: res.data }))
//       .catch(err => console.log(err));
//     //   .catch(err => console.log(loadReeses));
      
//   };

  render() {
    return (
        <div className="container-fluid">
            <div className="profile-row">
            <Col md={6}>
                <div><img className="product-img" src={classic} /></div>
            </Col>
            <Col md={6} className="profile-text-col">
                <div className="profile-text">
                    <div className="product-title">
                    <h1>Classic</h1>
                    <div className="product-info">
                    <p>blahblah</p>
                    </div>
                    <div className="ratioresult">
                    <Button>CLICK TO REVEAL</Button>
                    </div>
                    </div>
                </div>
            </Col>
            </div>
        </div>
    
    
    );
  }
}

export default Profileclassic;
