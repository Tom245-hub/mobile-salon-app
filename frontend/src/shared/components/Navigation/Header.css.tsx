import styled from "styled-components";

export const StyledContainerHeader = styled.header`
  // height: 5rem;
  background-color: ${({ theme }) => theme.colors.secondary.light};
  padding: 0 0.5rem;
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray.light};
  border-top: 1px solid ${({ theme }) => theme.colors.gray.light};
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  z-index: 15;
`;

export const StyledLogoLink = styled.a`
  height: 5rem;
  img {
    height: 100%;
  }
`;

export const StyledLink = styled.a`
  display: none;
  @media (max-width: 768px) {
    display: block;
  }
`;
