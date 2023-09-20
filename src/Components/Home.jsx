import React from "react";
import "./home.css";
import mainimage from "./mainimage.png";
import { useNavigate } from "react-router-dom";
import video from "./mainvideo.mp4";
import MapComponent from "./MapComponent";

import { useState } from "react";
export const Home = () => {
  let navigate = useNavigate();

  function handleClick() {
    navigate("/booking");
  }
  function handleClick2() {
    navigate("/server");
  }

  const [isDivVisible, setDivVisible] = useState(false);

  const toggleDiv = () => {
    setDivVisible(!isDivVisible);
  };
  const locations = [
    {
      lat : 30.7333,
      lng : 76.7794,
      pricing:50,
      id: 1,
      name: "Nexus Elante Mall",
      totalSlots: 25,
      bookedSlots: [3, 6, 9],
    },
  ];
  return (
    <div className="main">
      <div className="heading">
        <h1>
          Lets Book <br />
          Your Parking Slot
        </h1>
        <p>
          Parkitup Provides You to book the Best Parking Slots, <br /> Available
          at your desired Location.
        </p>
        <div className="mainbtns">
        <button onClick={toggleDiv}>Sign in</button>

        </div>
        
        <div>
          {isDivVisible && (
            <div className="signupslayer show">
              <div className="signups show">
                <button onClick={handleClick} className="loginasuser">
                  Book a Slot
                </button>
                <button onClick={handleClick2} className="loginasserver">
                  Login As Server
                </button>

              </div>
            </div>
          )}
        </div>
      </div>
      <div className="mainimage">
      {/* <MapComponent locations = {locations} /> */}
        {/* <img src={mainimage} alt="mainimage" /> */}
        <video
      src={video}
      autoPlay
      loop
      muted
    />
      </div>
    </div>
  );
};
