import React, { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import { StoreContext } from "../../../../../store/StoreProvider";
import SectionDetails from "./sections/SectionDetails";
import SectionPortfolio from "./sections/SectionPortfolio";
import SectionReviews from "./sections/SectionReviews";
import InfoModal from "../../../modals/InfoModal/InfoModal";
import PageTitle from "../../../../components/fonts/PageTitle";

const StylistPage = () => {
  const { stylistList } = useContext(StoreContext);
  let { id } = useParams();
  const [infoModal, setInfoModal] = useState(true);
  const stylist = stylistList && stylistList.filter((stylist) => stylist._id == id)[0];

  if (stylistList.length === 0 || !stylist) {
    return (
      <>
        <InfoModal setInfoModal={setInfoModal} infoModal={infoModal} titleText='Błąd' bodyText='Nie znaleźliśmy stylistki.' />
        <div className='container py-5 my-5'>
          <PageTitle>Wróć do strony głównej</PageTitle>
          <div className='d-flex justify-content-center'>
            <button className='btn btn-primary'>Strona Główna</button>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <div className='container py-5'>
        <SectionDetails stylist={stylist.profileData} />
      </div>
      <div className='container-fluid bg-light py-5'>
        <SectionPortfolio portfolio={stylist.portfolio} />
      </div>
      <div className='container py-5'>
        <SectionReviews reviews={stylist.reviews} />
      </div>
    </>
  );
};

export default StylistPage;
