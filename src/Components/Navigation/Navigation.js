// import React from "react";
// import "./Navigation.css";
// import { Navbar, NavDropdown, NavItem, MenuItem, Nav } from "react-bootstrap";


// const Navigation = props => (

    

// <Navbar expand-lg collapseOnSelect>
//   <Navbar.Header>
//     <Navbar.Brand>
//     <h1>
//         <span className="chocolate">CHOC</span>
//          <span className="colon">:</span>
//          <span className="pb">PB</span>
//     </h1>
//       {/* <a href="#brand">React-Bootstrap</a> */}
//     </Navbar.Brand>
//     <Navbar.Toggle />
//   </Navbar.Header>
//   <Navbar.Collapse>
//     <Nav>
//       <NavItem eventKey={1} href="/Profiles" className="profiles">
//         Profiles
//       </NavItem>
//       <NavItem eventKey={2} href="#">
//         Link
//       </NavItem>
//       {/* <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
//         <MenuItem eventKey={3.1}>Action</MenuItem>
//         <MenuItem eventKey={3.2}>Another action</MenuItem>
//         <MenuItem eventKey={3.3}>Something else here</MenuItem>
//         <MenuItem divider />
//         <MenuItem eventKey={3.3}>Separated link</MenuItem>
//       </NavDropdown> */}
//     </Nav>
//     <Nav pullRight>
//       <NavItem eventKey={1} href="#">
//         Link Right
//       </NavItem>
//       <NavItem eventKey={2} href="#">
//         Link Right
//       </NavItem>
//     </Nav>
//   </Navbar.Collapse>
// </Navbar>

// );




// export default Navigation;




import React from "react";
import "./Navbar.css";

const Navbar = props => (


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
                      <a className="nav-link" href="#Profiles">Profiles</a>
                    </li>
                    <li className="nav-item match">
                      <a className="nav-link" href="#Match">Match</a>
                    </li>
                    <li className="nav-item stats">
                      <a className="nav-link" href="/Registraion">Registration</a>
                    </li>
                  
                  </ul>
 
    </div>
  </nav>

);

export default Navbar;

