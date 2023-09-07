import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
const TopNavbar = () => {
  return (
    <div className="backgrdClr1">
      <div className="main-Top-navbar">
        <div
          style={{
            width: "30vw",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <div>Email: hello@pisa.com</div>
          <div>658 Lane Drive St. California</div>
        </div>
        <div
          style={{
            width: "10vw",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <FacebookIcon 
          className="topNavbar-icons"
          />
          <TwitterIcon 
          className="topNavbar-icons"
          />
          <InstagramIcon 
          className="topNavbar-icons"
          />
          <LinkedInIcon 
          className="topNavbar-icons"
          
          />
        </div>
      </div>
    </div>
  );
};

export default TopNavbar;
