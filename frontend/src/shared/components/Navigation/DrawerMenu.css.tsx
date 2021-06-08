import { Link } from "react-router-dom";
import styled from "styled-components";

interface StyledDrawerMenuProps {
  isEnterSlide: boolean;
}

interface StyledLinkProps {
  margin: string;
}

interface StyledSubmenuProps {
  isOpen?: boolean;
}

interface StyledNavLinkProps {
  isOpen?: boolean;
}

export const StyledDrawerMenu = styled.div<StyledDrawerMenuProps>`
  position: absolute;
  top: 0;
  left: ${({ isEnterSlide }) => (isEnterSlide ? "0" : "-50%")};
  width: 400px;
  height: 100%;
  background: ${({ theme }) => theme.colors.gray.light};
  display: flex;
  flex-direction: column;
  z-index: 25;
  transition: 0.5s ease-in-out;
`;

export const StyledHeader = styled.header`
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray.normal};
  padding: 0.5rem 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const StyledSection = styled.section`
  padding: 1rem;
  display: flex;
  flex-grow: 1;
  justify-content: space-between;
  align-items: flex-start;
`;

export const StyledFooter = styled.footer`
  border-top: 1px solid ${({ theme }) => theme.colors.gray.normal};
  padding: 0.5rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const StyledLogoLink = styled.a`
  height: 3rem;
  display: flex;
  img {
    height: 100%;
  }
`;

export const StyledLink = styled.a<StyledLinkProps>`
  cursor: pointer;

  svg {
    margin: ${({ margin }) => margin};
  }
`;

export const StyledNavLink = styled(Link)<StyledNavLinkProps>`
  font-size: 1.4rem;
  display: flex;
  justify-content: space-between;

  svg {
    color: ${({ theme }) => theme.colors.gray.normal};
    transition: 0.2s ease-in-out;

    transform: ${({ isOpen }) => isOpen && "rotate(180deg)"};
  }
`;

export const StyledMenu = styled.ul`
  width: 100%;
`;

export const StyledSubmenu = styled.ul<StyledSubmenuProps>`
  font-size: 1rem;
  margin-left: 1rem;
  transition: 0.5s ease-in-out;
  display: ${({ isOpen }) => (isOpen ? "block" : "none")};
`;

export const StyledSubmenuLink = styled(Link)`
  display: flex;
  align-items: center;
`;

export const StyledIcon = styled.img`
  height: 2rem;
  margin-right: 0.5rem;
`;
