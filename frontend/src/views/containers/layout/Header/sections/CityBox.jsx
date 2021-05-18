import React from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";

const CityBox = ({ activeTopBar, setActiveTopBar, city }) => {
  return (
    <div className='d-flex align-items-center'>
      <a onClick={() => setActiveTopBar(true)}>
        <span className='mr-2'>
          <FontAwesomeIcon icon={faMapMarkerAlt} />
        </span>
        {city ? city : "Wybierz miasto"}
        {!activeTopBar && city ? " (zmień)" : ""}
      </a>
    </div>
  );
};

CityBox.propTypes = {
  activeTopBar: PropTypes.bool.isRequired,
  setActiveTopBar: PropTypes.func,
  city: PropTypes.string,
};

export default CityBox;
