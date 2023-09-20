import React from "react";
import "./about.css";
import aboutimg from "./aboutimg.jpg";
export const About = () => {
  return (
    <div className="aboutcont">
      <div className="aboutimg">
        <img src={aboutimg} alt="" />
      </div>
      <div className="abouttext">
        <h1>Hey, Welcome to Parkitup</h1>
        <p>
          you can easily find available parking spaces in real-time using
          parkitup, reserve a spot in advance, and navigate directly to the
          parking location, saving time and reducing frustration.
        </p>
        <p>
          The centralized management system allows operators to monitor parking
          occupancy, track revenue, and efficiently manage maintenance needs.
          This helps optimize parking operations, improve revenue generation,
          and enhance overall facility management.
        </p>
        <p>
          Parkitup provides valuable data on parking utilization, traffic
          patterns, and revenue generation. This information can be used to make
          informed decisions about parking infrastructure, optimize traffic
          flow, and improve urban planning.
        </p>
      </div>
    </div>
  );
};
