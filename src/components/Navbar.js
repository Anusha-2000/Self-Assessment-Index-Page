import React from "react";
//import logo from "../logo.png";
//REACT FONTAWESOME IMPORTS
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import Signin from "./Signin.js";



const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light">
    <div className="container">

      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <FontAwesomeIcon icon={ faBars} style={{ color: "#fff" }}/>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ms-auto">
          <li className="nav-item active">
            <a className="nav-link" href="https://github.com/Anusha-2000/portfolio-project">Home <span className="sr-only"></span></a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href= "#">About</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Services</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href={ Signin }>Login</a>
          </li>
          
        </ul>
        
      </div>
    </div>
</nav>
    )
}

export default Navbar
