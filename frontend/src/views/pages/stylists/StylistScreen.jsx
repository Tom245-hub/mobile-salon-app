import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";

import request from "../../../utils/request";
import { StoreContext } from "../../../store/StoreProvider";

import Image from "../../components/Image";

const StylistScreen = () => {
  const { stylistList } = useContext(StoreContext);
  // console.log(stylistList);
  let { id } = useParams();
  // console.log(id);

  const stylist = stylistList.length && stylistList.filter((stylist) => stylist.idStylist == id)[0];
  // console.log(stylist);

  return (
    <div className='container-fluid'>
      <div className='container my-5 bg-light'>
        <div className='row'>
          <div className='col-4'>
            <Image height='80%' img={stylist.img} />
          </div>
          <div className='col-3'>
            <h2>{stylist.title}</h2>
            <h3>{stylist.city}</h3>
            <h3>Doświadczenie: {stylist.experience} lat</h3>
          </div>
          <div className='col-5'>
            <h5>{stylist.text}</h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StylistScreen;
