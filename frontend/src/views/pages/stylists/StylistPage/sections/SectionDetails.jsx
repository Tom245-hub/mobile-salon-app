import React from "react";

import Image from "../../../../components/Image";
import PageTitle from "../../../../components/fonts/PageTitle";
import CommentText from "../../../../components/fonts/CommentText";

const SectionDetails = ({ stylist }) => {
  const stylistData = stylist.profileData;
  // console.log(stylistData);
  return (
    <>
      <div className='row'>
        <div className='col-md-5'>
          <Image height='80%' img={stylist.img} />
        </div>
        <div className='col-md-7 d-flex align-items-center'>
          {/* <PageTitle>{stylistData.title}</PageTitle>
          <CommentText>{stylistData.city}</CommentText>
          <CommentText>{stylistData.text}</CommentText> */}
        </div>
      </div>
    </>
  );
};

export default SectionDetails;
