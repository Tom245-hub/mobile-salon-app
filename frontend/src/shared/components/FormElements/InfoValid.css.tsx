import styled from "styled-components";

export const StyledBox = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.warning};
  color: ${({ theme }) => theme.colors.primary.dark};
  border-radius: 5px;
  padding: 0.5rem 1.5rem;
  margin-bottom: 0.5rem;
`;

export const StyledText = styled.h4`
  font-size: 1rem;
  font-weight: 600;
`;
