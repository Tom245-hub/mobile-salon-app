import React, { useContext } from "react";

import { StoreContext } from "../../../../store/StoreProvider";

import SliderDefault from "../../../components/SliderDefault";
import Image from "../../../components/Image";
import { PageSubTitle } from "../../../components/Title";

const SectionTeam = () => {
  const { stylistList } = useContext(StoreContext);

  return (
    <>
      <PageSubTitle>Poznaj Stylistki Mobile Salon</PageSubTitle>

      <div className='row'>
        <div className='col-5'>
          <Image img='/img/fryzjerki-slubne-mobile-salon.jpg' height='60%' alt='Mobile Salon' />
        </div>

        <div className='col-7 d-flex flex-column justify-content-between'>
          <h6>Do zespołu Mobile Salon trafiają jedynie stylistki z doświadczeniem, pasją i kreatywnym podejściem do stylizacji. </h6>

          <div>{/* <SliderDefault slidesToShow={3} data={data} info={false} /> */}</div>

          <div>
            {/* <a onClick={() => setData(teamData[1])}>WARSZAWA</a>
              <a onClick={() => setData(teamData[2])}>KRAKÓW</a>
              <a onClick={() => setData(teamData[3])}>WROCŁAW</a>
              <a onClick={() => setData(teamData[4])}>POZNAŃ</a>
              <a onClick={() => setData(teamData[5])}>GDAŃSK</a> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default SectionTeam;
