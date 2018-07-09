import React from 'react';
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import './App.css';


import Navigation from "./Components/Navigation";
import Profiles from "./Components/Profiles";
import Match from "./Components/Match";
import Results from "./Components/Results";
import Registration from "./Components/Registration";
import Footer from "./Components/Footer";

// const GoogleFontsPlugin = Require("google-fonts-webpack-plugin");



const App = () => (
  <div className="reeses-wrapper">
  
    
      <Registration />
      <Navigation />
      <Profiles />
      <Match />
      <Results />
  </div>

); 

export default App;
