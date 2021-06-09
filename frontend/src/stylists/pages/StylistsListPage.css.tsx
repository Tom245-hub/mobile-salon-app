import styled from "styled-components";

export const StyledBox = styled.div`
  width: 100%;
  max-width: 50rem;
  margin: 5rem auto;
`;

export const StyledPageTitle = styled.h1`
  font-family: ${({ theme }) => theme.fonts.secondary};
  font-size: 2.6rem;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.primary.dark};
  text-align: center;
  margin-bottom: 2rem;
`;

export const StyledText = styled.h4`
  font-size: 1.2rem;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.gray.normal};
  text-align: center;
  margin-bottom: 1rem;
`;
