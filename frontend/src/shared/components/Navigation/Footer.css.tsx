import styled from "styled-components";

export const StyledContainerFull = styled.footer`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.secondary.light};
  border-top: 1px solid ${({ theme }) => theme.colors.gray.light};

  h6 {
    text-align: center;
  }
`;

export const StyledContainer = styled.footer`
  width: 100%;
  max-width: 1320px;
  margin: 0 auto;
  padding: 2rem 0;
  display: grid;
  grid-template-columns: 22.5% 22.5% 22.5% 32.5%;
  grid-gap: 1rem;

  h5 {
    margin-bottom: 1rem;
  }

  svg {
    margin-right: 0.5rem;
  }
`;
