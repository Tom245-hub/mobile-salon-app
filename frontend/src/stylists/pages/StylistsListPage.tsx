import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../shared/data/reducers/rootReducers";
import { getStylistList } from "../../shared/data/actions/stylistActions";
import StylistsList from "../components/StylistsList";
import Consultation from "../components/Consultation";
import { StyledBox, StyledPageTitle, StyledText } from "./StylistsListPage.css";
import { useEffect } from "react";

const StylistsListPage: React.FC = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getStylistList());
  }, []);

  const stylistList = useSelector((state: RootState) => state.stylistList.stylistList);
  console.log(stylistList);

  return (
    <>
      <StyledBox>
        <StyledPageTitle>Stylistki Mobile Salon</StyledPageTitle>
        <StyledText>
          Jesteśmy zespołem stylistów chcących tworzyć nowy standard usługi dla Waszej
          wygody. Dzięki Wam możemy mieć pracę, którą kochamy. Do naszego zespołu trafiają
          wyłącznie styliści z doświadczeniem, zamiłowaniem i kreatywnym spojrzeniem na
          stylizację wizerunku.
          <br />
          Zapraszamy do galerii naszych prac.
        </StyledText>
      </StyledBox>

      <StylistsList stylistList={stylistList} />

      <Consultation />
    </>
  );
};

export default StylistsListPage;
