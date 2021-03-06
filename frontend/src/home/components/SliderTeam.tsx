import React, { useState } from "react";
import { useSelector } from "react-redux";

import { RootState } from "../../shared/data/reducers/rootReducers";
import { Stylist } from "../../shared/models/stylistModel";

import { showAvailableCities } from "../../shared/utils/utils";

import SliderDefault from "../../shared/components/Slider/SliderDefault";
import Card from "../../shared/components/UIElements/Card";
import Image from "../../shared/components/UIElements/Image";
import LoadingSpinner from "../../shared/components/UIElements/LoadingSpinner";

import {
  StyledContainerFull,
  StyledCol,
  StyledTitle,
  StyledText,
  StyledList,
} from "./SliderTeam.css";

const SliderTeam: React.FC = () => {
  const stylistList = useSelector((state: RootState) => state.stylistList.data);

  const isLoading = stylistList === 0;

  const [filterCity, setFilterCity] = useState<string>("Warszawa");

  const filteredStylists: [] = stylistList.filter(
    (stylist: Stylist) => stylist.profileData.city === filterCity
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
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <StyledContainerFull>
          <Image
            img='/img/fryzjerki-slubne-mobile-salon.jpg'
            paddingTop='60%'
            alt='Zespół Mobile Salon'
            margin='0'
          />

          <StyledCol>
            <StyledTitle>Poznaj nasze stylistki</StyledTitle>
            <StyledText>
              Do zespołu Mobile Salon trafiają jedynie stylistki z doświadczeniem, pasją i
              kreatywnym podejściem do stylizacji.
            </StyledText>
            <SliderDefault settings={settings}>
              {filteredStylists.map((stylist: Stylist) => (
                <Card
                  key={stylist._id}
                  img={stylist.profileData.img}
                  url={stylist.profileData.url}
                  title={stylist.profileData.title}
                  margin='1rem 0.5rem'
                />
              ))}
            </SliderDefault>

            <StyledList>
              {showAvailableCities(stylistList).map((city, index) => (
                <li key={index}>
                  <a onClick={() => setFilterCity(city)}>{city}</a>
                </li>
              ))}
            </StyledList>
          </StyledCol>
        </StyledContainerFull>
      )}
    </>
  );
};

export default SliderTeam;
