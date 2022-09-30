import React from "react";
import "../css/Middle.css";

const Middle = () => {
  return (
    <div className="middle-main">
      <div className="middle-container">
        <div className="middle-box">
          <h4
            style={{
              fontSize: "17px",
              fontWeight: "600",
              textTransform: "capitalize",
              letterSpacing: "1px",
            }}
          >
            indian cuisine
          </h4>
          <p
            style={{
              fontSize: "14px",
              letterSpacing: "1px",
              textAlign: "justify",
            }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt.
          </p>
        </div>
        <div className="middle-box">
          <h4
            style={{
              fontSize: "17px",
              fontWeight: "600",
              textTransform: "capitalize",
              letterSpacing: "1px",
            }}
          >
            american culsine
          </h4>
          <p
            style={{
              fontSize: "14px",
              letterSpacing: "1px",
              textAlign: "justify",
            }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>
        <div className="middle-box">
          <h4
            style={{
              fontSize: "17px",
              fontWeight: "600",
              textTransform: "capitalize",
              letterSpacing: "1px",
            }}
          >
            chinese culsine
          </h4>
          <p
            style={{
              fontSize: "14px",
              letterSpacing: "1px",
              textAlign: "justify",
            }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Middle;
