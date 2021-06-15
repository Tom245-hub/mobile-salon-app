import PersonalDataForm from "../components/PersonalDataForm";
import { StyledContainer } from "./PersonalDataPage.css";

const PersonalDataPage: React.FC = () => {
  return (
    <StyledContainer>
      <PersonalDataForm />
    </StyledContainer>
  );
};

export default PersonalDataPage;
