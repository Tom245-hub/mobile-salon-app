import styled from "styled-components";

export const StyledButton = styled.button`
  font-family: ${({ theme }) => theme.fonts.secondary};
  font-size: 1.4rem;
  weight: 400;
  color: ${({ theme }) => theme.colors.gray.light};
  background-color: ${({ theme }) => theme.colors.secondary.normal};
  border: none;
  border-radius: 5px;
  padding: 0.5rem 1.5rem;
  transition: 1s ease-in-out;
  &:hover {
    color: ${({ theme }) => theme.colors.gray.light};
    background-color: ${({ theme }) => theme.colors.secondary.dark};
    background-image: radial-gradient(
      ${({ theme }) => theme.colors.secondary.normal},
      ${({ theme }) => theme.colors.secondary.dark}
    );
  }
`;
