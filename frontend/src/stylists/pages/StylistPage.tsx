import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getStylistList } from "../../shared/data/actions/stylistActions";
import { RootState } from "../../shared/data/reducers/rootReducers";

import SliderPortfolio from "../components/SliderPortfolio";
import SliderReviews from "../components/SliderReviews";
import Image from "../../shared/components/UIElements/Image";

const StylistPage: React.FC = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getStylistList());
  }, []);

  // const stylistList = useSelector((state: RootState) => state.stylist.stylist);
  // console.log(stylist);

  // let { id: any } = useParams();

  // const stylist = stylistList && stylistList.filter((stylist) => stylist._id == id)[0];

  // if (stylistList.length === 0 || !stylist) {
  //   return (
  //     <>
  //       <div className='container py-5 my-5'>
  //         <h2>Nie znaleźliśmy stylistki. Wróć do strony głównej</h2>
  //         <div className='d-flex justify-content-center'>
  //           <button className='btn btn-primary'>Strona Główna</button>
  //         </div>
  //       </div>
  //     </>
  //   );
  // }

  return (
    <>
      <div className='container py-5'>
        <div className='row'>
          <div className='col-md-5'>
            aaaaaaaaaaa
            {/* <Image paddingTop='80%' img={stylist.img} alt={stylist.title} margin='0' /> */}
          </div>
          <div className='col-md-7 d-flex align-items-center'>
            <div>
              {/* <h2>{stylist.title}</h2>
              <h4>{stylist.city}</h4>
              <h4>{stylist.text}</h4> */}
            </div>
          </div>
        </div>
      </div>

      <div className='container-fluid bg-light py-5'>
        <h3>Prace stylistki</h3>
        <div className='row'>
          <div className='col-12'>
            {/* <SliderPortfolio portfolioList={stylist.portfolio} /> */}
          </div>
        </div>
      </div>

      <div className='container py-5'>
        <h3>Opinie Klientek</h3>
        <div className='row'>
          <div className='col-12'>
            {/* <SliderReviews reviewList={stylist.reviews} /> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default StylistPage;
