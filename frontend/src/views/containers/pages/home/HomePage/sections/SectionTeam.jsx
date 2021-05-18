import React, { useContext, useEffect, useState } from "react";
import { StoreContext } from "../../../../../../store/StoreProvider";

import Image from "../../../../../components/Image";
import SliderStylistsCards from "../../../../../components/SliderStylistsCards";
import SectionTitle from "../../../../../components/fonts/SectionTitle";
import PrevArrow from "../../../../../components/PrevArrow";
import NextArrow from "../../../../../components/NextArrow";
import FilterCity from "../../../../../components/FilterCity";

const SectionTeam = () => {
  const { stylistList, cityList } = useContext(StoreContext);
  const [filterCity, setFilterCity] = useState(cityList[0].title);
  const filteredCity = stylistList.filter((stylist) => stylist.profileData.city === filterCity && stylist.profileData.img);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    slidesToShow: 4,
  };

  return (
    <>
      <SectionTitle>Poznaj Stylistki Mobile Salon</SectionTitle>

      <div className='row'>
        <div className='col-5'>
          <Image img='/img/fryzjerki-slubne-mobile-salon.jpg' height='60%' alt='Zespół Mobile Salon' />
        </div>

        <div className='col-7 d-flex flex-column justify-content-between'>
          <h6>Do zespołu Mobile Salon trafiają jedynie stylistki z doświadczeniem, pasją i kreatywnym podejściem do stylizacji. </h6>

          <div>
            <SliderStylistsCards margin='0 0.5rem' bgColorHover={false} settings={settings} slidesToShow={3} data={filteredCity} errorInfo='Prowadzimy rekrutację stylistek.' />
          </div>

          <div>
            <FilterCity cityList={cityList} setFilterCity={setFilterCity} />
          </div>
        </div>
      </div>
    </>
  );
};

export default SectionTeam;
