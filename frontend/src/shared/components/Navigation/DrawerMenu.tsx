import React from "react";
import ReactDOM from "react-dom";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faTimes } from "@fortawesome/free-solid-svg-icons";
import { StyledDrawerMenu } from "./DrawerMenu.css";

interface DrawerMenuProps {
  setIsOpenDrawerMenu: Function;
}

const DrawerMenu: React.FC<DrawerMenuProps> = ({ setIsOpenDrawerMenu }) => {
  const content = (
    <StyledDrawerMenu className='d-flex h-100'>
      <div className='container-fluid'>
        <div className='row d-flex justify-content-end'>
          <a onClick={() => setIsOpenDrawerMenu(false)}>
            <FontAwesomeIcon icon={faTimes} />
          </a>
        </div>
        <div className='row'>
          <div className='col'>
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
          </div>
        </div>
      </div>
    </StyledDrawerMenu>
  );

  return ReactDOM.createPortal(
    content,
    document.getElementById("drawerMenuHook") as HTMLElement
  );
};

export default DrawerMenu;
