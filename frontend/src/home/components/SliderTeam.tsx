import React, { useState, useContext } from "react";
import { StoreContext } from "../../shared/store/StoreProvider";

import { showAvailableCities } from "../../shared/utils/utils";
import SliderDefault from "../../shared/components/Slider/SliderDefault";
import Card from "../../shared/components/UIElements/Card";
import Image from "../../shared/components/UIElements/Image";
import { StyledContainerFull, StyledCol } from "./SliderTeam.css";

const SliderTeam: React.FC = () => {
  const { stylistList } = useContext(StoreContext);
  const [filterCity, setFilterCity] = useState<string>("Warszawa");

  const filteredStylists = stylistList.filter(
    (stylist) => stylist.profileData.city === filterCity
  );

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    slidesToShow: 4,
  };

  return (
    <StyledContainerFull>
      <Image
        img='/img/fryzjerki-slubne-mobile-salon.jpg'
        paddingTop='60%'
        alt='Zespół Mobile Salon'
        margin='0'
      />

      <StyledCol>
        <h3>Poznaj nasze stylistki</h3>
        <h5>
          Do zespołu Mobile Salon trafiają jedynie stylistki z doświadczeniem,
          pasją i kreatywnym podejściem do stylizacji.
        </h5>
        <SliderDefault settings={settings}>
          {filteredStylists.map((stylist) => (
            <Card
              key={stylist._id}
              img={stylist.profileData.img}
              url={stylist.profileData.url}
              title={stylist.profileData.title}
              margin='0 0.5rem'
            />
          )) ?? <h5>Trwa rekrutacja</h5>}
        </SliderDefault>

        <ul>
          {showAvailableCities(stylistList).map((city, index) => (
            <li key={index}>
              <a onClick={() => setFilterCity(city)}>{city}</a>
            </li>
          ))}
        </ul>
      </StyledCol>
    </StyledContainerFull>
  );
};

export default SliderTeam;
