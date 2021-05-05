import React from "react";
import styled from "styled-components";

const StyledContainer = styled.div`
  h2 {
    font-family: ${(props) => props.theme.fonts.secondary};
    font-size: 2.4rem;
    font-weight: 500;
    color: ${(props) => props.theme.colors.dark};
    margin-bottom: 0.6rem;
  }

  h3 {
    font-size: 1.2rem;
    font-weight: 500;
    color: ${(props) => props.theme.colors.gray};
    margin-bottom: 0.6rem;
  }

  h4 {
    font-size: 1.4rem;
    font-weight: 500;
    color: ${(props) => props.theme.colors.grayLight};
    margin-bottom: 0.6rem;
  }

  h5 {
    font-size: 1rem;
    font-weight: 400;
    color: ${(props) => props.theme.colors.dark};
  }
`;

const StylistProfileText = (props) => {
  const hairStylist = props.stylist && props.stylist.position.hairStylist && "fryzjerka";
  const makeupStylist = props.stylist && props.stylist.position.makeupStylist && "wizażystka";

  return (
    <StyledContainer>
      <h2>{props.stylist.title}</h2>
      <h3>
        {hairStylist} {makeupStylist}
      </h3>
      <h3>{props.stylist.city}</h3>
      <h4>Doświadczenie: {props.stylist.experience} lat</h4>
      <h5>{props.stylist.text}</h5>
    </StyledContainer>
  );
};

export default StylistProfileText;
