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
  StyledMenu,
  StyledSubmenu,
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
            <StyledNavLink
              to='/uslugi'
              onClick={() => setIsOpenServices((prev) => !prev)}
              isOpen={isOpenServices}
            >
              usługi <FontAwesomeIcon icon={faChevronDown} />
            </StyledNavLink>
            <StyledSubmenu isOpen={isOpenServices}>
              <li>
                <Link to='/uslugi/fryzury-slubne'>fryzury ślubne</Link>
              </li>
              <li>
                <Link to='/uslugi/makijaze-slubne'>makijaże ślubne</Link>
              </li>
              <li>
                <Link to='/uslugi/fryzury-okazyjne'>fryzury okazyjne</Link>
              </li>
              <li>
                <Link to='/uslugi/makijaze-okazyjne'>makijaże okazyjne</Link>
              </li>
            </StyledSubmenu>
          </li>
          <li>
            <StyledNavLink
              to='/stylistki'
              onClick={() => setIsOpenStylists((prev) => !prev)}
              isOpen={isOpenStylists}
            >
              stylistki <FontAwesomeIcon icon={faChevronDown} />
            </StyledNavLink>
            <StyledSubmenu isOpen={isOpenStylists}>
              <li>
                <Link to='/'>warszawa</Link>
              </li>
              <li>
                <Link to='/'>kraków</Link>
              </li>
              <li>
                <Link to='/'>wrocław</Link>
              </li>
              <li>
                <Link to='/'>poznań</Link>
              </li>
              <li>
                <Link to='/'>gdańsk</Link>
              </li>
            </StyledSubmenu>
          </li>
          <li>
            <StyledNavLink to='/blog'>
              blog <FontAwesomeIcon icon={faChevronDown} />
            </StyledNavLink>
          </li>
          <li>
            <StyledNavLink to='/kontakt'>
              kontakt <FontAwesomeIcon icon={faChevronDown} />
            </StyledNavLink>
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
