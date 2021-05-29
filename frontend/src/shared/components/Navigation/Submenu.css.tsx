import styled from "styled-components";

interface StyledSubmenuProps {
  activeSubmenu: number;
  idSubmenu: number;
}

export const StyledSubmenu = styled.div<StyledSubmenuProps>`
  width: 100%;
  display: ${({ activeSubmenu, idSubmenu }) =>
    activeSubmenu === idSubmenu ? "flex" : "none"};
  align-items: center;
  background-color: white;
  padding: 2rem 4rem;
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray.light};
  border-top: 1px solid ${({ theme }) => theme.colors.gray.light};
  box-shadow: 0 5px 10px ${({ theme }) => theme.colors.gray.light};
  position: absolute;
  top: 100%;
  left: 0;
  z-index: 10;
  overflow: hidden;

  > div {
    flex-basis: 20%;
    margin: 0 1rem;
  }
`;
