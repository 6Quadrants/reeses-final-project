import React from "react";
import "./Navigation.css";
import { Navbar, NavDropdown, NavItem, MenuItem, Nav } from "react-bootstrap";


const Navigation = props => (


    <nav className="navbar navbar-expand-lg navbar-light">
    <a className="navbar-brand" href="https://www.google.com/">   
    <h1>
        <span className="chocolate">CHOC</span>
         <span className="colon">:</span>
         <span className="pb">PB</span>
    </h1>
   
    </a>
    <button className="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
  
    <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav">
                    <li className="nav-item profiles">
                      <a className="nav-link" href="/profiles">Profiles</a>
                    </li>
                    <li className="nav-item match">
                      <a className="nav-link" href="/match">Match</a>
                    </li>
                    <li className="nav-item stats">
                      <a className="nav-link" href="/stats">Stats</a>
                    </li>
                  
                  </ul>
 
    </div>
  </nav>

);

export default Navigation;

