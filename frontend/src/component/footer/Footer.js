import { ImportExport } from "@mui/icons-material";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import React from "react";
import { useState, useEffect } from "react";

import "./Footer.css";
const Footer = () => {
  const [hoverBtn, setHoverBtn] = useState(true);

  return (
    <div className="main-container-footer">
      <div className="main-container1-footer">
        <div className="main-container1-footer-box1"
        style={{
            marginRight:"1vw"
        }}
        >
          <img
            src="https://pisa-react.envytheme.com/img/logo.png"
            style={{
              marginBottom: "1vw",
            }}
            alt=""
          />
          <br/>
          <text>
            Lorem ipsum dolor sit amet, consec tetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et. Lorem ipsum dolor sit amet,
            consec tetur
          </text>
          <div
            style={{
              display: "flex",
              width: "13vw ",
              marginTop: "2vw",
              justifyContent: "space-between",
            }}
          >
            <div className="footer-icon-socialbox">
              <FacebookIcon />
            </div>
            <div className="footer-icon-socialbox">
              <TwitterIcon />
            </div>
            <div className="footer-icon-socialbox">
              <InstagramIcon />
            </div>
            <div className="footer-icon-socialbox">
              <LinkedInIcon />
            </div>
          </div>
        </div>
        <div
          className="main-container1-footer-box1"
          style={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <div className="footer-heading">Help</div>
          <text>Private policy</text>
          <text>Return policy</text>
          <text>Terms And conditon</text>
          <text>About us</text>
          <text>Careers</text>
        </div>
        <div
          className="main-container1-footer-box1"
          style={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <div className="footer-heading">Contact</div>
          <text>
            <span
              style={{
                color: "white",
              }}
            >
              Address :
            </span>{" "}
            2750 Quadra Street Victoria, Canada.
          </text>
          <text>
            <span>Email:</span>
            hello@pisa.com
          </text>
          <text>
            <span>Phone:</span>
            +44 587 154756
          </text>
          <text>
            <span>Fax:</span>
            +44 785 4578964
          </text>
        </div>
        <div className="main-container1-footer-box1">
          <div className="footer-heading">NewsLetter</div>
          <text>Latest resources sent to your inbox weekly</text>
          <form action="">
            <input
              type="text"
              placeholder="Email address"
              style={{
                  marginTop:"1vw",
                  marginBottom:".5vw",
                width: "100%",
              }}
            />
            <div
              type="submit"
              className="button"
              style={{
                backgroundColor: "black",
                width: "100%",
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
              <span>


              Subscribe Now
              </span>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Footer;
