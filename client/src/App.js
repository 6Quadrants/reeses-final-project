import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

// import axios from 'axios';
import './App.css';

import Navigation from "./Components/Navigation";
import Profiles from "./Components/Profiles";
import Match from "./Components/Match";
import Registration from "./Components/Registration";
import Stats from "./Components/Stats";
import Footer from "./Components/Footer";


const App = () => (
    <Router>
        <div className="reeses-wrapper">  
          <Navigation />

          <Route exact path="/" component={Registration} />


        <Route exact path="/profiles" component={Profiles} />
       
        <Route exact path="/match" component={Match} />
       
        <Route exact path="/stats" component={Stats} />
        <Footer />
      </div>
    </Router>
  );
  

export default App;
