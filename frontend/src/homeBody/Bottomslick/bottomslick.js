import React from "react";
import Slider from "react-slick";
import "./bottomslick.css";
import news4 from "../../images/news4.jpg";
import axios from "axios";
import { useState, useEffect } from "react";




const Bottomslick = () => {
  const Url = "http://localhost:1337";
  const [slickData, setSlickData] = useState([]);
  const FetchData = async () => {
    try {
      const res = await axios.get(`${Url}/api/home-blogs?populate=image`);
      setSlickData(res.data.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    FetchData();
  }, []);

  const settings = {
    arrows: false,
    dots: false,
    infinite: true,
    slidesToShow: 3.3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 4000,
    cssEase: "linear",
  };
  return (
    <div
      style={{
        boxSizing: "border-box",
        padding: "",
        height: "30vw",
      }}
    >
      <Slider
        {...settings}
        style={{
          width: "85vw",
          marginLeft: "10vw",
          position: "relative",
        }}
      >
        {slickData?.map((item) => {
          const { attributes, id } = item;
          const { body, title, image } = attributes;
          return (
            <div key={id}>
              <div className="home-bottom-slider-box">
                <div
                  style={{
                    overflow: "hidden",
                    width: "20vw",
                    height: "15vw",
                    marginBottom: "1vw",
                  }}
                >
                  <img
                    src={`${Url}${image.data.attributes.url}`}
                    style={{
                      width: "20vw",
                      display: "block",
                      marginLeft: " auto",
                      marginRight: "auto",
                    }}
                    alt=""
                  />
                </div>

                <div
                  style={{
                    fontSize: "1.5vw",
                    color: "white",
                    fontWeight: "700",
                    marginBottom: "1vw",
                  }}
                >
                  {title}
                </div>
                <text>{body}</text>
              </div>
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default Bottomslick;

{
  /* <div>
  <div className="home-bottom-slider-box">
    <img
      src={news4}
      style={{
        width: "20vw",
        marginBottom: "1vw",
      }}
      alt=""
    />
    <div
      style={{
        fontSize: "1.5vw",
        color: "white",
        fontWeight: "700",
        marginBottom: "1vw",
      }}
    >
      Lorem ipsum dolor sit amet conetur adipisicing elit.
    </div>
    <text>
      Lorem ipsum dolor sit amet consectetur adipisicing elit.
      Asperiores voluptatem molestiae, sed{" "}
    </text>
  </div>
</div>
<div>
  <div className="home-bottom-slider-box">
    <img
      src={news4}
      style={{
        width: "20vw",
        marginBottom: "1vw",
      }}
      alt=""
    />
    <div
      style={{
        fontSize: "1.5vw",
        color: "white",
        fontWeight: "700",
        marginBottom: "1vw",
      }}
    >
      Lorem ipsum dolor sit amet conetur adipisicing elit.
    </div>
    <text>
      Lorem ipsum dolor sit amet consectetur adipisicing elit.
      Asperiores voluptatem molestiae, sed{" "}
    </text>
  </div>
</div>
<div>
  <div className="home-bottom-slider-box">
    <img
      src={news4}
      style={{
        width: "20vw",
        marginBottom: "1vw",
      }}
      alt=""
    />
    <div
      style={{
        fontSize: "1.5vw",
        color: "white",
        fontWeight: "700",
        marginBottom: "1vw",
      }}
    >
      Lorem ipsum dolor sit amet conetur adipisicing elit.
    </div>
    <text>
      Lorem ipsum dolor sit amet consectetur adipisicing elit.
      Asperiores voluptatem molestiae, sed{" "}
    </text>
  </div>
</div>
<div>
  <div className="home-bottom-slider-box">
    <img
      src={news4}
      style={{
        width: "20vw",
        marginBottom: "1vw",
      }}
      alt=""
    />
    <div
      style={{
        fontSize: "1.5vw",
        color: "white",
        fontWeight: "700",
        marginBottom: "1vw",
      }}
    >
      Lorem ipsum dolor sit amet conetur adipisicing elit.
    </div>
    <text>
      Lorem ipsum dolor sit amet consectetur adipisicing elit.
      Asperiores voluptatem molestiae, sed{" "}
    </text>
  </div>
</div> */
}
