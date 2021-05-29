import styled from "styled-components";

export const StyledContainer = styled.div`
  width: 100%;
`;

export const StyledInfoValid = styled.div`
  width: 100%;
  font-size: 1rem;
  font-weight: 600;
  background-color: ${({ theme }) => theme.colors.warning};
  color: ${({ theme }) => theme.colors.primary.dark};
  border-radius: 5px;
  padding: 0.5rem 1.5rem;
  margin-bottom: 0.5rem;
`;

export const StyledInput = styled.input`
width: 100%;
  border-radius: 5px;
  color: ${({ theme }) => theme.colors.gray};
  border 1px solid
    ${({ theme }) => theme.colors.gray.light};
  padding: 0.5rem 1.5rem;
  margin-bottom: 0.5rem;
`;
