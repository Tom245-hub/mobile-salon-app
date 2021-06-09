import FormGroup from "../../shared/components/FormElements/FormsGroup";
import { StyledContainer, StyledSubtitle } from "./Consultation.css";

const Consultation: React.FC = () => {
  return (
    <StyledContainer>
      <StyledSubtitle>Skontaktuj się ze stylistką</StyledSubtitle>
      <FormGroup placeholder='Twój telefon' btnText='Zamów konsultację' />
    </StyledContainer>
  );
};

export default Consultation;
