import React, { useContext, useState } from "react";

import { StoreContext } from "../../../../../../store/StoreProvider";

import Image from "../../../../../components/Image";
import SliderCards from "../../../../../components/SliderCards";
import SectionTitle from "../../../../../components/fonts/SectionTitle";
import PrevArrow from "../../../../../components/PrevArrow";
import NextArrow from "../../../../../components/NextArrow";
import FilterCity from "../../../../../components/FilterCity";

const SectionTeam = () => {
  const { stylistList } = useContext(StoreContext);
  const [filterCity, setFilterCity] = useState("Warszawa");
  // console.log(stylistList);

  const filteredCity = stylistList.length > 0 && stylistList.filter((stylist) => stylist.city === filterCity);

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

          <div>{filteredCity && <SliderCards margin='0 0.5rem' bgColorHover={false} settings={settings} slidesToShow={3} data={filteredCity} errorInfo='Prowadzimy rekrutację stylistek.' />}</div>

          <div>
            <FilterCity filterCity={filterCity} setFilterCity={setFilterCity} />
          </div>
        </div>
      </div>
    </>
  );
};

export default SectionTeam;
