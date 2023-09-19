import React from 'react'
import logo from "./logo.png";
import './Navbar.css'
export const Navbar = () => {
  return (
    <div className='maincont'>
        <div className="logo">
            <img src={logo} alt="logo" />
        </div>
        <div className="links">
        <a href="/">Home</a>
        <a href="/booking">Book Now</a>
        <a href="/about">About</a>
        <a className='serverlink' href="/server">Server</a>
        </div>
        
    </div>
  )
}
