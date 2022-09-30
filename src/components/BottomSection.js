import React from "react";
import "../css/BottomSection.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCarrot,
  faAppleWhole,
  faBacon,
} from "@fortawesome/free-solid-svg-icons";
import { GiGrainBundle } from "react-icons/gi";
import food from "../assets/images/food2.png";

const BottomSection = () => {
  return (
    <div className="bottom-section-main">
      <div className="bottom-section-container">
        <h3 className="bottom-section-header">food guide</h3>
        <div className="bottom-section-div">
          <div className="bottom-section-box-1">
            <div className="section-part-1">
              <span>
                <FontAwesomeIcon icon={faCarrot} style={{ fontSize: "20px" }} />
              </span>
              <h6>vegetables</h6>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor
              </p>
            </div>
            {/* --------------== */}
            <div className="section-part-1">
              <span>
                <FontAwesomeIcon
                  icon={faAppleWhole}
                  style={{ fontSize: "20px" }}
                />
              </span>
              <h6>fruits</h6>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor
              </p>
            </div>
          </div>

          {/* -------------------box-2--------------- */}
          <div className="bottom-section-box-2">
            <div className="bottom-section-img">
              <img src={food} alt="food" />
            </div>
          </div>
          {/* -------------------box-3---------------- */}
          <div className="bottom-section-box-3">
            <div className="section-part-1">
              <span>
                <GiGrainBundle style={{ fontSize: "20px", color: "#fff" }} />
              </span>
              <h6>whole grains</h6>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor
              </p>
            </div>
            {/* --------------== */}
            <div className="section-part-1">
              <span>
                <FontAwesomeIcon icon={faBacon} style={{ fontSize: "20px" }} />
              </span>
              <h6>healthy protein</h6>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BottomSection;
