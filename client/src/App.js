import React from 'react';

// import axios from 'axios';
import './App.css';

import Navigation from "./Components/Navigation";
import Profiles from "./Components/Profiles";
import Match from "./Components/Match";
import Results from "./Components/Results";
import CardResult from "./Components/CardResult";
import Registration from "./Components/Registration";
import Footer from "./Components/Footer";


const App = () => (


  <div className="reeses-wrapper">
      <Registration />
      <Navigation />
      <Profiles />
      <Match />
      <Results />
      <CardResult />
      <Footer />
  </div>
  
); 

export default App;
