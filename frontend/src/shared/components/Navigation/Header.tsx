import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { RootState } from "../../data/reducers/rootReducers";
import { closeDrawerMenu, openDrawerMenu } from "../../data/actions/drawerActions";

import UserBox from "./UserBox";
import CityBox from "./CityBox";
import TopMenu from "./TopMenu";
import DrawerMenu from "./DrawerMenu";
import Backdrop from "../UIElements/Backdrop";

import { StyledContainerHeader, StyledLogoLink, StyledLink } from "./Header.css";

const Header: React.FC = () => {
  const dispatch = useDispatch();
  const isOpenDrawerMenu = useSelector(
    (state: RootState) => state.drawerMenu.isOpenDrawerMenu
  );

  const user = useSelector((state: RootState) => state.user);

  const [activeSubmenu, setActiveSubmenu] = useState<number>(0);

  const handleMouseEnter = (id: number) => {
    setActiveSubmenu(id);
  };

  const handleMouseLeave = (id: number) => {
    setActiveSubmenu(id);
  };

  if (user.isLogged && user.data.accessLevel === 1) {
    return (
      <StyledContainerHeader>
        <StyledLogoLink href='/'>
          <img src='/img/logotyp_symbol_white.png' />
        </StyledLogoLink>

        <UserBox />
      </StyledContainerHeader>
    );
  } else if (user.isLogged && user.data.accessLevel === 2) {
    return (
      <StyledContainerHeader>
        <StyledLogoLink href='/'>
          <img src='/img/logotyp_symbol_white.png' />
        </StyledLogoLink>

        <UserBox />
      </StyledContainerHeader>
    );
  } else {
    return (
      <>
        {isOpenDrawerMenu && (
          <>
            <Backdrop onClick={() => dispatch(closeDrawerMenu())} />
            <DrawerMenu />
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

          <StyledLink onClick={() => dispatch(openDrawerMenu())}>
            <FontAwesomeIcon icon={faBars} />
          </StyledLink>

          <CityBox />

          <UserBox />
        </StyledContainerHeader>
      </>
    );
  }
};

export default Header;
