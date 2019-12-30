import React, { Component } from "react";
import { Link } from "react-router-dom";
class Landing extends Component {
  render() {
    return (
      <div className="landing_container">
        <div className="row">
          <div className="entry">
            <h4>
              <b>Build</b> a login/auth app with the <span>MERN</span> stack
              from scratch
            </h4>
            <p className="text">
              Create a (minimal) full-stack app with user authentication via
              passport and JWTs
            </p>
            <br />
            <div className="register_link">
              <Link to="/register" className="">
                Register
              </Link>
            </div>
            <div className="login_link">
              <Link to="/login" className="">
                Log In
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Landing;
