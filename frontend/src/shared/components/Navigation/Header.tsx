import React, { useState } from "react";
import { useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

import { RootState } from "../../data/reducers/rootReducers";

import TopBar from "./TopBar";
import UserBox from "./UserBox";
import CityBox from "./CityBox";
import TopMenu from "./TopMenu";
import DrawerMenu from "./DrawerMenu";
import Backdrop from "../UIElements/Backdrop";

import { StyledContainerHeader, StyledLogoLink, StyledLink } from "./Header.css";

const Header: React.FC = () => {
  const user = useSelector((state: RootState) => state.user);

  const isUserLogged = false; ////// do poprawy
  // console.log(isUserLogged);

  const [activeSubmenu, setActiveSubmenu] = useState<number>(0);
  const [city, setCity] = useState<string>("");
  const [isActiveTopBar, setIsActiveTopBar] = useState<boolean>(false);

  const handleMouseEnter = (id: number) => {
    setActiveSubmenu(id);
  };

  const handleMouseLeave = (id: number) => {
    setActiveSubmenu(id);
  };

  ///////////////////
  const [isOpenDrawerMenu, setIsOpenDrawerMenu] = useState<boolean>(false);
  const [isEnterSlide, setIsEnterSlide] = useState<boolean>(false);

  const toggleOpenDrawerMenu = () => {
    if (isOpenDrawerMenu) {
      setIsEnterSlide(false);
      setTimeout(() => {
        setIsOpenDrawerMenu(false);
      }, 300);
    } else {
      setIsOpenDrawerMenu(true);

      setTimeout(() => {
        setIsEnterSlide(true);
      }, 50);
    }
  };
  ///////////////////////
  return (
    <>
      {isOpenDrawerMenu && (
        <>
          <Backdrop onClick={toggleOpenDrawerMenu} />
          <DrawerMenu
            isEnterSlide={isEnterSlide}
            toggleOpenDrawerMenu={toggleOpenDrawerMenu}
          />
        </>
      )}

      {!isUserLogged && (
        <TopBar
          isActiveTopBar={isActiveTopBar}
          setisActiveTopBar={setIsActiveTopBar}
          setCity={setCity}
        />
      )}
      <StyledContainerHeader>
        <StyledLogoLink href='/'>
          <img src='/img/logotyp_symbol_white.png' />
        </StyledLogoLink>

        {!isUserLogged && (
          <>
            <TopMenu
              activeSubmenu={activeSubmenu}
              setActiveSubmenu={setActiveSubmenu}
              handleMouseEnter={handleMouseEnter}
              handleMouseLeave={handleMouseLeave}
            />

            <StyledLink onClick={toggleOpenDrawerMenu}>
              <FontAwesomeIcon icon={faBars} />
            </StyledLink>

            <CityBox
              city={city}
              isActiveTopBar={isActiveTopBar}
              setIsActiveTopBar={setIsActiveTopBar}
            />

            <UserBox />
          </>
        )}
      </StyledContainerHeader>
    </>
  );
};

export default Header;
