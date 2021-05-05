import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";

import { StoreContext } from "../../../store/StoreProvider";
import Image from "../../components/Image";
import StylistProfileText from "../../components/StylistProfileText";
import { PageSubTitle } from "../../components/Title";

const StylistScreen = () => {
  const { stylistList } = useContext(StoreContext);
  let { id } = useParams();
  const stylist = stylistList.length && stylistList.filter((stylist) => stylist.idStylist == id)[0];

  return (
    <>
      <div className='container py-5'>
        <div className='row'>
          <div className='col-md-5'>
            <Image height='80%' img={stylist.img} />
          </div>
          <div className='col-md-7 d-flex align-items-center'>
            <StylistProfileText stylist={stylist} />
          </div>
        </div>
      </div>
      <div className='container-fluid bg-light py-5'>
        <PageSubTitle>Prace stylistki</PageSubTitle>
        <div className='row'>
          <div className='col-12'>Praca 1</div>
        </div>
      </div>
      <div className='container py-5'>
        <PageSubTitle>Opinie Klientek</PageSubTitle>
        <div className='row'>
          <div className='col-12'>Opinia 1</div>
        </div>
      </div>
    </>
  );
};

export default StylistScreen;
