import React from "react";
import "./Carspacelogin.css";
import carOrange from "./Car.jpg"; // first image
import carLineup from "./Cars.jpg"; // second image

const Carspacelogin = () => {
  return (
    <div
      className="carspace-container"
      style={{ backgroundImage: `url(${carLineup})` }}
    >
      <div className="overlay">
        <div className="login-card">
          <div className="left-side">
            <img src={carOrange} alt="Car" className="car-image" />
          </div>

          <div className="right-side">
            <h1 className="logo">
              Car<span>space</span>
            </h1>

            <div className="tabs">
              <button className="active">Login</button>
              <button>Sign up</button>
            </div>

            <p>Enter your Mobile Number</p>
            <div className="input-group">
              <span className="country-code">+91</span>
              <input type="text" placeholder="Enter your number" />
            </div>

            <button className="continue-btn">Continue</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carspacelogin;
