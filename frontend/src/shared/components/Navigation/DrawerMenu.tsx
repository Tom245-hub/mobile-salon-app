import React from "react";
import ReactDOM from "react-dom";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faTimes } from "@fortawesome/free-solid-svg-icons";
import { StyledDrawerMenu } from "./DrawerMenu.css";
import Backdrop from "../UIElements/Backdrop";

interface DrawerMenuProps {
  closeDrawerMenu: () => void;
}

const DrawerMenu: React.FC<DrawerMenuProps> = ({ closeDrawerMenu }) => {
  const content = (
    <StyledDrawerMenu>
      <Backdrop onClick={closeDrawerMenu} />
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
