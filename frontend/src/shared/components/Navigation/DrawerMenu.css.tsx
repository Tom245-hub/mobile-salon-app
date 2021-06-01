import styled from "styled-components";

export const StyledDrawerMenu = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 400px;
  height: 100%;
  background: ${({ theme }) => theme.colors.gray.light};
  padding: 1rem;
  z-index: 25;
`;
