import styled from "styled-components";

export const StyledContainerFull = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.secondary.light};
  margin: 5rem 0;
  display: grid;
  grid-template-columns: repeat(2, 50%);
`;

export const StyledCol = styled.div`
  padding: 3rem 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  h3 {
    font-family: ${({ theme }) => theme.fonts.secondary};
    font-size: 2rem;
    font-weight: 500;
    color: ${({ theme }) => theme.colors.primary.dark};
    text-align: center;
    margin-bottom: 1rem;
  }

  h5 {
    font-size: 1.2rem;
    color: ${({ theme }) => theme.colors.primary.normal};
    text-align: center;
  }

  ul {
    width: 100%;
    display: flex;
    justify-content: space-around;
  }
`;
