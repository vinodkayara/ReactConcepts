import React, { Component } from "react";
import Aside from "./Aside";
import MainContent from "./MainContent";

class Body extends Component {
  render() {
    return (
      <div className="body">
        <Aside />
        <MainContent />
      </div>
    );
  }
}

export default Body;
