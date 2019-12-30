import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Navbar.less";
class Navbar extends Component {
  render() {
    return (
      <nav className="nav_parent">
        <div className="nav_wrapper">
          <Link to="/" className="home_link">
            <i className="main_heading">code</i>
            MERN
          </Link>
        </div>
        <div className="nav_right">
          <div className="about_us">About Us</div>
          <div className="contact_us">Contact Us</div>
          <div className="menu">Menu</div>
        </div>
      </nav>
    );
  }
}
export default Navbar;
