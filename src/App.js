import React from 'react';
import './App.css';
import Nav from "./Components/Nav";
import Navigation from "./Components/Navigation";
import Profiles from "./Components/Profiles";
import Match from "./Components/Match";
import Results from "./Components/Results";




const App = () => (

  <div className="reeses-wrapper">
      {/* <Nav /> */}
      <Navigation />
      <Profiles />
      <Match />
      <Results />
     
  </div>

); 

export default App;

