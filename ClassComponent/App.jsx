import React, { Component } from "react";
import Heading from "./Heading";
import SubHeading from "./SubHeading";
import Body from "./Body";
import Footer from "./Footer";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="container">
        <Heading />
        <SubHeading />
        <Body />
        <Footer />
      </div>
    );
  }
}

export default App;
