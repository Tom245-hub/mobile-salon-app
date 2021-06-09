import styled from "styled-components";

export const StyledContainer = styled.div`
  width: 100%;
  max-width: 1320px;
  margin: 0 auto;
  padding: 5rem 0;
`;

export const StyledText = styled.h4`
  font-family: ${(props) => props.theme.fonts.artist};
  font-size: 2rem;
  font-weight: 400;
  text-align: center;
`;

export const StyledBoxStars = styled.div`
  color: ${(props) => props.theme.colors.gold};
  display: flex;
  justify-content: center;
`;
