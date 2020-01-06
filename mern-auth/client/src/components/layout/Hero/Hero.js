import React, { Component } from "react";
import { Link } from "react-router-dom";
import HeroImage from "../../../assets/images/protected.svg";
import "./Hero.less";
class Hero extends Component {
  state = {};
  render() {
    return (
      <div className="hero_banner">
        <div className="left_side">
          <h4 className="hero_title">Explore the web app</h4>
          <p className="hero_description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum quasi
            dicta dolor provident labore voluptatum cum maiores adipisci quod
            nemo! Culpa deleniti ullam iste aliquid ad unde accusamus
            accusantium molestias.
          </p>
          <div className="link_container">
            <div className="register_link">
              <Link to="/register" className="">
                Register
              </Link>
            </div>
            <span className="or_text">
              <div className="or_text_parent">
                <span className="or_text_inner">OR</span>
              </div>
            </span>
            <div className="login_link">
              <Link to="/login" className="">
                Log In
              </Link>
            </div>
          </div>
        </div>
        <div className="hero_icon_container">
          <img src={HeroImage} alt="hero" className="icon" />
        </div>
      </div>
    );
  }
}

export default Hero;
