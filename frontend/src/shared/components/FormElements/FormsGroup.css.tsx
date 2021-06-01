import styled from "styled-components";

export const StyledBox = styled.div`
  display: flex;
`;

export const StyledInput = styled.input`
  font-size: 1rem;
  border-radius: 5px 0 0 5px;
  color: ${({ theme }) => theme.colors.gray};
  border 1px solid
    ${({ theme }) => theme.colors.gray.light};
  padding-left: 1rem;
`;

export const StyledButton = styled.button`
  border-radius: 0 5px 5px 0;
  font-family: ${({ theme }) => theme.fonts.secondary};
  font-size: 1.2rem;
  weight: 400;
  color: ${({ theme }) => theme.colors.gray.light};
  background-color: ${({ theme }) => theme.colors.secondary.normal};
  border: none;
  padding: 0.5rem 1.5rem;
  transition: 1s ease-in-out;
  cursor: pointer;
  &:hover {
    color: ${({ theme }) => theme.colors.gray.light};
    background-color: ${({ theme }) => theme.colors.secondary.dark};
    background-image: radial-gradient(
      ${({ theme }) => theme.colors.secondary.normal},
      ${({ theme }) => theme.colors.secondary.dark}
    );
  }
`;
