import styled from "styled-components";

export const StyledContainerFull = styled.footer`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.secondary.light};
  border-top: 1px solid ${({ theme }) => theme.colors.gray.light};
`;

export const StyledContainer = styled.footer`
  width: 100%;
  max-width: 1320px;
  margin: 0 auto;
  padding: 2rem 0;
  display: grid;
  grid-template-columns: 22.5% 22.5% 22.5% 32.5%;
  grid-gap: 1rem;
`;

export const StyledColTitle = styled.h5`
  font-size: 1rem;
  font-weight: 600;
  margin-bottom: 1rem;
`;

export const StyledText = styled.h6`
  font-size: 1rem;
  font-weight: 400;
  text-align: center;
`;
