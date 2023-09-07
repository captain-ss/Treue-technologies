import React from "react";
import Slider from "react-slick";
import StarIcon from "@mui/icons-material/Star";
import "./slick.css";
import { useState, useEffect } from "react";
import axios from "axios";

const SlickComponent = ({item}) => {

  const [hoverState, setHoverState] = useState(true);
  const changeState = () => {
    setHoverState(!hoverState);
  };
  

  const {thoughts,name,rating,position}=item.attributes;
  
  
  return (
    <div
    >
      <div
        className="homebody-slick1-box"
        onMouseEnter={changeState}
        onMouseLeave={changeState}
        style={{
          marginRight: "2vw",
        }}
      >
        <div
          style={{
            width: "0vw",
            height: "0vw",
            overflow: "visible",
            position: "relative",
            right: "2vw",
            bottom: "2vw",
          }}
        >
          <div
            className="homebody-hovering"
            style={{
              width: "25vw",
              height: "18vw",
              backgroundColor: "var(--color1)",
              position: "relative",
              right: hoverState ? "25vw" : "0vw",
              zIndex: "1",
            }}
          ></div>
        </div>
        <div
          style={{
            color: "white",
            marginBottom: "1vw",
            fontWeight: "600",
            fontSize: "1.3vw",
            position: "relative",
            zIndex: "2",
          }}
        >
         {thoughts}
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            position: "relative",
            zIndex: "2",
          }}
        >
          <smallHeading
            style={{
              fontSize: "1.4vw",
            }}
          >
            {name}
          </smallHeading>

          <div>
            
            <StarIcon
              style={{
                color: "gold",
                width: "",
              }}
            />
            <StarIcon
              style={{
                color: "gold",
              }}
            />
            <StarIcon
              style={{
                color: "gold",
              }}
            />
            <StarIcon
              style={{
                color: "gold",
              }}
            />
          </div>
        </div>
        <div
          style={{
            color: "var(--color5)",
            fontWeight: "600",
            marginTop: "1vw",
            position: "relative",
            zIndex: "2",
          }}
        >
        {position}
        </div>
      </div>
    </div>
  );
};

const Slick1 = () => {
  // state = {
  //   arr: [1, 2, 3, 4, 5],
  // };

  {
    /* {this.state.arr.map((item) => {
    return <SlickComponent key={item} />;
  })} */
  }

  const Url = "http://localhost:1337";
  
  const [slickData, setSlickData] = useState([]);

  const FetchData = async () => {
    try {
      const res = await axios.get(`${Url}/api/client-reviews`);
      setSlickData(res.data.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    FetchData();
  }, []);
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 4000,
    cssEase: "linear",
  }
  return (
    <div className="homebody-slick1-main">
      <div
        style={{
          width: "48vw",
          marginLeft: "18vw",
          textAlign: "center",
        }}
      >
        <smallHeading>What Client’s Say About Us</smallHeading>
        <br />
        <br />
        <text>
          Lorem ipsum dolor sit amet consectetur adipiscing elit adipiscing
          eleifend dictum potenti mattis viverra eget quam lacus enim porttitor
          bibendum elit dui nisl.
        </text>
      </div>
      <Slider
        {...settings}
        style={{
          width: "82vw",
          height: "20vw",
          marginLeft: "0vw",
          color: "white",
          marginTop: "2vw",
        }}
      >
        {slickData?.map((item) => {
          console.log(item);
          return (
            <div>
              <SlickComponent key={item.id} item={item} />
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default Slick1;
