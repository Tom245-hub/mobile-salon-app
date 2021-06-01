import styled from "styled-components";

interface StyledContainerProps {
  margin: string;
}

export const StyledContainer = styled.div<StyledContainerProps>`
  background-color: ${({ theme }) => theme.colors.gray.light};
  margin: ${({ margin }) => margin};
  transition: 0.5s ease-in-out;

  img {
    opacity: 0.95;
  }

  &:hover {
    background-color: ${({ theme }) => theme.colors.primary.dark};
    box-shadow: 0 0 10px ${({ theme }) => theme.colors.gray.dark};

    h2 {
      color: ${({ theme }) => theme.colors.primary.light};
    }

    img {
      transform: scale(1.05);
    }
  }
`;

export const StyledTitle = styled.h2`
  font-family: ${({ theme }) => theme.fonts.secondary};
  font-size: 1.6rem;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.primary.dark};
  margin: 1rem 0;
  text-align: center;
`;
