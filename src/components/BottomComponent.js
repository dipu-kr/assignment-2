import React from "react";
import "../css/BottomComponent.css";
import img from "../assets/images/img-7.jpeg";
import img1 from "../assets/images/ava-1.jpeg";
import img2 from "../assets/images/ava-2.jpeg";
import img3 from "../assets/images/ava-4.jpeg";

const BottomComponent = () => {
  return (
    <div className="bottom-main">
      <div className="bottom-container">
        <h3 className="bottom-header">top chefs</h3>
        <div className="bottom-div">
          <img src={img} alt="background-img" />
          <div className="bottom-content-div">
            <div className="bottom-box-div">
              <div className="bottom-box-1">
                <img
                  src={img2}
                  alt="chef-1"
                  style={{
                    width: "80px",
                    height: "80px",
                    borderRadius: "100%",
                    objectFit: "cover",
                    marginTop: "15px",
                  }}
                />
                <h6 style={{ marginTop: "10px", fontSize: "15px" }}>
                  Eileen Johnson
                </h6>
                <p style={{ fontSize: "14px" }}>Execitive Chef, USA</p>
              </div>
              <div className="bottom-box-2">
                <img
                  src={img1}
                  alt="chef-1"
                  style={{
                    width: "80px",
                    height: "80px",
                    objectFit: "cover",
                    borderRadius: "100%",
                    marginTop: "15px",
                  }}
                />
                <h6 style={{ marginTop: "10px", fontSize: "15px" }}>
                  Robert Downey Jr
                </h6>
                <p style={{ fontSize: "14px", textAlign: "center" }}>
                  Lorem ipsum dolor sit amet, adipiscing elit, sed do
                </p>
              </div>
              <div className="bottom-box-3">
                <img
                  src={img3}
                  alt="chef-1"
                  style={{
                    width: "80px",
                    height: "80px",
                    objectFit: "cover",
                    borderRadius: "100%",
                    marginTop: "15px",
                  }}
                />

                <h6 style={{ marginTop: "10px", fontSize: "15px" }}>
                  Amanda Dority
                </h6>
                <p style={{ fontSize: "14px" }}>Sous Chef, india</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BottomComponent;
