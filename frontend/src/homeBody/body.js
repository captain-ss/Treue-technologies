import React from "react";
import Top1 from "./top1/top1";
import HomeBodyPart2 from "./part2/homeBodyPart2";
import "./body.css";
import { useState } from "react";
import HomebodyBankingC from "./Banking/homebodyBankingC";
import HomeBodyOilGas from "./OilGas/homebodyOilGas";
import HomebodyManufacturing from "./manufacturing/homebodyManufacturing";
import HomeBodyInsurance from "./insurance/homebodyinsurance";
import HomebodyHealth from "./healthcare/homebodyhealth";
import Homebodypart3 from "./part3/homebodypart3";
import Bottomslick from "./Bottomslick/bottomslick";
import { width } from "@mui/system";
import Homebodypart5 from "./part5/homebodypart5";
import Slick1 from "./slick1/slick1";
import features1 from '../images/features1.png'
import features2 from '../images/features2.png'
import features3 from '../images/features3.png'
import HomeCarousal from "./homeCarousal/homeCarousal";
const HomeBoxComponent1 = ({item}) => {
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
          position: "relative",
          zIndex: 2,
        }}
      >
        <img src={item.image} alt="" />
       {item.title}
      </div>
      <text
        style={{
          position: "relative",
          zIndex: 2,
          fontWeight: "700",
          color: hoverState ? "rgb(167, 167, 167)" : "white",
        }}
      >
     {item.text}
      </text>
    </div>
  );
};

