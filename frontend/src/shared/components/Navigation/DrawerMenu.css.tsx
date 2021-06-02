import styled from "styled-components";

interface StyledDrawerMenuProps {
  isEnterSlide: boolean;
}

export const StyledDrawerMenu = styled.div<StyledDrawerMenuProps>`
  position: absolute;
  top: 0;
  left: ${({ isEnterSlide }) => (isEnterSlide ? "0" : "-50%")};
  width: 400px;
  height: 100%;
  background: ${({ theme }) => theme.colors.gray.light};
  padding: 1rem;
  z-index: 25;
  transition: 0.5s;
`;
