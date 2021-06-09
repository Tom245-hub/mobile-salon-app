import styled from "styled-components";

export const StyledContainer = styled.div`
  width: 100%;
  padding: 3rem 0;
`;

export const StyledTitle = styled.h2`
  font-family: ${(props) => props.theme.fonts.secondary};
  font-size: 2.2rem;
  font-weight: 400;
  margin-bottom: 3rem;
  text-align: center;
`;
