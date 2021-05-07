import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import { StoreContext } from "../../../store/StoreProvider";

import TopBar from "./sections/TopBar";
import UserBox from "./sections/UserBox";
import CityBox from "./sections/CityBox";
import TopMenu from "./sections/TopMenu";
import ContainerHeader from "../../components/ContainerHeader";

const Header = () => {
  const { user } = useContext(StoreContext);
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
    <ContainerHeader>
      {!user && <TopBar activeTopBar={activeTopBar} setActiveTopBar={setActiveTopBar} city={city} setCity={setCity} />}

      <div className='row mx-0 position-relative'>
        <div className='col-2 d-flex flex-row align-items-center'>
          <Link to='/'>
            <img className='img-fluid' src='/img/logotyp_symbol_white.png' alt='mobile_salon_logo' />
          </Link>
        </div>

        {!user && (
          <>
            <div className='col-6 d-flex flex-row justify-content-center align-items-center position-static'>
              <TopMenu handleMouseEnter={handleMouseEnter} activeSubmenu={activeSubmenu} setActiveSubmenu={setActiveSubmenu} handleMouseLeave={handleMouseLeave} />
            </div>

            <div className='col-2 d-flex flex-row align-items-center'>
              <CityBox city={city} activeTopBar={activeTopBar} setActiveTopBar={setActiveTopBar} />
            </div>

            <div className='col-2 d-flex flex-row align-items-center'>
              <UserBox />
            </div>
          </>
        )}
      </div>
    </ContainerHeader>
  );
};

export default Header;
