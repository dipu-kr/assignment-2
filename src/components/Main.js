import React from "react";
import "../css/Main.css";
import LeftContent from "./LeftContent";
import RightContent from "./RightContent";

const Main = () => {
  return (
    <div className="main">
      <p className="varieties">varieties</p>
      <div className="main-container">
        <div className="main-content-div">
          <div className="main-content-left">
            <LeftContent />
          </div>
          <div className="main-content-right">
            <RightContent />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
