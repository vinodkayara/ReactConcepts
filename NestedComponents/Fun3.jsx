import React, { Component } from "react";
import "./Fun3.css";
import Fun3Child1 from "./Fun3Child1";
import Fun3Child2 from "./Fun3Child2";
import Fun3Child3 from "./Fun3Child3";

class Fun3 extends Component {
  render() {
    return (
      <div className="fun3">
        <div className="fun3-title">Fun Component 3</div>
        <Fun3Child1 />
        <div className="fun3-row">
          <Fun3Child2 />
          <Fun3Child3 />
        </div>
      </div>
    );
  }
}

export default Fun3;
