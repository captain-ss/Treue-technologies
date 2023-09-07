import React from "react";

import "./navbar.css";
import axios from "axios";
import SearchIcon from "@mui/icons-material/Search";
import { useState } from "react";
import image39 from "../../images/image39.png";
import image40 from "../../images/image40.png";
import image41 from "../../images/image41.png";
import image2 from "../../images/image2.svg";
import image3 from "../../images/image3.svg";
import image4 from "../../images/image4.svg";
import image5 from "../../images/image5.svg";
const Navbar = () => {
  const Url = "http://localhost:1337/api";
  const [hoverBtn, setHoverBtn] = useState(true);
  const [popupStates, setPopupStates] = useState("");
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [country, setCountry] = useState("");
  const [phone, setPhone] = useState("");
  const [company, setCompany] = useState("");
  const [serviceIntrested, setServiceIntrested] = useState("");
  const [budget, setBudget] = useState("");
  const [textArea, setTextArea] = useState("");
  const [file, setFile] = useState();
  const [popupState, setPopupState] = useState(true);

  const formSubmitHandler = async (e) => {
    e.preventDefault();
    const fd = new FormData();
    fd.append("data",JSON.stringify( {
      fullName: fullName,
      eMail: email,
      country: country,
      phone: phone,
      company: company,
      intrestedService: serviceIntrested,
      budget,
      message: textArea,
    }));
    fd.append(`files.uploadDocuments`,file)

    console.log(fd);
    try {
      const res = await axios.post(`${Url}/request-quotes`, fd, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="Main-navbar">
      <div>
        <img src="https://pisa-react.envytheme.com/img/logo.png" alt="" />
      </div>
      <div className="Main-navbar-mid-box">
        <div
          style={{
            position: "relative",
            top: ".7vw",
          }}
          className="Main-navbar-mid-box-div"
        >
          Home
        </div>
        <div
          style={{
            position: "relative",
            top: ".7vw",
          }}
          className="Main-navbar-mid-box-div"
        >
          About
        </div>
        <div
          onMouseEnter={() => {
            setPopupStates(1);
          }}
          onMouseLeave={() => {
            setPopupStates("");
          }}
          style={{
            position: "relative",
            top: ".7vw",
          }}
          className="Main-navbar-mid-box-div"
        >
          Pages{" "}
          <div
            className="Navbar-popups"
            style={{
              transform: popupStates === 1 ? "scaleX(1)" : "scaleX(0)",
            }}
          >
            <div>Pricing</div>
            <div>Testimonal</div>
            <div>Team</div>
            <div>FAQ</div>
            <div>User</div>
            <div>coming Soon</div>
            <div>404 error page</div>
            <div>Private Policy</div>
            <div>terms & condition</div>
          </div>
          <div
            style={{
              transform: "rotate(90deg)",
              width: "1.5vw",
              position: "relative",
              bottom: ".2vw",
            }}
          >
            
          </div>
        </div>
        <div
          style={{
            position: "relative",
            top: ".7vw",
          }}
          onMouseEnter={() => {
            setPopupStates(2);
          }}
          onMouseLeave={() => {
            setPopupStates("");
          }}
          className="Main-navbar-mid-box-div"
        >
          Services{" "}
          <div
            className="Navbar-popups"
            style={{
              transform: popupStates === 2 ? "scaleX(1)" : "scaleX(0)",
            }}
          >
            <div>Service Style 1</div>
            <div>Service Style 2</div>
            <div>Service Style 3</div>
            <div>Service details</div>
          </div>
          <div
            style={{
              transform: "rotate(90deg)",
              width: "1.5vw",
              position: "relative",
              bottom: ".2vw",
            }}
          >
            
          </div>
        </div>
        <div
          style={{
            position: "relative",
            top: ".7vw",
          }}
          onMouseEnter={() => {
            setPopupStates(3);
          }}
          onMouseLeave={() => {
            setPopupStates("");
          }}
          className="Main-navbar-mid-box-div"
        >
          Blog{" "}
          <div
            className="Navbar-popups"
            style={{
              transform: popupStates === 3 ? "scaleX(1)" : "scaleX(0)",
            }}
          >
            <div>Blog grid </div>
            <div>Blog left slide bar </div>
            <div>Blog right slide bar </div>
            <div>Blog Detail </div>
          </div>
          <div
            style={{
              transform: "rotate(90deg)",
              width: "1.5vw",
              position: "relative",
              bottom: ".2vw",
            }}
          >
            
          </div>
        </div>
        <div
          style={{
            position: "relative",
            top: ".7vw",
          }}
          className="Main-navbar-mid-box-div"
        >
          Contact
        </div>
      </div>
      <div
        style={{
          display: "flex",
          alignItem: "center",
        }}
      >
        <SearchIcon
          fontSize="large"
          style={{
            marginRight: "1vw",
            marginTop: ".4vw",
          }}
        />
        <div
          className="fixed-container"
          style={{
            fontFamily: "var(--font1)",
            color: "black",
            fontWeight: "600",
            display: popupState ? "none" : "flex",
          }}
        >
          <div
            className="fixed-container-div1"
            style={{
              width: "30vw",
              height: "100vh",
              display: "flex",
              flexWrap: "wrap",
              fontFamily: "var(--font1)",
              fontWeight: "600",
              justifyContent: "space-evenly",
              color: "black",
              backgroundColor: "var(--formBColor)",
            }}
          >
            <div
              style={{
                width: "28vw",
                textAlign: "center",
              }}
            >
              Recognise by
            </div>
            <img src={image39} alt="" />
            <img src={image40} alt="" />
            <img src={image41} alt="" />
            <div
              style={{
                width: "28vw",
                textAlign: "center",

                marginTop: "2vw",
              }}
            >
              Our Clients
            </div>
            <img src={image2} alt="" />
            <img src={image3} alt="" />
            <img src={image4} alt="" />
            <img src={image5} alt="" />
          </div>
          <div className="fixed-container-div2">
            {" "}
            <div
              style={{
                fontSize: "2vw",
                display: "flex",
                justifyContent: "space-between",
                width: "68vw",
                height: "fit-content",
              }}
            >
              Request a Quote{" "}
              <span
                style={{
                  transform: "rotate(45deg)",
                  cursor: "pointer",
                }}
                onClick={() => {
                  setPopupState(!popupState);
                }}
              >
                +
              </span>
            </div>
            <form>
              <div
                style={{
                  width: "33vw",
                  marginTop: "1vw",
                }}
              >
                <div
                  style={{
                    marginBottom: ".5vw",
                  }}
                >
                  Full Name{" "}
                  <span
                    style={{
                      color: "red",
                    }}
                  >
                    *
                  </span>
                </div>
                <input
                  style={{
                    width: "33vw",
                  }}
                  onChange={(e) => {
                    setFullName(e.target.value);
                  }}
                  type="text"
                  placeholder="Enter Your Name"
                  required
                />
              </div>
              <div
                style={{
                  width: "33vw",
                  marginTop: "1vw",
                }}
              >
                <div
                  style={{
                    marginBottom: ".5vw",
                  }}
                >
                  Email{" "}
                  <span
                    style={{
                      color: "red",
                    }}
                  >
                    *
                  </span>
                </div>
                <input
                  style={{
                    width: "33vw",
                  }}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  type="text"
                  placeholder="Enter Your Email Address"
                  required
                />
              </div>
              <div
                style={{
                  width: "33vw",
                  marginTop: "1vw",
                }}
              >
                <div
                  style={{
                    marginBottom: ".5vw",
                  }}
                >
                  Country{" "}
                  <span
                    style={{
                      color: "red",
                    }}
                  >
                    *
                  </span>
                </div>
                <input
                  style={{
                    width: "33vw",
                  }}
                  type="text"
                  onChange={(e) => {
                    setCountry(e.target.value);
                  }}
                  placeholder="India +91"
                  required
                />
              </div>
              <div
                style={{
                  width: "33vw",
                  marginTop: "1vw",
                }}
              >
                <div
                  style={{
                    marginBottom: ".5vw",
                  }}
                >
                  Phone{" "}
                  <span
                    style={{
                      color: "red",
                    }}
                  >
                    *
                  </span>
                </div>
                <input
                  style={{
                    width: "33vw",
                  }}
                  type="text"
                  onChange={(e) => {
                    setPhone(e.target.value);
                  }}
                  placeholder="Enter Your Phone Number"
                  required
                />
              </div>
              <div
                style={{
                  width: "33vw",
                  marginTop: "1vw",
                }}
              >
                <div
                  style={{
                    marginBottom: ".5vw",
                  }}
                >
                  Company{" "}
                </div>
                <input
                  style={{
                    width: "33vw",
                  }}
                  onChange={(e) => {
                    setCompany(e.target.value);
                  }}
                  type="text"
                  placeholder="Enter Your Company Name"
                />
              </div>
              <div
                style={{
                  width: "33vw",
                  marginTop: "1vw",
                }}
              >
                <div
                  style={{
                    marginBottom: ".5vw",
                  }}
                >
                  Service Intrested{" "}
                  <span
                    style={{
                      color: "red",
                    }}
                  >
                    *
                  </span>
                </div>
                <select
                  onChange={(e) => {
                    setServiceIntrested(e.target.value);
                  }}
                  style={{
                    width: "33vw",
                  }}
                >
                  <option value="Web development">Web Development </option>
                  <option value="Digital markettin">Digital Marketing</option>
                  <option value="App development">App Development</option>
                  <option value="Ecommerce development">
                    Ecommerce Development
                  </option>
                </select>
              </div>
              <div
                style={{
                  width: "33vw",
                  marginTop: "1vw",
                }}
              >
                <div
                  style={{
                    marginBottom: ".5vw",
                  }}
                >
                  Budget{" "}
                  <span
                    style={{
                      color: "red",
                    }}
                  >
                    *
                  </span>
                </div>
                <select
                  onChange={(e) => {
                    setBudget(e.target.value);
                  }}
                  style={{
                    width: "33vw",
                  }}
                >
                  <option value="500-100$">500-100$ </option>
                  <option value="1000-2000$">1000-2000$</option>
                  <option value="3000$-5000$">3000$-5000$</option>
                  <option value="5000$+">5000$+</option>
                </select>
              </div>
              <div
                style={{
                  width: "33vw",
                  marginTop: "1vw",
                }}
              >
                <div
                  style={{
                    marginBottom: ".5vw",
                  }}
                >
                  Upload Documents{" "}
                  <span
                    style={{
                      color: "red",
                    }}
                  >
                    *
                  </span>
                </div>
                <input
                  style={{
                    width: "33vw",
                    backgroundColor: "var(--inputBColor)",
                    border: "2px solid var(--borderColor1)",
                    color: "var(--inputPColor))",
                  }}
                  type="file"
                  onChange={(e) => {
                    setFile(e.target.files[0]);
                  }}
                />
              </div>
              <div
                style={{
                  width: "67vw",
                  marginTop: "1vw",
                }}
              >
                <div
                  style={{
                    marginBottom: ".5vw",
                  }}
                >
                  Upload Documents{" "}
                  <span
                    style={{
                      color: "red",
                    }}
                  >
                    *
                  </span>
                </div>
                <textarea
                  name="message"
                  style={{
                    width: "67vw",
                    height: "5vw",
                  }}
                  onChange={(e) => {
                    setTextArea(e.target.value);
                  }}
                  placeholder="Enter Your Messaege"
                  cols="30"
                  rows="10"
                  required
                ></textarea>
              </div>
              <button
                className="button"
                onClick={(e) => {
                  formSubmitHandler(e);
                }}
                style={{
                  color: "white",
                  backgroundColor: "var(--color1)",
                }}
                type="submit"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
        <div
          className="button"
          style={{
            backgroundColor: "black",
            width: "14vw",
          }}
          onClick={() => {
            setPopupState(!popupState);
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
          Get a Free Quote
        </div>
      </div>
    </div>
  );
};

export default Navbar;
