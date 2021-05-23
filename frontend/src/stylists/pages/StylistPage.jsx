import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { StoreContext } from "../../shared/store/StoreProvider";
import PageTitle from "../../shared/components/UIElements/PageTitle";
import SliderPortfolio from "../components/SliderPortfolio";
import SliderReviews from "../components/SliderReviews";

const StylistPage = () => {
  const { stylistList } = useContext(StoreContext);
  let { id } = useParams();
  const stylist = stylistList && stylistList.filter((stylist) => stylist._id == id)[0];

  if (stylistList.length === 0 || !stylist) {
    return (
      <>
        <div className='container py-5 my-5'>
          <PageTitle>Nie znaleźliśmy stylistki. Wróć do strony głównej</PageTitle>
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
      </div>

      <div className='container-fluid bg-light py-5'>
        <SectionTitle>Prace stylistki</SectionTitle>
        <div className='row'>
          <div className='col-12'>
            <SliderPortfolio portfolioList={stylist.portfolio} />
          </div>
        </div>
      </div>

      <div className='container py-5'>
        <SectionTitle>Opinie Klientek</SectionTitle>
        <div className='row'>
          <div className='col-12'>
            <SliderReviews reviewList={stylist.reviews} />
          </div>
        </div>
      </div>
    </>
  );
};

export default StylistPage;
