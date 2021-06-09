import styled from "styled-components";

export const StyledContainer = styled.div`
  width: 90%;
  max-width: 30rem;
  padding: 5rem 0;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const StyledSubtitle = styled.h2`
  font-family: ${({ theme }) => theme.fonts.secondary};
  font-size: 2.4rem;
  font-weight: 500;
  margin-bottom: 1.5rem;
  text-align: center;
`;
