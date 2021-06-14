import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faGoogle } from "@fortawesome/free-brands-svg-icons";
import { RootState } from "../../data/reducers/rootReducers";

import FormsGroup from "../FormElements/FormsGroup";
import {
  StyledContainerFull,
  StyledContainer,
  StyledColTitle,
  StyledText,
} from "./Footer.css";

const Footer: React.FC = () => {
  const user = useSelector((state: RootState) => state.user);
  let content;
  if (user.isLogged && user.user.user.accessLevel === 1) {
    content = (
      <StyledText>
        Wystąpił błąd techniczny? Zgłoś go: kontakt@webite.pl / 513-369-123
      </StyledText>
    );
  } else if (user.isLogged && user.user.user.accessLevel === 2) {
    content = (
      <StyledText>
        Wystąpił błąd techniczny? Zgłoś go: kontakt@webite.pl / 513-369-123
      </StyledText>
    );
  } else {
    content = (
      <StyledContainer>
        <ul>
          <StyledColTitle>STREFA STYLISTKI</StyledColTitle>
          <li>
            <Link to='/strefa-stylistki/rekrutacja'>rekrutacja</Link>
          </li>
          <li>
            <Link to='#'>warunki</Link>
          </li>
        </ul>

        <ul>
          <StyledColTitle>NAWIGACJA</StyledColTitle>
          <li>
            <Link to='#'>usługi</Link>
          </li>
          <li>
            <Link to='#'>stylistki</Link>
          </li>
          <li>
            <Link to='#'>blog</Link>
          </li>
          <li>
            <FontAwesomeIcon icon={faFacebook} />
            <FontAwesomeIcon icon={faInstagram} />
            <FontAwesomeIcon icon={faGoogle} />
          </li>
        </ul>

        <ul>
          <StyledColTitle>POMOC</StyledColTitle>
          <li>
            <Link to='#'>faq</Link>
          </li>
          <li>
            <Link to='#'>regulamin</Link>
          </li>
          <li>
            <Link to='#'>standard usług</Link>
          </li>
        </ul>

        <div>
          <StyledColTitle>NEWSLETTER</StyledColTitle>
          <FormsGroup placeholder='Twój email' btnText='Zapisz się' />
        </div>
      </StyledContainer>
    );
  }
  return (
    <StyledContainerFull>
      {content}
      <StyledText>
        Realizacja: <Link to='https://www.webite.pl/'>WEBite.pl</Link>
      </StyledText>
    </StyledContainerFull>
  );
};

export default Footer;
