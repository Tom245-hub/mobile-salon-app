import styled from "styled-components";

export const StyledContainer = styled.div`
  width: 30vw;
  background: white;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  border-radius: 5px;
  z-index: 20;
  position: fixed;
  top: 22vh;
  left: 50%;
  transform: translate(-50%, 0);
`;

export const StyledHeader = styled.header`
  width: 100%;
  padding: 1rem;
  background: ${({ theme }) => theme.colors.primary.dark};
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const StyledHeaderText = styled.h2`
  font-family: ${({ theme }) => theme.fonts.secondary};
  font-size: 1.6rem;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.primary.light};
`;

export const StyledIcon = styled.span`
  color: ${({ theme }) => theme.colors.primary.light};
  cursor: pointer;
`;

export const StyledSection = styled.section`
  padding: 1rem;
`;
