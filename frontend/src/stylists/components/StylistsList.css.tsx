import styled from "styled-components";

export const StyledContainer = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.secondary.light};
  padding: 5rem 1rem;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;
`;

export const StyledFilter = styled.ul`
  display: flex;
  justify-content: center;
  grid-column: 1/5;

  li {
    font-size: 1rem;
    font-weight: 500;
    margin: 0 1rem;
  }
`;
