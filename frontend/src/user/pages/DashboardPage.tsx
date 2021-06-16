import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getStylist } from "../../shared/data/actions/stylistActions";
import { RootState } from "../../shared/data/reducers/rootReducers";

import BoxList from "../components/BoxList";
import InfoTable from "../components/InfoTable";
import { StyledContainer } from "./DashboardPage.css";

const DashboardPage: React.FC = () => {
  const dispatch = useDispatch();
  const user: any = useSelector((state: RootState) => state.user);

  useEffect(() => {
    if (user.user.user.accessLevel === 1) {
      dispatch(getStylist(user.user.user.stylistData._id));
    } else if (user.user.user.accessLevel === 2) {
      console.log("bbb");
    } else {
    }
  }, [user.isLogged]);

  return (
    <StyledContainer>
      <BoxList />
      {/* <h1>{user.stylistData._id}</h1> */}

      <InfoTable />
    </StyledContainer>
  );
};

export default DashboardPage;
