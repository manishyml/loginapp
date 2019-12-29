import React, { Component } from "react";
import "./App.css";
import Landing from "./components/layout/Landing/Landing";
import NavBar from "./components/layout/Navbar/Navbar";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hello</h1>
        <Landing />
        <NavBar />
      </div>
    );
  }
}
export default App;
