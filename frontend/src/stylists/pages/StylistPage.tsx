import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getStylist, getStylistList } from "../../shared/data/actions/stylistActions";
import { RootState } from "../../shared/data/reducers/rootReducers";

import SliderPortfolio from "../components/SliderPortfolio";
import SliderReviews from "../components/SliderReviews";

import IntroProfile from "../components/IntroProfile";
import { Stylist } from "../../shared/models/stylistModel";
import Consultation from "../components/Consultation";

const StylistPage: React.FC = () => {
  let { id } = useParams<{ id: string }>();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getStylist(id));
  }, [getStylist]);

  const stylist = useSelector((state: RootState) => state.stylist);

  return (
    <>
      {stylist && <IntroProfile stylist={stylist.stylist} />}

      <SliderPortfolio portfolioList={stylist.stylist.portfolio} />

      <SliderReviews reviewList={stylist.stylist.reviews} />

      <Consultation />
    </>
  );
};

export default StylistPage;
