import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { StoreContext } from "../../../../store/StoreProvider";
import SectionDetails from "./sections/SectionDetails";
import SectionPortfolio from "./sections/SectionPortfolio";
import SectionReviews from "./sections/SectionReviews";

const StylistPage = () => {
  const { stylistList } = useContext(StoreContext);
  let { id } = useParams();
  const stylist = stylistList && stylistList.filter((stylist) => stylist._id == id)[0];

  return (
    <>
      <div className='container py-5'>{stylist && <SectionDetails stylist={stylist.profileData} />}</div>
      <div className='container-fluid bg-light py-5'>{stylist && <SectionPortfolio portfolio={stylist.portfolio} />}</div>
      <div className='container py-5'>{stylist && <SectionReviews reviews={stylist.reviews} />}</div>
    </>
  );
};

export default StylistPage;
