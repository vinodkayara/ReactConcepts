import React, { Component } from "react";
import "./Fun2.css";
import Fun2Child1 from "./Fun2Child1";
import Fun2Child2 from "./Fun2Child2";

class Fun2 extends Component {
  render() {
    return (
      <div className="fun2">
        <div className="fun2-title">Fun Component 2</div>
        <div className="fun2-children">
          <Fun2Child1 />
          <Fun2Child2 />
        </div>
      </div>
    );
  }
}

export default Fun2;
