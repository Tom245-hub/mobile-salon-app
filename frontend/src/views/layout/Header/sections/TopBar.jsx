import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons';


const TopBar = (props) => {

  return (
    <>
      {props.activeTopBar &&
        <div className="row bg-info d-flex justify-content-end p-2">
            <div className="d-flex align-items-center">
                <h5>Miasto:</h5>

                <select className="form-control ml-3" onChange={(e) => props.setCity(e.target.value)}>
                    <option value="">Wybierz</option>
                    <option value="Warszawa">Warszawa</option>
                    <option value="Kraków">Kraków</option>
                    <option value="Wrocław">Wrocław</option>
                    <option value="Gdańsk">Gdańsk</option>
                    <option value="Poznań">Poznań</option>
                </select>

                <FontAwesomeIcon className="ml-3" icon={faTimes} onClick={() => props.setActiveTopBar(!props.activeTopBar)} />
            </div>
        </div>
      }
    </>
  )
}

export default TopBar;