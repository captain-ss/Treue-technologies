import React from "react";
import { useState } from "react";
import "./homeBodyPart2.css";
import "../body.css";
import PestControlIcon from "@mui/icons-material/PestControl";
import saferworld2 from "../../images/saferworld2.png";
import FileCopyIcon from '@mui/icons-material/FileCopy';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined';

const HomePart2Component = ({ item }) => {
  const [hoverState, setHoverState] = useState(true);

  const hoverHandler1 = () => {
    setHoverState(!hoverState);
  };
  return (
    <div
      className="homebody-box1"
      onMouseEnter={hoverHandler1}
      onMouseLeave={hoverHandler1}
    >
      <div
        style={{
          position: "relative",
          width: "0vw",
          height: "0vw",
          overflow: "visible",
          right: "2vw",
          bottom: "2vw",
        }}
      >
        <div
          className="homebody-hovering"
          style={{
            width: "28vw",
            height: "31vw",
            backgroundColor: "var(--color1)",
            position: "relative",
            right: hoverState ? "28vw" : "0vw",
            zIndex: "1",
          }}
        ></div>
      </div>
      <div
        style={{
          fontSize: "1.5vw",
          position: "relative",
          zIndex: "2",
        }}
      >
        < item.icon
          sx={{ fontSize: 40 }}
          style={{
            padding: "2vw",
            backgroundColor: "var(--color1)",
            borderRadius: "100vw",
            marginBottom:"1vw"
          }}
        />
        <br />
       {item.title}{" "}
      </div>
      <text
        style={{
          position: "relative",
          zIndex: "2",
          color: hoverState ? "" : "white",
        }}
      >
        {item.text}
      </text>
    </div>
  );
};

const HomeBodyPart2 = () => {
  const [hoverBtn, setHoverBtn] = useState(true);

  const arr2 = [
    {
      icon: PestControlIcon,
      title: " Malware Detection Removal",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Estrepellendus soluta dolorem",
    },
    {
      icon: FileCopyIcon,
      title: " Content delivery Network",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Estrepellendus soluta dolorem",
    },
    {
      icon: AccountCircleOutlinedIcon,
      title: " 24/7 Cyber Security Alert",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Estrepellendus soluta dolorem",
    },  
    {
      icon: ArticleOutlinedIcon,
      title: "Managed Web Application ",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Estrepellendus soluta dolorem",
    },
  ];
  return (
    <div className="HomeBodyPart2-main-container">
      <img
        src={saferworld2}
        style={{
          width: "38vw",
          marginRight: "2vw",
        }}
        alt=""
      />
      <div className="HomeBodyPart2-main-container-box">
        <div className="body-headings">
          We Create A Safer Virtual World For Your Future
        </div>
        <text
          style={{
            borderBottom: "1px solid var(--inputBColor)",
            paddingBottom: "2vw",
          }}
        >
          Lorem ipsum dolor sit amet consectetur adipiscing elit. Adipiscing
          eleifend dictum potenti mattis viverra. Eget quam lacus enim porttitor
          bibendum elit dui nisl.
        </text>
        <div className="HomeBodyPart2-bottompart">
          <div>
            <h1
              style={{
                fontWeight: "700",
                fontSize: "1.8vw",
                color: "white",
                letterSpacing: "0vw",
              }}
            >
              Our misson
            </h1>
            <text>
              Lorem ipsum dolor sit amet consectetur adipiscing elit. Adipisc
              ing eleifend dictum pot nti.
            </text>
          </div>
          <div>
            <h1
              style={{
                fontWeight: "700",
                fontSize: "1.8vw",
                color: "white",
                letterSpacing: "0vw",
              }}
            >
              Our misson
            </h1>
            <text>
              Lorem ipsum dolor sit amet consectetur adipiscing elit. Adipisc
              ing eleifend dictum pot nti.
            </text>
          </div>
        </div>
        <div
          className="button"
          style={{
            width: "18vw",
            marginTop: "2vw",
            backgroundColor: "black",
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
          Know more about us
        </div>
      </div>
      <div className="HomeBodyPart2-bottom-box">
        <div
          style={{
            width: "73%",
            marginLeft: "15%",
            marginTop: "4vw",
            textAlign: "center",
          }}
        >
          <div className="body-headings">
            You Get Complete Website Security From Us <br></br>
          </div>
          <text>
            Lorem ipsum dolor sit amet consectetur adipiscing elit. Adipiscing
            eleifend dictum potenti mattis viverra eget quam lacus enim
            porttitor bibendum elit dui nisl.
          </text>
        </div>
      </div>
      <div
        className="homebody-boxes1"
        style={{
          marginLeft: "2vw",
          marginTop: "6vw",
        }}
      >
        {arr2.map((item, index) => {
          return <HomePart2Component key={index} item={item} />;
        })}
      </div>
    </div>
  );
};

export default HomeBodyPart2;