const Body = () => {
  const [hoverBtn, setHoverBtn] = useState(true);
  const [hoverBtn1, setHoverBtn1] = useState(true);
  const [hoverBtn2, setHoverBtn2] = useState(true);
  const [hoverBtn3, setHoverBtn3] = useState(true);
  const [hoverBtn4, setHoverBtn4] = useState(true);
  const [clickedState, setClickedState] = useState("1");
  const arr1 = [
    {
      title: "Security",
      image: features1,
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est repellendussoluta dolorem!",
    },
    {
      title: "Security",
      image: features2,
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est repellendussoluta dolorem!",
    },
    {
      title: "Security",
      image: features3,
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est repellendussoluta dolorem!",
    },
  ];
  return (
    <div className="home-topbody-maincontainer">
      <Top1 />
      <div className="homebody-boxes1">
        {arr1.map((item, index) => {
          return <HomeBoxComponent1 item={item} key={index} />;
        })}
      </div>
      <HomeBodyPart2 />
      <div
        style={{
          width: "50vw",
          textAlign: "center",
          marginLeft: "25vw",
        }}
      >
        <div className="body-headings">
          Expert Support To Enhance Your Cyber Defenses
        </div>
        <div
          style={{
            width: "100%",
            display: "flex",
            marginTop: "4vw",
            marginBottom: "4vw",
          }}
        >
          <div
            style={{
              border: "1px solid var(--borderColor1)",
              borderRadius: ".4vw",
              marginRight: "1vw",
            }}
          >
            <div
              className="button2"
              style={{
                width: "10vw",
                backgroundColor:
                  clickedState == 1 ? "var(--button2BColor)" : "",
              }}
              onMouseEnter={() => {
                setHoverBtn(false);
              }}
              onMouseLeave={() => {
                setHoverBtn(true);
              }}
              onClick={() => {
                setClickedState(1);
              }}
            >
              <div
                className="button2-inside"
                style={{
                  transform: !hoverBtn ? "scaleY(1)" : "scaleY(0)",
                }}
              ></div>
              <span
                style={{
                  position: "relative",
                  zIndex: "2",
                }}
              >
                Banking
              </span>
            </div>
          </div>
          <div
            style={{
              border: "1px solid var(--borderColor1)",
              borderRadius: ".4vw",
              marginRight: "1vw",
            }}
          >
            <div
              className="button2"
              style={{
                width: "10vw",
                backgroundColor:
                  clickedState == 2 ? "var(--button2BColor)" : "",
              }}
              onMouseEnter={() => {
                setHoverBtn1(false);
              }}
              onMouseLeave={() => {
                setHoverBtn1(true);
              }}
              onClick={() => {
                setClickedState(2);
              }}
            >
              <div
                className="button2-inside"
                style={{
                  transform: hoverBtn1 ? "scaleY(0)" : "scaleY(1)",
                  // transform:clickedState==2?"scale(1)":"",
                }}
              ></div>
              <span
                style={{
                  position: "relative",
                  zIndex: "2",
                }}
              >
                Manufacturing
              </span>
            </div>
          </div>
          <div
            style={{
              border: "1px solid var(--borderColor1)",
              borderRadius: ".4vw",
              marginRight: "1vw",
            }}
          >
            <div
              className="button2"
              style={{
                width: "10vw",
                backgroundColor:
                  clickedState == 3 ? "var(--button2BColor)" : "",
              }}
              onMouseEnter={() => {
                setHoverBtn2(false);
              }}
              onMouseLeave={() => {
                setHoverBtn2(true);
              }}
              onClick={() => {
                setClickedState(3);
              }}
            >
              <div
                className="button2-inside"
                style={{
                  transform: hoverBtn2 ? "scaleY(0)" : "scaleY(1)",
                }}
              ></div>
              <span
                style={{
                  position: "relative",
                  zIndex: "2",
                }}
              >
                Oil & gas
              </span>
            </div>
          </div>
          <div
            style={{
              border: "1px solid var(--borderColor1)",
              borderRadius: ".4vw",
              marginRight: "1vw",
            }}
          >
            <div
              className="button2"
              style={{
                width: "10vw",
                backgroundColor:
                  clickedState == 4 ? "var(--button2BColor)" : "",
              }}
              onMouseEnter={() => {
                setHoverBtn3(false);
              }}
              onMouseLeave={() => {
                setHoverBtn3(true);
              }}
              onClick={() => {
                setClickedState(4);
              }}
            >
              <div
                className="button2-inside"
                style={{
                  transform: hoverBtn3 ? "scaleY(0)" : "scaleY(1)",
                }}
              ></div>
              <span
                style={{
                  position: "relative",
                  zIndex: "2",
                }}
              >
                Insurance
              </span>
            </div>
          </div>
          <div
            style={{
              border: "1px solid var(--borderColor1)",
              borderRadius: ".4vw",
              marginRight: "1vw",
            }}
          >
            <div
              className="button2"
              style={{
                width: "10vw",
                backgroundColor:
                  clickedState == 5 ? "var(--button2BColor)" : "",
              }}
              onMouseEnter={() => {
                setHoverBtn4(false);
              }}
              onMouseLeave={() => {
                setHoverBtn4(true);
              }}
              onClick={() => {
                setClickedState(5);
              }}
            >
              <div
                className="button2-inside"
                style={{
                  transform: hoverBtn4 ? "scaleY(0)" : "scaleY(1)",
                }}
              ></div>
              <span
                style={{
                  position: "relative",
                  zIndex: "2",
                }}
              >
                Insurance
              </span>
            </div>
          </div>
        </div>
      </div>
      {clickedState == 1 && <HomebodyBankingC />}
      {clickedState == 2 && <HomebodyManufacturing />}
      {clickedState == 3 && <HomeBodyOilGas />}
      {clickedState == 4 && <HomeBodyInsurance />}
      {clickedState == 5 && <HomebodyHealth />}
      <Homebodypart3 />
      <Slick1 />
      <Homebodypart5 />
      <div
        style={{
          textAlign: "center",
          width: "45vw",
          margin: " 3vw 3vw 3vw 27vw",
        }}
      >
        <div
          style={{
            fontSize: "2.5vw",
            fontWeight: "700",
            color: "white",
            marginBottom: "1.5vw",
          }}
        >
          Latest News From Blog
        </div>
        <text>
          Lorem ipsum dolor sit amet consectetur adipiscing elit adipiscing
          eleifend dictum potenti mattis viverra eget quam lacus enim porttitor
          bibendum elit dui nisl.
        </text>
      </div>
      <HomeCarousal/>
      <Bottomslick />
    </div>
  );
};

export default Body;
