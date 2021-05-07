import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";

const CityBox = (props) => {
  return (
    <div className='d-flex align-items-center'>
      <a onClick={() => props.setActiveTopBar(true)}>
        <span className='mr-2'>
          <FontAwesomeIcon icon={faMapMarkerAlt} />
        </span>
        {props.city ? props.city : "Wybierz miasto"}
        {!props.activeTopBar && props.city ? " (zmień)" : ""}
      </a>
    </div>
  );
};

export default CityBox;
