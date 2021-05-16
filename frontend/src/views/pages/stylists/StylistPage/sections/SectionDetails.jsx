import React from "react";
import PropTypes from "prop-types";

import Image from "../../../../components/Image";
import PageTitle from "../../../../components/fonts/PageTitle";
import CommentText from "../../../../components/fonts/CommentText";

const SectionDetails = ({ stylist }) => {
  return (
    <>
      <div className='row'>
        <div className='col-md-5'>
          <Image height='80%' img={stylist.img} />
        </div>
        <div className='col-md-7 d-flex align-items-center'>
          <div>
            <PageTitle>{stylist.title}</PageTitle>
            <CommentText>{stylist.city}</CommentText>
            <CommentText>{stylist.text}</CommentText>
          </div>
        </div>
      </div>
    </>
  );
};

SectionDetails.propTypes = {
  stylist: PropTypes.object,
};

export default SectionDetails;
