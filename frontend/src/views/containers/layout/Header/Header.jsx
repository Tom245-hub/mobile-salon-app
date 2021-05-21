import React, { useState, useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

import { StoreContext } from "../../../../store/StoreProvider";

import TopBar from "./sections/TopBar";
import UserBox from "./sections/UserBox";
import CityBox from "./sections/CityBox";
import TopMenu from "./sections/TopMenu";
import LogoBox from "./sections/LogoBox";
import ContainerHeader from "../../../components/ContainerHeader";
import ContainerShowMobile from "../../../components/ContainerShowMobile";
import ContainerHideMobile from "../../../components/ContainerHideMobile";
import TopMenuMobile from "./sections/TopMenuMobile";

const Header = () => {
  const { user } = useContext(StoreContext);
  const [activeSubmenu, setActiveSubmenu] = useState(0);
  const [city, setCity] = useState();
  const [isOpenTopMenuMobile, setIsOpenTopMenuMobile] = useState(false);

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
      {isOpenTopMenuMobile && <TopMenuMobile handleTopMenuMobilClose={handleTopMenuMobilClose} />}
      <ContainerHeader>
        {!user && <TopBar activeTopBar={activeTopBar} setActiveTopBar={setActiveTopBar} city={city} setCity={setCity} />}

        <div className='row mx-0 position-relative'>
          <div className='col-2 col-md-2 d-flex flex-row align-items-center'>
            <LogoBox />
          </div>

          {!user && (
            <>
              <div className='col-1 col-md-6 d-flex flex-row justify-content-center align-items-center position-static'>
                <ContainerHideMobile>
                  <TopMenu handleMouseEnter={handleMouseEnter} activeSubmenu={activeSubmenu} setActiveSubmenu={setActiveSubmenu} handleMouseLeave={handleMouseLeave} />
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
                <CityBox city={city} activeTopBar={activeTopBar} setActiveTopBar={setActiveTopBar} />
              </div>

              <div className='col-6 col-md-2 d-flex flex-row align-items-center'>
                <UserBox />
              </div>
            </>
          )}
        </div>
      </ContainerHeader>
    </>
  );
};

export default Header;
