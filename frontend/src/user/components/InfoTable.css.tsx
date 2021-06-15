import styled from "styled-components";

interface StyledBoxIconProps {
  variant: "see" | "check";
}

export const StyledTable = styled.table`
  background-color: ${({ theme }) => theme.colors.primary.light};
  border-collapse: collapse;
  padding: 0.5rem 1rem;
  grid-column: 1/5;
  box-shadow: 0 0 3px ${({ theme }) => theme.colors.gray.dark};

  td,
  th {
    border: 1px solid ${({ theme }) => theme.colors.gray.light};
    padding: 8px;
  }
`;

export const StyledBoxIcon = styled.div<StyledBoxIconProps>`
  width: 2rem;
  height: 2rem;
  background-color: ${({ theme, variant }) =>
    variant === "see" ? theme.colors.info : theme.colors.success};
  color: ${({ theme }) => theme.colors.primary.dark};
  border-radius: 5px;
  margin-right: 0.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  float: left;
`;
