import styled from "styled-components";

export const StyledContainerFull = styled.div`
  width: 100%;
  background-color: ${(props) => props.theme.colors.secondary.light};
`;

export const StyledContainer = styled.div`
  width: 100%;
  max-width: 1320px;
  margin: 0 auto;
  padding: 3rem 0;
`;

export const StyledTitle = styled.h2`
  font-family: ${(props) => props.theme.fonts.secondary};
  font-size: 2.2rem;
  font-weight: 400;
  margin-bottom: 3rem;
  text-align: center;
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
