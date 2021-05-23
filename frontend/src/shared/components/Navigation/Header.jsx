import React, { useState, useContext } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

import { StoreContext } from "../../store/StoreProvider";

import TopBar from "./TopBar";
import UserBox from "./UserBox";
import CityBox from "./CityBox";
import TopMenu from "./TopMenu";
import LogoBox from "./LogoBox";
import ContainerShowMobile from "../UIELements/ContainerShowMobile";
import ContainerHideMobile from "../UIELements/ContainerHideMobile";

import DrawerMenu from "./DrawerMenu";

const StyledContainerHeader = styled.div`
  z-index: 105;
`;

const Header = () => {
  const { user } = useContext(StoreContext);
  const [activeSubmenu, setActiveSubmenu] = useState(0);
  const [city, setCity] = useState();
  const [isOpenDrawerMenu, setIsOpenDrawerMenu] =
    useState(false);
  const [activeTopBar, setActiveTopBar] = useState(false);

  const handleMouseEnter = (id) => {
    setActiveSubmenu(id);
  };

  const handleMouseLeave = () => {
    setActiveSubmenu(0);
  };

  const handleTopMenuMobileOpen = () => {
    setIsOpenTopMenuMobile(true);
  };

  const handleTopMenuMobilClose = () => {
    setIsOpenTopMenuMobile(false);
  };
  // <Container className="container-fluid container-header bg-light position-absolute top-0">
  return (
    <>
      {isOpenDrawerMenu && (
        <DrawerMenu
          handleTopMenuMobilClose={handleTopMenuMobilClose}
        />
      )}
      <StyledContainerHeader className="className='container-fluid bg-light">
        {!user && (
          <TopBar
            activeTopBar={activeTopBar}
            setActiveTopBar={setActiveTopBar}
            city={city}
            setCity={setCity}
          />
        )}

        <div className='row mx-0 position-relative'>
          <div className='col-2 col-md-2 d-flex flex-row align-items-center'>
            <LogoBox />
          </div>

          {!user && (
            <>
              <div className='col-1 col-md-6 d-flex flex-row justify-content-center align-items-center position-static'>
                <ContainerHideMobile>
                  <TopMenu
                    handleMouseEnter={handleMouseEnter}
                    activeSubmenu={activeSubmenu}
                    setActiveSubmenu={setActiveSubmenu}
                    handleMouseLeave={handleMouseLeave}
                  />
                </ContainerHideMobile>

                <ContainerShowMobile>
                  <span className='mx-2'>
                    <a onClick={handleTopMenuMobileOpen}>
                      <FontAwesomeIcon icon={faBars} />
                    </a>
                  </span>
                </ContainerShowMobile>
              </div>

              <div className='col-3 col-md-2 d-flex flex-row align-items-center'>
                <CityBox
                  city={city}
                  activeTopBar={activeTopBar}
                  setActiveTopBar={setActiveTopBar}
                />
              </div>

              <div className='col-6 col-md-2 d-flex flex-row align-items-center'>
                <UserBox />
              </div>
            </>
          )}
        </div>
      </StyledContainerHeader>
    </>
  );
};

export default Header;
