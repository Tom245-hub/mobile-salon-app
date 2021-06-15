import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHistory,
  faMoneyBill,
  faHandshake,
  faCalendarPlus,
} from "@fortawesome/free-solid-svg-icons";
import {
  StyledBoxSmall,
  StyledBoxIcon,
  StyledBoxCount,
  StyledBoxTitle,
  StyledBoxText,
} from "./BoxList.css";

const BoxList: React.FC = () => {
  return (
    <>
      <StyledBoxSmall>
        <StyledBoxIcon>
          <FontAwesomeIcon icon={faHistory} />
        </StyledBoxIcon>
        <div>
          <StyledBoxCount>12</StyledBoxCount>
          <StyledBoxTitle>Archiwalne</StyledBoxTitle>
          <StyledBoxText>Zamówienia, które zostały zrealizowane.</StyledBoxText>
        </div>
      </StyledBoxSmall>
      <StyledBoxSmall>
        <StyledBoxIcon>
          <FontAwesomeIcon icon={faMoneyBill} />
        </StyledBoxIcon>
        <div>
          <StyledBoxCount>2</StyledBoxCount>
          <StyledBoxTitle>Opłacone</StyledBoxTitle>
          <StyledBoxText>
            Zamówienia, które zostały potwierdzone i opłacone.
          </StyledBoxText>
        </div>
      </StyledBoxSmall>
      <StyledBoxSmall>
        <StyledBoxIcon>
          <FontAwesomeIcon icon={faHandshake} />
        </StyledBoxIcon>
        <div>
          <StyledBoxCount>1</StyledBoxCount>
          <StyledBoxTitle>Oczekujące</StyledBoxTitle>
          <StyledBoxText>
            Zamówienia, które zostały potwierdzone i oczekują na płatność.
          </StyledBoxText>
        </div>
      </StyledBoxSmall>
      <StyledBoxSmall>
        <StyledBoxIcon>
          <FontAwesomeIcon icon={faCalendarPlus} />
        </StyledBoxIcon>
        <div>
          <StyledBoxCount>3</StyledBoxCount>
          <StyledBoxTitle>Nowe</StyledBoxTitle>
          <StyledBoxText>
            Zamówienia, które zostały złożone i oczekują potwierdzenie.
          </StyledBoxText>
        </div>
      </StyledBoxSmall>
    </>
  );
};

export default BoxList;
