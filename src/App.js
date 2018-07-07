import React from 'react';
import './App.css';
import Reeses from "./Reeses.json";


import Nav from "./Components/Nav";
import Navigation from "./Components/Navigation";
import Profiles from "./Components/Profiles";
import Match from "./Components/Match";
import Results from "./Components/Results";
import Footer from "./Components/Footer";

// const GoogleFontsPlugin = Require("google-fonts-webpack-plugin");



const App = () => (

  <div className="reeses-wrapper">
      {/* <Nav /> */}
      <Navigation />
      <Profiles />
      <Match />
      <Results />
      {/* <Footer /> */}
  </div>

); 

export default App;


// import React from "react";
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import "./App.css";
// import Books from "./pages/Books";
// import Detail from "./pages/Detail";
// import NoMatch from "./pages/NoMatch";
// import Nav from "./components/Nav";

// const App = () => (
//   <Router>
//     <div>
//       <Nav />
//       <Switch>
//         <Route exact path="/" component={Books} />
//         <Route exact path="/books" component={Books} />
//         <Route exact path="/books/:id" component={Detail} />
//         <Route component={NoMatch} />
//       </Switch>
//     </div>
//   </Router>
// );

// export default App;

