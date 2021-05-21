import React, { useContext } from "react";
import ReactDOM from "react-dom";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faTimes } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";

const StyledTopMenuMobile = styled.div`
  position: absolute;
  left: 0;
  top: 0
  bottom: 0;
  background: ${(props) => props.theme.colors.graySuperLight};
  z-index: 110;
`;

const TopMenuMobile = ({ handleTopMenuMobilClose }) => {
  const content = (
    <StyledTopMenuMobile className='d-flex h-100'>
      <div className='container-fluid'>
        <div className='row d-flex justify-content-end'>
          <a onClick={handleTopMenuMobilClose}>
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
    </StyledTopMenuMobile>
  );

  return ReactDOM.createPortal(content, document.getElementById("mobileMenuHook"));
};

export default TopMenuMobile;
