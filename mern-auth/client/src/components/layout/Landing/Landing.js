import React, { Component } from "react";
import Hero from "../Hero/Hero";
import { connect } from "react-redux";
import Cards from "../Cards/Cards";
import "./Landing.less";
class Landing extends Component {
  render() {
    return (
      <div className="landing_container">
        <div className="hero_container">
          <Hero />
        </div>
        <div className="cards">
          <Cards content={this.props.landing && this.props.landing} />
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  landing: state.landing
});
const mapDispatchToProps = dispatch => {};
export default connect(mapStateToProps, mapDispatchToProps)(Landing);
