import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

const TopBar = (props) => {
  return (
    <>
      {props.activeTopBar && (
        <div className='bg-info d-flex justify-content-end py-2 px-3'>
          <div className='d-flex align-items-center bg-info'>
            <h5>Miasto:</h5>

            <select className='form-control ml-3' onChange={(e) => props.setCity(e.target.value)}>
              <option value=''>Wybierz</option>
              <option value='Warszawa'>Warszawa</option>
              <option value='Kraków'>Kraków</option>
              <option value='Wrocław'>Wrocław</option>
              <option value='Gdańsk'>Gdańsk</option>
              <option value='Poznań'>Poznań</option>
            </select>

            <FontAwesomeIcon className='ml-3' icon={faTimes} onClick={() => props.setActiveTopBar(!props.activeTopBar)} />
          </div>
        </div>
      )}
    </>
  );
};

export default TopBar;
