import React, { Component } from "react";
import { Link } from "react-router-dom";
class Navbar extends Component {
  render() {
    return (
      <nav className="nav_parent">
        <div className="nav_wrapper">
          {/* <Link to="/" className="home_link"> */}
          <i className="main_heading">code</i>
          MERN
          {/* </Link> */}
        </div>
      </nav>
    );
  }
}
export default Navbar;
