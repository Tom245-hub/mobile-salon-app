import React from "react";
import { NavLink } from "react-router-dom";

const LogoBox = () => {
  return (
    <NavLink to='/' exact>
      <img className='img-fluid' src='/img/logotyp_symbol_white.png' alt='mobile_salon_logo' />
    </NavLink>
  );
};

export default LogoBox;
