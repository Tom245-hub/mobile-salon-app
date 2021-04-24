import React, { useState } from "react";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSignInAlt,
  faChevronDown,
  faTimes,
  faMapMarkerAlt,
} from "@fortawesome/free-solid-svg-icons";

import styled from "styled-components";

import TopBar from "./sections/TopBar";
import UserBox from "./sections/UserBox";
import CityBox from "./sections/CityBox";
import TopMenu from "./sections/TopMenu";

const Container = styled.header`
  z-index: 105;
`;

const Header = () => {
  const [activeSubmenu, setActiveSubmenu] = useState(0);
  const [city, setCity] = useState();

  const [activeTopBar, setActiveTopBar] = useState(false);

  const handleMouseEnter = (id) => {
    setActiveSubmenu(id);
  };

  const handleMouseLeave = () => {
    setActiveSubmenu(0);
  };

  return (
    // <Container className="container-fluid container-header bg-light position-absolute top-0">
    <Container className="container-fluid container-header bg-light ">
      <TopBar
        activeTopBar={activeTopBar}
        setActiveTopBar={setActiveTopBar}
        city={city}
        setCity={setCity}
      />

      <div className="row row-header-nav position-relative">
        <div className="col-2 d-flex flex-row align-items-center">
          <Link to="/">
            <img
              className="img-fluid"
              src="/img/logotyp_symbol_white.png"
              alt="mobile_salon_logo"
            />
          </Link>
        </div>

        <div className="col-6 d-flex flex-row justify-content-center align-items-center position-static">
          <TopMenu
            handleMouseEnter={handleMouseEnter}
            activeSubmenu={activeSubmenu}
            setActiveSubmenu={setActiveSubmenu}
            handleMouseLeave={handleMouseLeave}
          />
        </div>

        <div className="col-2 d-flex flex-row align-items-center">
          <CityBox
            city={city}
            activeTopBar={activeTopBar}
            setActiveTopBar={setActiveTopBar}
          />
        </div>

        <div className="col-2 d-flex flex-row align-items-center">
          <UserBox />
        </div>
      </div>
    </Container>
  );
};

export default Header;
