import styled from "styled-components";

export const StyledBoxSmall = styled.div`
  background-color: ${({ theme }) => theme.colors.primary.light};
  border-radius: 5px;
  padding: 0.5rem 1rem;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  align-items: center;
  box-shadow: 0 0 3px ${({ theme }) => theme.colors.gray.dark};
`;

export const StyledBoxIcon = styled.div`
  width: 4rem;
  height: 4rem;
  background-color: white;
  border-radius: 50%;
  padding: 0.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 2px 2px 5px ${({ theme }) => theme.colors.gray.dark};

  svg {
    font-size: 2rem;
  }
`;

export const StyledBoxCount = styled.h3`
  font-size: 1.4rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.secondary.dark};
  text-align: right;
`;

export const StyledBoxTitle = styled.h3`
  font-size: 1rem;
  font-weight: 600;
  text-align: right;
`;

export const StyledBoxText = styled.h5`
  font-size: 0.8rem;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.gray.normal};
  text-align: right;
`;
