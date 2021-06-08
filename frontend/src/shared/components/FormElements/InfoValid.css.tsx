import styled from "styled-components";

interface StyledInputProps {
  margin?: string;
}

const RootInfoValid = styled.div<StyledInputProps>`
  width: 100%;
  border-radius: 5px;
  padding: 0.5rem;
  margin: ${({ margin }) => (margin ? margin : "0 0 0.5rem 0")};
  grid-column: 1/3;
`;

export const StyledInfoValidNegative = styled(RootInfoValid)`
  background-color: ${({ theme }) => theme.colors.secondary.light};
  color: ${({ theme }) => theme.colors.danger};
  border: 2px solid ${({ theme }) => theme.colors.danger};
`;

export const StyledInfoValidPositive = styled(RootInfoValid)`
  background-color: #fff;
  color: ${({ theme }) => theme.colors.success};
  border: 2px solid ${({ theme }) => theme.colors.success};
`;

export const StyledText = styled.h4`
  font-size: 1rem;
  font-weight: 600;
`;
