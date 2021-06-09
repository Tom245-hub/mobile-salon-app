import styled from "styled-components";

export const StyledContainer = styled.div`
  width: 100%;
  max-width: 1320px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 5rem 0;
`;

export const StyledBox = styled.div`
  background: ${({ theme }) => theme.colors.secondary.light};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const StyledTitle = styled.h1`
  font-size: 2.4rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.primary.dark};
  text-align: center;
  text-transform: uppercase;
`;
export const StyledSubtitle = styled.h2`
  font-family: ${({ theme }) => theme.fonts.artist};
  font-size: 2.2rem;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.gray.normal};
  margin-bottom: 1.5rem;
  text-align: center;
`;

export const StyledText = styled.h3`
  font-size: 1rem;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.gray.dark};
  margin-bottom: 1rem;
  text-align: center;
  display: block;
  margin: 0 2rem;
`;
