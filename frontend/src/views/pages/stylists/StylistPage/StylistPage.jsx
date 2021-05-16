import React, { useContext } from "react";
import { useParams } from "react-router-dom";

import { StoreContext } from "../../../../store/StoreProvider";
import SectionDetails from "./sections/SectionDetails";
import SectionPortfolio from "./sections/SectionPortfolio";
import SectionReviews from "./sections/SectionReviews";

const StylistPage = () => {
  const { stylistList } = useContext(StoreContext);
  let { id } = useParams();
  const stylist = stylistList.length > 0 && stylistList.filter((stylist) => stylist._id == id)[0];

  return (
    <>
      <div className='container py-5'>{stylist && <SectionDetails stylist={stylist} />}</div>
      <div className='container-fluid bg-light py-5'>
        <SectionPortfolio stylist={stylist} />
      </div>
      <div className='container py-5'>
        <SectionReviews stylist={stylist} />
      </div>
    </>
  );
};

export default StylistPage;
