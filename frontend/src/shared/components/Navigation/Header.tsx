import React, { useState } from "react";
import { useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

import { RootState } from "../../data/reducers/rootReducers";

import TopBar from "./CityForm";
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

  const handleMouseEnter = (id: number) => {
    setActiveSubmenu(id);
  };

  const handleMouseLeave = (id: number) => {
    setActiveSubmenu(id);
  };

  ///////////////////
  const [isOpenPortal, setIsOpenPortal] = useState<boolean>(false);
  const [isEnterSlide, setIsEnterSlide] = useState<boolean>(false);

  const toggleOpenPortal = () => {
    if (isOpenPortal) {
      setIsEnterSlide(false);
      setTimeout(() => {
        setIsOpenPortal(false);
      }, 300);
    } else {
      setIsOpenPortal(true);

      setTimeout(() => {
        setIsEnterSlide(true);
      }, 50);
    }
  };
  ///////////////////////
  return (
    <>
      {isOpenPortal && (
        <>
          <Backdrop onClick={toggleOpenPortal} />
          <DrawerMenu
            isEnterSlide={isEnterSlide}
            toggleOpenDrawerMenu={toggleOpenPortal}
          />
        </>
      )}

      <StyledContainerHeader>
        <StyledLogoLink href='/'>
          <img src='/img/logotyp_symbol_white.png' />
        </StyledLogoLink>
        <TopMenu
          activeSubmenu={activeSubmenu}
          setActiveSubmenu={setActiveSubmenu}
          handleMouseEnter={handleMouseEnter}
          handleMouseLeave={handleMouseLeave}
        />

        <StyledLink onClick={toggleOpenPortal}>
          <FontAwesomeIcon icon={faBars} />
        </StyledLink>

        <CityBox />

        <UserBox />
      </StyledContainerHeader>
    </>
  );
};

export default Header;
