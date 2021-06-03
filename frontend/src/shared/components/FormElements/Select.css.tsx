import styled from "styled-components";

export const StyledSelect = styled.select`
  font-size: 1rem;
  width: 100%;
  border-radius: 5px;
  color: ${({ theme }) => theme.colors.gray};
  border 1px solid
    ${({ theme }) => theme.colors.gray.light};
  padding: 0.5rem 1.5rem;
  margin-bottom: 0.5rem;
`;
