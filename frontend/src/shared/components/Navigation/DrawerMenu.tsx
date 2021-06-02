import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faTimes } from "@fortawesome/free-solid-svg-icons";
import { StyledDrawerMenu } from "./DrawerMenu.css";

interface DrawerMenuProps {
  isOpenDrawerMenu: boolean;
  closeDrawerMenu: () => void;
}

const DrawerMenu: React.FC<DrawerMenuProps> = ({ isOpenDrawerMenu, closeDrawerMenu }) => {
  const [isEnterSlide, setIsEnterSlide] = useState(false);
  console.log(isEnterSlide);

  useEffect(() => {
    setTimeout(() => {
      setIsEnterSlide((prev) => !prev);
    }, 10);
  }, [isOpenDrawerMenu]);

  const content = (
    <StyledDrawerMenu isEnterSlide={isEnterSlide}>
      <a onClick={closeDrawerMenu}>
        <FontAwesomeIcon icon={faTimes} />
      </a>

      <ul>
        <li>
          <NavLink to='/uslugi'>
            usługi <FontAwesomeIcon icon={faChevronDown} />
          </NavLink>
        </li>
        <li>
          <NavLink to='/stylistki'>
            stylistki <FontAwesomeIcon icon={faChevronDown} />
          </NavLink>
        </li>
        <li>
          <NavLink to='/blog'>
            blog <FontAwesomeIcon icon={faChevronDown} />
          </NavLink>
        </li>
        <li>
          <NavLink to='/kontakt'>
            kontakt <FontAwesomeIcon icon={faChevronDown} />
          </NavLink>
        </li>
      </ul>
    </StyledDrawerMenu>
  );

  return ReactDOM.createPortal(
    content,
    document.getElementById("drawer-hook") as HTMLElement
  );
};

export default DrawerMenu;
