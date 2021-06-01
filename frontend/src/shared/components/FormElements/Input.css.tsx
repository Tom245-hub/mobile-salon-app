import styled from "styled-components";

export const StyledInput = styled.input`
  width: 100%;
  border-radius: 5px;
  color: ${({ theme }) => theme.colors.gray};
  border 1px solid
    ${({ theme }) => theme.colors.gray.light};
  padding: 0.5rem 1.5rem;
  margin-bottom: 0.5rem;
`;
