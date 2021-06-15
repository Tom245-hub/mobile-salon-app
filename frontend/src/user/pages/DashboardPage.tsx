import BoxList from "../components/BoxList";
import InfoTable from "../components/InfoTable";
import { StyledContainer } from "./DashboardPage.css";

const DashboardPage: React.FC = () => {
  return (
    <StyledContainer>
      <BoxList />

      <InfoTable />
    </StyledContainer>
  );
};

export default DashboardPage;
