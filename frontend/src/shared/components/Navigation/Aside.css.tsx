import { Link } from "react-router-dom";
import styled from "styled-components";

interface StyledSubmenuProps {
  isOpen?: boolean;
}

interface StyledNavLinkProps {
  isOpen?: boolean;
  variant?: "sub";
}

export const StyledContainer = styled.aside`
  width: 20%;
  min-width: 14rem;
  background-color: ${({ theme }) => theme.colors.secondary.light};
  padding: 1rem 0;
  border-right: 1px solid ${({ theme }) => theme.colors.gray.light};
  box-shadow: 0 0 5px ${({ theme }) => theme.colors.gray.dark};
`;

export const StyledNavLink = styled(Link)<StyledNavLinkProps>`
  font-size: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${({ variant }) => (variant === "sub" ? "0 0.5rem" : "0.5rem 1rem")};

  :hover {
    background-color: ${({ theme, variant }) =>
      variant === "sub" ? "" : theme.colors.primary.normal};
    color: ${({ theme, variant }) =>
      variant === "sub" ? "" : theme.colors.primary.light};
  }

  svg {
    color: ${({ theme }) => theme.colors.gray.normal};
    transition: 0.2s ease-in-out;
    transform: ${({ isOpen }) => isOpen && "rotate(180deg)"};
  }
`;

export const StyledSubmenu = styled.ul<StyledSubmenuProps>`
  font-size: 1rem;
  margin-left: 1rem;
  transition: 0.5s ease-in-out;
  display: ${({ isOpen }) => (isOpen ? "block" : "none")};
`;

export const StyledImage = styled.img`
  width: 90%;
  margin: 0 5%;
`;

export const StyledTitle = styled.h4`
  font-size: 1rem;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.primary.dark};
  text-align: center;
`;

export const StyledText = styled.h5`
  font-size: 0.8rem;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.gray.normal};
  text-align: center;
`;

export const StyledLine = styled.hr`
  border-top: 1px solid ${({ theme }) => theme.colors.gray.light};
  margin: 1rem 0;
`;
