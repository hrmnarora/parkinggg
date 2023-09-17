import React from "react";
import "./home.css"
import mainimage from "./mainimage.png"
import {useNavigate} from "react-router-dom";

export const Home = () => {
  let navigate = useNavigate();

  function handleClick(){
    navigate("/booking")
  }
  return (
    <div className="main">
<div className="heading">
      <h1>
        Lets Book <br />
        Your Parking Slot
      </h1>
      <p>
        Parkitup Provides You to book the Best Parking Slots, <br /> Available at your
        desired Location.
      </p>
      <button onClick={handleClick}>
        Book Now
      </button>
    </div>
    <div className="mainimage">
<img src={mainimage} alt="" />
    </div>
    </div>
    
  );
};
