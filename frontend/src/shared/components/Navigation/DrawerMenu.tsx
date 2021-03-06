import React, { useState } from "react";
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronDown,
  faMapMarkerAlt,
  faTimes,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { RootState } from "../../data/reducers/rootReducers";
import { closeDrawerMenu } from "../../data/actions/drawerActions";
import { openLoginForm } from "../../data/actions/loginFormActions";
import { openCityForm } from "../../data/actions/cityFormActions";

import Button from "../FormElements/Button";

import {
  StyledDrawerMenu,
  StyledHeader,
  StyledSection,
  StyledFooter,
  StyledLogoLink,
  StyledLink,
  StyledNavLink,
  StyledNavLinkSub,
  StyledMenu,
  StyledSubmenu,
  StyledIcon,
  StyledSubmenuLink,
} from "./DrawerMenu.css";

const DrawerMenu: React.FC = () => {
  const dispatch = useDispatch();
  const isEnterSlide = useSelector((state: RootState) => state.drawerMenu.isEnterSlide);
  const [isOpenServices, setIsOpenServices] = useState<boolean>(false);
  const [isOpenStylists, setIsOpenStylists] = useState<boolean>(false);

  const handleClickLogin = () => {
    dispatch(closeDrawerMenu());
    dispatch(openLoginForm());
  };
  const handleClickCity = () => {
    dispatch(closeDrawerMenu());
    dispatch(openCityForm());
  };

  const content = (
    <StyledDrawerMenu isEnterSlide={isEnterSlide}>
      <StyledHeader>
        <StyledLogoLink href='/'>
          <img src='/img/logotyp_symbol_white.png' />
        </StyledLogoLink>

        <div>
          <StyledLink margin='0 0 0 0.5rem' onClick={handleClickCity}>
            <FontAwesomeIcon icon={faMapMarkerAlt} />
          </StyledLink>
          <StyledLink margin='0 0 0 0.5rem' onClick={() => dispatch(closeDrawerMenu())}>
            <FontAwesomeIcon icon={faTimes} />
          </StyledLink>
        </div>
      </StyledHeader>

      <StyledSection>
        <StyledMenu>
          <li>
            <StyledNavLinkSub
              onClick={() => setIsOpenServices((prev) => !prev)}
              isOpen={isOpenServices}
            >
              us??ugi <FontAwesomeIcon icon={faChevronDown} />
            </StyledNavLinkSub>
            <StyledSubmenu isOpen={isOpenServices}>
              <li>
                <StyledSubmenuLink to='/uslugi/fryzury-slubne'>
                  <StyledIcon src='/icons/fullyblackringhair.svg' />
                  fryzury ??lubne
                </StyledSubmenuLink>
              </li>
              <li>
                <StyledSubmenuLink to='/uslugi/makijaze-slubne'>
                  <StyledIcon src='/icons/mucoffee.svg' />
                  makija??e ??lubne
                </StyledSubmenuLink>
              </li>
              <li>
                <StyledSubmenuLink to='/uslugi/fryzury-okazyjne'>
                  <StyledIcon src='/icons/blacksimplehair.svg' />
                  fryzury okazyjne
                </StyledSubmenuLink>
              </li>
              <li>
                <StyledSubmenuLink to='/uslugi/makijaze-okazyjne'>
                  <StyledIcon src='/icons/musimple.svg' />
                  makija??e okazyjne
                </StyledSubmenuLink>
              </li>
            </StyledSubmenu>
          </li>
          <li>
            <StyledNavLinkSub
              onClick={() => setIsOpenStylists((prev) => !prev)}
              isOpen={isOpenStylists}
            >
              stylistki <FontAwesomeIcon icon={faChevronDown} />
            </StyledNavLinkSub>
            <StyledSubmenu isOpen={isOpenStylists}>
              <li>
                <Link to='/'>warszawa</Link>
              </li>
              <li>
                <Link to='/'>krak??w</Link>
              </li>
              <li>
                <Link to='/'>wroc??aw</Link>
              </li>
              <li>
                <Link to='/'>pozna??</Link>
              </li>
              <li>
                <Link to='/'>gda??sk</Link>
              </li>
            </StyledSubmenu>
          </li>
          <li>
            <StyledNavLink to='/blog'>blog</StyledNavLink>
          </li>
          <li>
            <StyledNavLink to='/kontakt'>kontakt</StyledNavLink>
          </li>
        </StyledMenu>
      </StyledSection>

      <StyledFooter>
        <StyledLink margin='0 0.5rem 0 0' onClick={handleClickLogin}>
          <FontAwesomeIcon icon={faUser} />
          ZALOGUJ
        </StyledLink>

        <Button link='/strefa-klientki/zamowienie'>ZAREZERWUJ</Button>
      </StyledFooter>
    </StyledDrawerMenu>
  );

  return ReactDOM.createPortal(
    content,
    document.getElementById("drawer-hook") as HTMLElement
  );
};

export default DrawerMenu;
