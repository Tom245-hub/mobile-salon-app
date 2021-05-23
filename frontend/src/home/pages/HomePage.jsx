import React, { useContext } from "react";
import { StoreContext } from "../../shared/store/StoreProvider";

import SliderHero from "../components/SliderHero";
import ServicesList from "../components/ServicesList";
import SliderTeam from "../components/SliderTeam";
import SectionSubtitle from "../../shared/components/UIElements/SectionSubtitle";
import SectionTitle from "../../shared/components/UIElements/SectionTitle";
import Image from "../../shared/components/UIElements/Image";

const HomePage = () => {
  const { slideList, categoryList, stylistList, cityList } =
    useContext(StoreContext);

  return (
    <div className='container-fluid p-0'>
      <SliderHero slideList={slideList} />

      <div className='container py-5 mb-5'>
        <SectionTitle>Poznaj nasze usługi</SectionTitle>
        /ZIPCODE
        <ServicesList categoryList={categoryList} />
      </div>

      <div className='container-fluid py-5 bg-light mb-5'>
        <div className='container'>
          <SectionTitle>
            Poznaj nasze stylistki
          </SectionTitle>

          <div className='row'>
            <div className='col-5'>
              <Image
                img='/img/fryzjerki-slubne-mobile-salon.jpg'
                height='60%'
                alt='Zespół Mobile Salon'
              />
            </div>

            <div className='col-7 d-flex flex-column justify-content-between'>
              <SectionSubtitle>
                Do zespołu Mobile Salon trafiają jedynie
                stylistki z doświadczeniem, pasją i
                kreatywnym podejściem do stylizacji.{" "}
              </SectionSubtitle>
              <SliderTeam
                stylistList={stylistList}
                cityList={cityList}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
