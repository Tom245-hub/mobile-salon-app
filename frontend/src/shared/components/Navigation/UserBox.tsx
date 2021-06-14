import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { RootState } from "../../data/reducers/rootReducers";
import { openLoginForm } from "../../data/actions/loginFormActions";
import { logoutUser } from "../../data/actions/userActions";

import Button from "../FormElements/Button";
import LoginForm from "../../../user/components/LoginForm";

import { StyledContainer, StyledLink } from "./UserBox.css";

const UserBox: React.FC = () => {
  const dispatch = useDispatch();
  const isOpenLoginForm = useSelector(
    (state: RootState) => state.loginForm.isOpenLoginForm
  );
  const user = useSelector((state: RootState) => state.user);

  if (user.isLogged && user.user.user.accessLevel === 1) {
    return (
      <StyledContainer>
        <StyledLink onClick={() => dispatch(logoutUser())}>
          <FontAwesomeIcon icon={faUser} />
          WYLOGUJ
        </StyledLink>
      </StyledContainer>
    );
  } else if (user.isLogged && user.user.user.accessLevel === 2) {
    return (
      <>
        {isOpenLoginForm && <LoginForm />}
        <StyledContainer>
          <StyledLink onClick={() => dispatch(logoutUser())}>
            <FontAwesomeIcon icon={faUser} />
            WYLOGUJ
          </StyledLink>

          <Button link='/strefa-klientki/zamowienie'>ZAREZERWUJ</Button>
        </StyledContainer>
      </>
    );
  } else {
    return (
      <>
        {isOpenLoginForm && <LoginForm />}
        <StyledContainer>
          <StyledLink onClick={() => dispatch(openLoginForm())}>
            <FontAwesomeIcon icon={faUser} />
            ZALOGUJ
          </StyledLink>

          <Button link='/strefa-klientki/zamowienie'>ZAREZERWUJ</Button>
        </StyledContainer>
      </>
    );
  }
};

export default UserBox;
