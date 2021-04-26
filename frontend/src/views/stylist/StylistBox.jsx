import React from "react";
import { Link } from "react-router-dom";

const StylistBox = (props) => {
  return (
    <Link to="#">
      <div className="card">
        <img
          src={props.stylist.image}
          alt={props.stylist.name}
          className="card-img-top"
        />
        <div className="card-body">
          <h5 className="card-title">{props.stylist.name}</h5>
          <h6 className="card-text">{props.stylist.city}</h6>
        </div>
        <div className="card-footer">
          <h6>Zobacz profil</h6>
        </div>
      </div>
    </Link>
  );
};

export default StylistBox;
