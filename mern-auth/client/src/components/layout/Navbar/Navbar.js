import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Navbar.less";
class Navbar extends Component {
  handleClick = () => {
    this.props.history.push("/menu");
  };
  render() {
    return (
      <nav className="nav_parent">
        <div className="nav_wrapper">
          <Link to="/" className="home_link">
            APPLOGO
          </Link>
        </div>
        <div className="nav_right">
          <div className="nav_item_container active">
            <div className="nav_item">Home</div>
          </div>
          <div className="nav_item_container">
            <div className="nav_item" onClick={this.handleClick}>
              Menu
            </div>
          </div>
          <div className="nav_item_container">
            <div className="nav_item">About Us</div>
          </div>
          <div className="nav_item_container">
            <div className="nav_item">Contact Us</div>
          </div>
        </div>
      </nav>
    );
  }
}
export default Navbar;
