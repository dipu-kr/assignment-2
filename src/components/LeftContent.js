import React from "react";
import "../css/LeftContent.css";
import img3 from "../assets/images/img-3.jpeg";
import { BiStar, BiChevronRight } from "react-icons/bi";

const LeftContent = () => {
  return (
    <div className="left-content-main">
      <div className="left-content-div">
        <img src={img3} alt="left-img" />
        <div className="left-content">
          <h6 style={{ fontSize: "17px", fontWeight: "500", margin: "15px 0" }}>
            Pizza is savory dish of Italian origin
          </h6>
          <p
            style={{
              fontSize: "14px",
              fontWeight: "300",
              marginBottom: "12px",
            }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua
          </p>
          <hr />
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              marginTop: "15px",
              paddingBottom: "15px",
            }}
          >
            <button className="left-content-btn">
              Explore <BiChevronRight style={{ fontSize: "24px" }} />
            </button>
            <p
              style={{
                height: "30px",
                display: "flex",
              }}
            >
              <span>
                <BiStar />
              </span>
              <span style={{ marginLeft: "10px", fontSize: "12px" }}>
                Rated
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftContent;
