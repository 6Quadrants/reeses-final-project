import React, { Component }from "react";
// import { Link } from "react-router-dom";
import API from "../../../utils/API";

class BigCup extends Component {
  state = {
    reeses: []
  };

  componentDidMount() {
    this.loadReeses();
  }

  loadReeses = () => {
    API.getReeses()
      .then(res => this.setState({ reeses: res.data }))
      .catch(err => console.log(err));
  };

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
     
<div>
          <div>
              <h1>What Books Should I Read?</h1>
           
           
          </div>
          <div>
              <li>{this.state.reeses.map}</li>
              
          
         </div>
         </div>
       
    );
  }
}

export default BigCup;



  
   
  