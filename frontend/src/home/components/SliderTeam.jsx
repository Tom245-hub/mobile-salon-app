import React, { useState } from "react";

import SliderDefault from "../../shared/components/Slider/SliderDefault";
import Card from "../../shared/components/UIElements/Card";

const SliderTeam = ({ stylistList, cityList }) => {
  const [filterCity, setFilterCity] = useState(
    cityList[0].title
  );
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
    <>
      <SliderDefault settings={settings}>
        {filteredStylists.map((stylist) => (
          <Card
            key={stylist._id}
            img={stylist.profileData.img}
            url={stylist.profileData.url}
            title={stylist.profileData.title}
          />
        )) ?? <h5>Trwa rekrutacja</h5>}
      </SliderDefault>

      {cityList.map((city) => (
        <a
          key={city._id}
          onClick={() => setFilterCity(city.title)}
        >
          {city.title}
        </a>
      ))}
    </>
  );
};

export default SliderTeam;
