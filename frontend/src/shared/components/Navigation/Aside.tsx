import { useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import {
  StyledContainer,
  StyledNavLink,
  StyledSubmenu,
  StyledImage,
  StyledTitle,
  StyledText,
  StyledLine,
} from "./Aside.css";
import { RootState } from "../../data/reducers/rootReducers";
import PersonalDataPage from "../../../user/pages/PersonalDataPage";

const Aside: React.FC = () => {
  const [isOpenOrders, setIsOpenOrders] = useState<boolean>(false);
  const user = useSelector((state: RootState) => state.user);
  const stylist = useSelector((state: RootState) => state.stylist);
  // console.log(stylist.stylist.personalData.firstName);

  let content;
  if (user.isLogged && user.user.user.accessLevel === 1) {
    content = (
      <>
        <StyledImage src={user.user.user.stylistData.profileData.img} />
        <StyledTitle>
          {stylist.stylist.personalData.firstName} {stylist.stylist.personalData.lastName}
        </StyledTitle>
        <StyledText>{stylist.stylist.personalData.email}</StyledText>
      </>
    );
  } else if (user.isLogged && user.user.user.accessLevel === 2) {
    content = (
      <>
        <StyledTitle>
          {user.user.user.clientData.firstName} {user.user.user.clientData.lastName}
        </StyledTitle>
        <StyledText>{user.user.user.clientData.email}</StyledText>
      </>
    );
  }

  ///////////////////////////

  return (
    <StyledContainer>
      {content}
      <StyledLine />
      <ul>
        <li>
          <StyledNavLink to='/panel/'>Dashboard</StyledNavLink>
        </li>
        <li>
          <StyledNavLink to='/panel/dane'>Twoje dane</StyledNavLink>
        </li>
        <li>
          <StyledNavLink
            to='/panel/zamowienia'
            onClick={() => setIsOpenOrders((prev) => !prev)}
            isOpen={isOpenOrders}
          >
            Zamówienia <FontAwesomeIcon icon={faChevronDown} />
          </StyledNavLink>
          <StyledSubmenu isOpen={isOpenOrders}>
            <li>
              <StyledNavLink variant='sub' to='/'>
                nowe
              </StyledNavLink>
            </li>
            <li>
              <StyledNavLink variant='sub' to='/'>
                oczekujące
              </StyledNavLink>
            </li>
            <li>
              <StyledNavLink variant='sub' to='/'>
                opłacone
              </StyledNavLink>
            </li>
            <li>
              <StyledNavLink variant='sub' to='/'>
                archiwalne
              </StyledNavLink>
            </li>
          </StyledSubmenu>
        </li>

        <li>
          <StyledNavLink to='/'>Profil</StyledNavLink>
        </li>
        <li>
          <StyledNavLink to='/'>Ustawienia</StyledNavLink>
        </li>
      </ul>
    </StyledContainer>
  );
};

export default Aside;
