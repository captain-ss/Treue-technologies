import React from "react";
import "./homebodyBankingC.css";
import { useState } from "react";
import cyberdefenses1 from "../../images/cyberdefenses1.png";
import CheckIcon from "@mui/icons-material/Check";
<CheckIcon />;
const HomebodyBankingC = () => {
  const [hoverBtn, setHoverBtn] = useState(true);

  return (
    <div
      style={{
        display: "flex",
        padding: "4vw 6vw",
      }}
    >
      <div
        style={{
          width: "45vw",
          marginRight: "6vw",
        }}
      >
        <div
          className="body-headings"
          style={{
            fontSize: "2vw",
            marginBottom: "1vw",
          }}
        >
          Banking Security{" "}
        </div>
        <text>
          Lorem ipsum dolor sit amet consecte adipi scing elit adipiscing
          eleifend dictum poteder mattis viverra lorem ipsum dolor sit amet
          consecte adipisci ng elit adipiscingdiper eleifend dictum potenti
          mattis viverra.
        </text>
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
        <text>
          Lorem ipsum dolor sit amet consecte adipi scing elit adipiscing
          eleifend dictum poteder mattis viverra lorem ipsum dolor sit amet
          consecte adipisci ng elit adipiscingdiper eleifend dictum potenti
          mattis viverra.
        </text>
        <div
          className="button"
          style={{
            width: "13vw",
            backgroundColor: "black",
            marginTop: "2vw",
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
      </div>
      <img
        src={cyberdefenses1}
        style={{
          width: "40vw",
        }}
        alt=""
      />
    </div>
  );
};

export default HomebodyBankingC;
