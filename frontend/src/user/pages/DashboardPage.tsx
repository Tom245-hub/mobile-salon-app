import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getStylist } from "../../shared/data/actions/stylistActions";
import { RootState } from "../../shared/data/reducers/rootReducers";

import BoxList from "../components/BoxList";
import InfoTable from "../components/InfoTable";
import { StyledContainer } from "./DashboardPage.css";

const DashboardPage: React.FC = () => {
  const dispatch = useDispatch();
  const user: any = useSelector((state: RootState) => state.user.data);

  useEffect(() => {
    if (user.accessLevel === 1) {
      dispatch(getStylist(user.userDataId));
    } else if (user.accessLevel === 2) {
      console.log("getClient action");
    } else {
    }
  }, []);

  return (
    <StyledContainer>
      <BoxList />

      <InfoTable />
    </StyledContainer>
  );
};

export default DashboardPage;
