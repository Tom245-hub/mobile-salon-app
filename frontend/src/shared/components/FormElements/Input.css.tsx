import styled from "styled-components";

interface StyledInputProps {
  margin?: string;
}
export const StyledInput = styled.input<StyledInputProps>`
  font-size: 1rem;
  width: 100%;
  border-radius: 5px;
  color: ${({ theme }) => theme.colors.gray};
  border 1px solid
    ${({ theme }) => theme.colors.gray.light};
  padding: 0.5rem 1.5rem;
  margin: ${({ margin }) => (margin ? margin : "0 0 0.5rem 0")};
  :focus-visible {
    outline: none;
  }
`;
