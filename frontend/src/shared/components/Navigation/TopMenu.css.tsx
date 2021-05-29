import styled from "styled-components";

export const StyledMenu = styled.ul`
  display: flex;
  @media (max-width: 768px) {
    display: none;
  }

  li {
    margin: 0 1rem;
  }
`;
