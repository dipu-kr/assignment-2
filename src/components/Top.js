import React from "react";
import "../css/Top.css";
import { GiKnifeFork } from "react-icons/gi";

const Top = () => {
  return (
    <div className="top-main">
      <div className="top-container">
        <GiKnifeFork className="top-icon" />
        <h3 className="top-header">Culinary kitchen</h3>
      </div>
    </div>
  );
};

export default Top;
