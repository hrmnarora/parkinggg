import React from "react";
import logo from "../assets/logo.png";
import "./Navbar.css";
import { NavLink } from "react-router-dom";

export const Navbar = () => {
  return (
    <div className="maincont">
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>
      <div className="links">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/booking">Book Now</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink className="serverlink" to="/server">Server</NavLink>
      </div>
      {/* <div className="menu-icon">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="1em"
          viewBox="0 0 448 512"
        >
          <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" />
        </svg>
      </div> */}
      
    </div>
  );
};
