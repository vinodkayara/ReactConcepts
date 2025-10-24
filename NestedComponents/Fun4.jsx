import React, { Component } from "react";
import "./Fun4.css";
import Fun4Child1 from "./Fun4Child1";

class Fun4 extends Component {
  render() {
    return (
      <div className="fun4">
        <div className="fun4-title">Fun Component 4</div>
        <Fun4Child1 />
      </div>
    );
  }
}

export default Fun4;
