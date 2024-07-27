import React from 'react'
import "./styles.css";
import { NavLink } from 'react-router-dom';

const Homepage = () => {
  return (
    <div className='home'>
      <div className='navbar'>
        <div className='head'>Notes Making</div>
        <div className='links'>
          <NavLink to="/signup">Sign Up</NavLink>
          <NavLink to="/login">Login</NavLink>
        </div>
      </div>
    </div>
  )
}

export default Homepage