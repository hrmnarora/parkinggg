import React from "react";

import "./about.css";
import img2 from "./img2.jpg";
import img1 from "./img1.jpg";
import img3 from "./img3.jpg";

export const About = () => {
  return (
    <>
      <div className="aboutcont">
        <div className="aboutimg">
          <img src={img1} alt="" />
        </div>
        <div className="abouttext">
          <h1>Parking Made Easy</h1>
          <p>
            you can easily find available parking spaces in real-time using
            parkitup, reserve a spot in advance, and navigate directly to the
            parking location, saving time and reducing frustration.
          </p>
        </div>
      </div>

      <div className="aboutcont">
      <div className="invert">
        <div className="abouttext">
          <h1>Improve Revenue</h1>
          <p>
            The centralized management system allows operators to monitor
            parking occupancy, track revenue, and efficiently manage maintenance
            needs. This helps optimize parking operations, improve revenue
            generation, and enhance overall facility management.
          </p>
        </div>
        <div className="aboutimg">
          <img src={img2} alt="" />
        </div>
      </div>
        
      </div>
      <div className="aboutcont">
        <div className="paddimp aboutimg">
          <img src={img3} alt="" />
        </div>
        <div className="abouttext">
          <h1 >Optimize Traffic Flow</h1>
          <p>
            Parkitup provides valuable data on parking utilization, traffic
            patterns, and revenue generation. This information can be used to
            make informed decisions about parking infrastructure, optimize
            traffic flow, and improve urban planning.
          </p>
        </div>
      </div>
      <div className="footer">
        Developed by harman
      </div>
    </>
  );
};
