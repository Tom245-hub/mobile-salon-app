import styled from "styled-components";

export const StyledDrawerMenu = styled.div`
  position: absolute;
  left: 0;
  top: 0
  bottom: 0;
  background: ${({ theme }) => theme.colors.gray.light};
  z-index: 110;
`;
