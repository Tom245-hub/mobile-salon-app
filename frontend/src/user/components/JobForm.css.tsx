import styled from "styled-components";

export const StyledForm = styled.form`
  width: 90%;
  max-width: 40rem;
  border: 2px solid ${({ theme }) => theme.colors.secondary.light};
  margin: 3rem auto;
  padding: 2rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  grid-gap: 0.5rem;
`;

export const StyledSubtitle = styled.h3`
  grid-column: 1/3;
`;

export const StyledText = styled.h6`
  font-size: 1rem;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.gray.normal};
`;

export const StyledLine = styled.hr`
  border-top: 2px solid ${({ theme }) => theme.colors.secondary.light};
  margin: 1rem 0;
  grid-column: 1/3;
`;
