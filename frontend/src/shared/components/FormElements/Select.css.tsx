import styled from "styled-components";

interface StyledSelectProps {
  margin?: string;
}

export const StyledSelect = styled.select<StyledSelectProps>`
  font-size: 1rem;
  width: 100%;
  border-radius: 5px;
  color: ${({ theme }) => theme.colors.gray};
  border 1px solid
    ${({ theme }) => theme.colors.gray.light};
  padding: 0.5rem 1.5rem;
   margin: ${({ margin }) => (margin ? margin : "0 0 0.5rem 0")};
`;
