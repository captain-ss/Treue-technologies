import React from "react";
import "./homebodypart5.css";
import { useState } from "react";
import CheckIcon from "@mui/icons-material/Check";

import homecontrol from "../../images/homecontrol.jpg";
const Homebodypart5 = () => {
  const [hoverBtn, setHoverBtn] = useState(true);

  const [clickedState, setClickedState] = useState(1);
  return (
    <div
      style={{
        display: "flex",
        padding: "0vw 6vw",
        justifyContent: "space-between",
        marginBottom:"6vw"
      }}
    >
      <div className="homebody-part5-div1">
        <br />
        <br />
        <smallHeading>
          Innovative Electronic Protection Of Your Office And Home Control
        </smallHeading>

        <br />
        <br />
        <text>
          Lorem ipsum dolor sit amet consectetur adipiscing elit adipiscing
          eleifend dictum potenti mattis viverra eget quam lacus enim porttitor
          bibendum elit dui nisl.
        </text>
        <div
          className="homebody-part5-button-box"
          style={{
            width: "100%",
            height: "2vw",
            marginTop: "1vw",
            borderRadius: ".2vw",
            backgroundColor: "var(--color3)",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "1vw",
          }}
        >
          <div
            onClick={() => {
              setClickedState(1);
            }}
            style={{
              color: clickedState == 1 ? "var(--color1)" : "",
            }}
            className="homebodypart5-buttons"
          >
            Intercom System
          </div>
          <div
            onClick={() => {
              setClickedState(2);
            }}
            style={{
              color: clickedState == 2 ? "var(--color1)" : "",
            }}
            className="homebodypart5-buttons"
          >
            CCTV
          </div>
          <div
            onClick={() => {
              setClickedState(3);
            }}
            style={{
              color: clickedState == 3 ? "var(--color1)" : "",
            }}
            className="homebodypart5-buttons"
          >
            GDPR
          </div>
          <div
            onClick={() => {
              setClickedState(4);
            }}
            style={{
              color: clickedState == 4 ? "var(--color1)" : "",
            }}
            className="homebodypart5-buttons"
          >
            Encryption
          </div>
          <div
            onClick={() => {
              setClickedState(5);
            }}
            style={{
              color: clickedState == 5 ? "var(--color1)" : "",
            }}
            className="homebodypart5-buttons"
          >
            Our Goal
          </div>
        </div>
        {clickedState === 1 && (
          <div
            style={{
              marginTop: "1vw",
            }}
          >
            <text>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo.
            </text>
          </div>
        )}
        {clickedState === 2 && (
          <div
            style={{
              marginTop: "1vw",
            }}
          >
            <text>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Voluptates, quasi!
            </text>
          </div>
        )}
        {clickedState === 3 && (
          <div
            style={{
              marginTop: "1vw",
            }}
          >
            <text>
              But I must explain to you how all this mistaken idea of denouncing
              pleasure and praising pain was born and I will give you a complete
              account of the system, and expound the actual teachings of the
              great explorer.
            </text>
          </div>
        )}
        {clickedState === 4 && (
          <div
            style={{
              marginTop: "1vw",
            }}
          >
            <text>
              At vero eos et accusamus et iusto odio dignissimos ducimus qui
              blanditiis praesentium voluptatum deleniti atque corrupti quos
              dolores et quas molestias excepturi sint occaecati cupiditate non
              provident.
            </text>
          </div>
        )}
        {clickedState === 5 && (
          <div
            style={{
              marginTop: "1vw",
            }}
          >
            <text>
              On the other hand, we denounce with righteous indignation and
              dislike men who are so beguiled and demoralized by the charms of
              pleasure of the moment, so blinded by desire, that they cannot
              foresee.
            </text>
          </div>
        )}
        <div className="Hmbdybnkig-small-boxes">
          <div>
            <CheckIcon
              sx={{ fontSize: 10 }}
              style={{
                backgroundColor: "var(--color2)",
                borderRadius: "10vw",
                padding: ".2vw",
                marginRight: ".8vw",
              }}
            />
            Focus on The Basics
          </div>
          <div>
            <CheckIcon
              sx={{ fontSize: 10 }}
              style={{
                backgroundColor: "var(--color2)",
                borderRadius: "10vw",
                padding: ".2vw",
                marginRight: ".8vw",
              }}
            />
            Educate Customers
          </div>
          <div>
            <CheckIcon
              sx={{ fontSize: 10 }}
              style={{
                backgroundColor: "var(--color2)",
                borderRadius: "10vw",
                padding: ".2vw",
                marginRight: ".8vw",
              }}
            />
            Be Proactive
          </div>
          <div>
            <CheckIcon
              sx={{ fontSize: 10 }}
              style={{
                backgroundColor: "var(--color2)",
                borderRadius: "10vw",
                padding: ".2vw",
                marginRight: ".8vw",
              }}
            />
            Tighten Internal Controls
          </div>
        </div>
        <div
          className="button"
          style={{
            width: "10vw",
            backgroundColor: "black",
            marginTop: "2vw"
          }}
          onMouseEnter={() => {
            setHoverBtn(false);
          }}
          onMouseLeave={() => {
            setHoverBtn(true);
          }}
        >
            Learn About
          <div
            className="button-inside"
            style={{
              transform: hoverBtn ? "scaleX(1)" : "scaleX(0)",
            }}
          >
          </div>
        </div>
      </div>
      <img
        src={homecontrol}
        style={{
          width: "40vw",
          borderRadius: "2vw",
        }}
        alt=""
      />
    </div>
  );
};

export default Homebodypart5;
