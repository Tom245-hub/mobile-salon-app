import React, { useState, useContext } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

import { StoreContext } from "../../store/StoreProvider";

import TopBar from "./TopBar";
import UserBox from "./UserBox";
import CityBox from "./CityBox";
import TopMenu from "./TopMenu";

import DrawerMenu from "./DrawerMenu";
import {
  StyledContainerHeader,
  StyledLogoLink,
  StyledLink,
} from "./Header.css";

const Header: React.FC = () => {
  const { isUserLogged } = useContext(StoreContext);
  const [activeSubmenu, setActiveSubmenu] = useState<number>(0);
  const [city, setCity] = useState<string>("");
  const [isOpenDrawerMenu, setIsOpenDrawerMenu] = useState<boolean>(false);
  const [isActiveTopBar, setIsActiveTopBar] = useState<boolean>(false);

  const handleMouseEnter = (id: number) => {
    setActiveSubmenu(id);
  };

  const handleMouseLeave = (id: number) => {
    setActiveSubmenu(id);
  };

  return (
    <>
      {isOpenDrawerMenu && (
        <DrawerMenu setIsOpenDrawerMenu={setIsOpenDrawerMenu} />
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

            <StyledLink onClick={() => setIsOpenDrawerMenu(true)}>
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
