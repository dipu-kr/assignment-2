import React from "react";
import "../css/RightContent.css";
import img1 from "../assets/images/img-2.webp";
import img2 from "../assets/images/img-4.jpeg";
import img3 from "../assets/images/img-5.webp";
import img4 from "../assets/images/img-6.jpeg";
import { BiStar, BiChevronRight } from "react-icons/bi";

const box = [
  {
    img: img1,
    title: "crispy french fries",
    description: "Lorem ipsum dolor sit amet, consectetur elit.",
  },
  {
    img: img2,
    title: "paneer tikka",
    description: "Lorem ipsum dolor sit amet, consectetur elit.",
  },
  {
    img: img3,
    title: "macaroon",
    description: "Lorem ipsum dolor sit amet, consectetur elit.",
  },
  {
    img: img4,
    title: "doughnut",
    description: "Lorem ipsum dolor sit amet, consectetur elit.",
  },
];

const RightContent = () => {
  return (
    <div className="right-content-main">
      {box.map((data, indx) => (
        <div className="right-content-div" key={indx}>
          <img
            src={data.img}
            alt={data.title}
            style={{
              width: "100%",
              height: "250px",
              objectFit: "cover",
              borderRadius: "12px",
            }}
          />
          <div
            className={indx === 2 ? "right-content-box-1" : "right-content-box"}
          >
            <h6
              style={{
                fontSize: "16px",
                marginTop: "7px",
                fontWeight: "500",
                textTransform: "capitalize",
              }}
            >
              {data.title}
            </h6>
            <p
              style={{ fontSize: "12px", margin: "10px 0", fontWeight: "500" }}
            >
              {data.description}
            </p>
            <hr />
            <p
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginTop: "10px",
              }}
            >
              <button
                className={
                  indx === 2 ? "right-content-button-1" : "right-content-button"
                }
              >
                Explore <BiChevronRight style={{ fontSize: "20px" }} />
              </button>
              <p style={{ height: "25px", display: "flex" }}>
                <span>
                  <BiStar />
                </span>
                <span style={{ fontSize: "13px", marginLeft: "12px" }}>
                  Rated
                </span>
              </p>
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default RightContent;
