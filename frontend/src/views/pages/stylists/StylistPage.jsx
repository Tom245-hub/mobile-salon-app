import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";

import { StoreContext } from "../../../store/StoreProvider";
import SliderDefault from "../../components/SliderDefault";
import SliderReviews from "../../components/SliderReviews";
import Image from "../../components/Image";
import StylistProfileText from "../../components/StylistProfileText";
import { PageSubTitle } from "../../components/Title";

const StylistPage = () => {
  const { stylistList } = useContext(StoreContext);
  let { id } = useParams();
  const stylist = stylistList.length > 0 && stylistList.filter((stylist) => stylist.idStylist == id)[0];
  console.log(stylist);

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
          <div className='col-12'>{stylist && <SliderDefault slidesToShow={5} data={stylist.portfolio} info={false} height='70%' />}</div>
        </div>
      </div>
      <div className='container py-5'>
        <PageSubTitle>Opinie Klientek</PageSubTitle>
        <div className='row'>
          <div className='col-12'>{stylist && <SliderReviews slidesToShow={1} data={stylist.reviews} />}</div>
        </div>
      </div>
    </>
  );
};

export default StylistPage;
