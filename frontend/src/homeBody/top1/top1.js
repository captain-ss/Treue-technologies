import React from "react";
import "./top1.css";
import { useState, useEffect } from "react";

import blackBanner from "../../images/black-banner.png";

const Top1 = () => {
  const [hoverBtn, setHoverBtn] = useState(true);
  const [hoverBtn1, setHoverBtn1] = useState(true);

  return (
    <div className="Homebody-top1-maincontainer">
      <div
        style={{
          width: "50%",
        }}
      >
        <div className="Homebody-top1-maincontainer-heading">
          We Help To Protect Modern Information From Hackers
        </div>
        <text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Adipiscing
          eleifend dictum potenti mattis viverra eget quam lacus enim porttitor
          bibendum elit, dui nisl. aenean turpis ut pretium et dictum dolor quis
          consect etur feugiat odio luctus a nibh sed sit fames ac at tincidunt
          quam vita.
        </text>
        <div
          style={{
            marginTop: "2vw",
            display:"flex"
          }}
        >
          <div
            className="button"
            style={{
              backgroundColor: "#ee385d",
              width: "14vw",
              marginRight:"1vw"
            }}
            onMouseEnter={() => {
              setHoverBtn(false);
            }}
            onMouseLeave={() => {
              setHoverBtn(true);
            }}
          >
            <div
              className="button-inside"
              style={{
                transform: hoverBtn ? "scaleX(1)" : "scaleX(0)",
              }}
            ></div>
            Get Started Now
          </div>
          <div
            className="button"
            style={{
              backgroundColor: "var(--color1)",
              width: "14vw",
            }}
            onMouseEnter={() => {
              setHoverBtn1(false);
            }}
            onMouseLeave={() => {
              setHoverBtn1(true);
            }}
          >
            <div
              className="button-inside"
              style={{
                transform: hoverBtn1 ? "scaleX(1)" : "scaleX(0)",
                border:"1px solid var(--color1)",
                backgroundColor:"var(--blue2)"
  
            }}
            ></div>
            Request Free Access
          </div>
        </div>
      </div>
      {/* <div
      style={{
          width:"20%"
      }}
      >
      </div> */}
      <img
        style={{
          width: "50%",
        }}
        src={blackBanner}
        alt=""
      />
    </div>
  );
};

export default Top1;
