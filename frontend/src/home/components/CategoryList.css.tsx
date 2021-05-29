import styled from "styled-components";

export const StyledContainer = styled.div`
  width: 100%;
  max-width: 1320px;
  margin: 0 auto;
  padding: 5rem 0;

  h3 {
    font-family: ${({ theme }) => theme.fonts.secondary};
    font-size: 2rem;
    font-weight: 500;
    color: ${({ theme }) => theme.colors.primary.dark};
    text-align: center;
    margin-bottom: 3rem;
  }
`;

export const StyledRowCard = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 1rem;
`;

export const StyledRowZipcode = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 1rem;
  margin-bottom: 1rem;

  h5 {
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }
`;
