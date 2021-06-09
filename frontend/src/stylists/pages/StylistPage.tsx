import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getStylistList } from "../../shared/data/actions/stylistActions";
import { RootState } from "../../shared/data/reducers/rootReducers";

import SliderPortfolio from "../components/SliderPortfolio";
import SliderReviews from "../components/SliderReviews";

import IntroProfile from "../components/IntroProfile";
import { Stylist } from "../../shared/models/stylistModel";

const StylistPage: React.FC = () => {
  let { id } = useParams<{ id: string }>();
  const stylistList = useSelector((state: RootState) => state.stylistList.stylistList);
  const stylist = stylistList.filter((stylist: Stylist) => stylist._id == id)[0];

  if (stylistList.length === 0 || !stylist) {
    return (
      <div>
        <h2>Nie znaleźliśmy stylistki. Wróć do strony głównej</h2>
        <button>Strona Główna</button>
      </div>
    );
  }

  return (
    <>
      <IntroProfile stylist={stylist} />

      <SliderPortfolio portfolioList={stylist.portfolio} />

      <SliderReviews reviewList={stylist.reviews} />
    </>
  );
};

export default StylistPage;
