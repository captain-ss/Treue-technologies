import React from "react";
import Slider from "react-slick";
import "./homeCarousal.css";
import StarIcon from "@mui/icons-material/Star";
import { useState, useEffect } from "react";
import axios from "axios";
import Feedpana from "../../images/Feedpana.svg";
import appstorebutton from "../../images/appstorebutton.svg";
import googleplaybutton from "../../images/googleplaybutton.svg";

const CaraousalComponent = ({ item }) => {
  const Url = "http://localhost:1337";
  const { appCategory, title, shortDesc, desc, mainImage } = item.attributes; 
  return (
    <div
      style={{
        display: "flex",
      }}
    >
      <div
        className="homeCaraousal-div1"
        style={{
          width: "50vw",
        }}
      >
        <img
          style={{
            width: "40vw",
            marginLeft: "4vw",
          }}
          src={`${Url}${mainImage.data.attributes.url}`}
          alt=""
        />
      </div>
      <div className="homeCaraousal-div2">
        <div
          style={{
            fontSize: "1.5vw",
            textTransform: "capitalize",
          }}
        >
          {appCategory}
        </div>
        <div
          style={{
            fontSize: "2vw",
            textTransform: "capitalize",
          }}
        >
          {title}
        </div>
        <div
          style={{
            fontSize: "1.5vw",
            textTransform: "capitalize",
          }}
        >
          {shortDesc}{" "}
        </div>
        <div
          style={{
            fontSize: "1.3vw",
          }}
        >
          {" "}
          {desc}
        </div>
        <div
          style={{
            fontSize: "1.6vw",
          }}
        >
          Tech Stack
        </div>

        <div></div>
        <div
          style={{
            display: "flex",
          }}
        >
          <img
            style={{
              height: "3.7vw",
              marginRight: "1vw",
            }}
            src={appstorebutton}
            alt=""
          />
          <img
            style={{
              height: "3.7vw",
              marginRight: "1vw",
            }}
            src={googleplaybutton}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

const HomeCarousal = () => {
  const arr = [1, 3, 4, 5, 5];

  const Url = "http://localhost:1337";
  const [slickData, setSlickData] = useState([]);
  const FetchData = async () => {
    try {
      const res = await axios.get(`${Url}/api/home-carousels?populate=*`);
      setSlickData(res.data.data);
      console.log(res.data.data);
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
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    speed: 2000,
    autoplaySpeed: 4000,
    cssEase: "linear",
  };

  return (
    <div
    style={{
      margin:"4vw 0vw ",
      fontFamily:"var(--font1)"
    }}
    >
      <Slider
        {...settings}
        style={{
          width: "94vw",
          height: "45vw",
          marginLeft: "2vw",
          color: "white",
          marginTop: "2vw",
          boxSizing: "border-box",
          padding: "2vw",

          paddingTop: "4vw",

          backgroundImage:
            "linear-gradient(to right, #0f0c29, #302b63, #24243e)",
        }}
      >
        {slickData?.map((item, index) => {
          return <CaraousalComponent key={index} item={item} />;
        })}
      </Slider>
    </div>
  );
};

export default HomeCarousal;
