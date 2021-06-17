import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getStylist } from "../../shared/data/actions/stylistActions";
import { RootState } from "../../shared/data/reducers/rootReducers";

import SliderPortfolio from "../components/SliderPortfolio";
import SliderReviews from "../components/SliderReviews";

import IntroProfile from "../components/IntroProfile";
import Consultation from "../components/Consultation";

import LoadingSpinner from "../../shared/components/UIElements/LoadingSpinner";
import { LOADING_STATES } from "../../shared/data/constans/commonConstans";

const StylistPage: React.FC = () => {
  let { id } = useParams<{ id: string }>();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getStylist(id));
  }, [getStylist]);

  const stylist = useSelector((state: RootState) => state.stylist.data);
  const status: string = useSelector((state: RootState) => state.stylist.loading.status);

  if (status === LOADING_STATES.LOADING) {
    return <LoadingSpinner variant='spinner' />;
  } else if (status === LOADING_STATES.FAILED) {
    return <LoadingSpinner variant='error' errorText='Nie znaleziono stylistki' />;
  }

  return (
    <>
      <IntroProfile stylist={stylist} />

      <SliderPortfolio portfolio={stylist.portfolio} />

      {stylist.reviews.length !== 0 && <SliderReviews reviewList={stylist.reviews} />}
      <Consultation />
    </>
  );
};

export default StylistPage;
