import { useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import {
  StyledContainer,
  StyledNavLink,
  StyledLink,
  StyledSubmenu,
  StyledImage,
  StyledTitle,
  StyledText,
  StyledLine,
} from "./Aside.css";
import { RootState } from "../../shared/data/reducers/rootReducers";
import { LOADING_STATES } from "../../shared/data/constans/commonConstans";

const Aside: React.FC = () => {
  const [isOpenOrders, setIsOpenOrders] = useState<boolean>(false);
  const user = useSelector((state: RootState) => state.user.data);
  const stylist = useSelector((state: RootState) => state.stylist.data);
  const statusStylist = useSelector((state: RootState) => state.stylist.loading.status);

  let content;
  if (statusStylist === LOADING_STATES.LOADED && user.accessLevel === 1) {
    content = (
      <>
        <StyledImage src={stylist.profileData.img} />
        <StyledTitle>
          {stylist.personalData.firstName} {stylist.personalData.lastName}
        </StyledTitle>
        <StyledText>{stylist.personalData.email}</StyledText>
      </>
    );
  } else if (user.accessLevel === 2) {
    content = (
      <>
        {/* <StyledTitle>
          {user.data.user.clientData.firstName} {user.data.user.clientData.lastName}
        </StyledTitle>
        <StyledText>{user.data.user.clientData.email}</StyledText> */}
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
          <StyledLink
            onClick={() => setIsOpenOrders((prev) => !prev)}
            isOpen={isOpenOrders}
          >
            Zamówienia <FontAwesomeIcon icon={faChevronDown} />
          </StyledLink>
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
