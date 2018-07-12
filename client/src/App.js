import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";



// import axios from 'axios';
import './App.css';

import Navigation from "./Components/Navigation";
import Profiles from "./Components/Profiles";
import Match from "./Components/Match";
// import Results from "./Components/Results";
import CardResult from "./Components/CardResult";
import Registration from "./Components/Registration";
import Footer from "./Components/Footer";


// const App = () => (

const App = () => (
    <Router>
       <div className="reeses-wrapper">  
       <Navigation />
        <Switch>
          <Route exact path="/" component={Registration} />
          <Route exact path="/registration" component={Registration} />
        </Switch>

        <Switch>
        <Route exact path="/profiles" component={Profiles} />
        </Switch>
        <Switch>
        <Route exact path="/match" component={Match} />
        </Switch>
        <Switch>
        <Route exact path="/cardresult" component={CardResult} />
        </Switch>
        {/* <Switch>
        <Route exact path="/stats" component={Stats} />
        </Switch> */}
      </div>
    </Router>
  );
  

//   <div className="reeses-wrapper">
//       <Registration />
//       <Navigation />
//       <Profiles />
//       <Match />
//       {/* <Results /> */}
//       <CardResult />
//       <Footer />
//   </div>

// ); 

export default App;
