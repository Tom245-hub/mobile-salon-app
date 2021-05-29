import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

import { StyledContainer } from "./TopBar.css";

interface TopBarProps {
  isActiveTopBar: boolean;
  setCity: Function;
  setisActiveTopBar: Function;
}

const TopBar: React.FC<TopBarProps> = ({
  isActiveTopBar,
  setCity,
  setisActiveTopBar,
}) => {
  return (
    <>
      {isActiveTopBar && (
        <StyledContainer>
          <h5>Miasto:</h5>
          <select onChange={(e) => setCity(e.target.value)}>
            <option value=''>Wybierz</option>
            <option value='Warszawa'>Warszawa</option>
            <option value='Kraków'>Kraków</option>
            <option value='Wrocław'>Wrocław</option>
            <option value='Gdańsk'>Gdańsk</option>
            <option value='Poznań'>Poznań</option>
          </select>

          <a
            onClick={() =>
              setisActiveTopBar((prevState: boolean) => !prevState)
            }
          >
            <FontAwesomeIcon icon={faTimes} />
          </a>
        </StyledContainer>
      )}
    </>
  );
};

export default TopBar;
