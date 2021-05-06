import React from "react";

import Image from "../../../../components/Image";
import StylistProfileText from "../../../../components/StylistProfileText";

const SectionDetails = (props) => {
  return (
    <>
      <div className='row'>
        <div className='col-md-5'>
          <Image height='80%' img={props.stylist.img} />
        </div>
        <div className='col-md-7 d-flex align-items-center'>
          <StylistProfileText stylist={props.stylist} />
        </div>
      </div>
    </>
  );
};

export default SectionDetails;
