import styled from "styled-components";

interface StyledRootButtonProps {
  margin?: string;
}

const RootButton = styled.button<StyledRootButtonProps>`
  font-family: ${({ theme }) => theme.fonts.secondary};
  font-size: 1.4rem;
  weight: 400;
  padding: 0.5rem 1.5rem;
  margin: ${({ margin }) => margin};
  transition: 1s ease-in-out;
  cursor: pointer;
  border: none;
  border-radius: 5px;
`;

export const StyledConfirmButton = styled(RootButton)`
  color: ${({ theme }) => theme.colors.gray.light};
  background-color: ${({ theme }) => theme.colors.secondary.normal};
  &:hover {
    color: ${({ theme }) => theme.colors.gray.light};
    background-color: ${({ theme }) => theme.colors.secondary.dark};
    background-image: radial-gradient(
      ${({ theme }) => theme.colors.secondary.normal},
      ${({ theme }) => theme.colors.secondary.dark}
    );
  }
`;

export const StyledCancelButton = styled(RootButton)`
  color: ${({ theme }) => theme.colors.primary.dark};
  background-color: ${({ theme }) => theme.colors.gray.light};
  &:hover {
    color: ${({ theme }) => theme.colors.primary.dark};
    background-color: ${({ theme }) => theme.colors.gray.normal};
    background-image: radial-gradient(
      ${({ theme }) => theme.colors.gray.normal},
      ${({ theme }) => theme.colors.gray.dark}
    );
  }
`;

export const StyledButton = styled(RootButton)`
  color: ${({ theme }) => theme.colors.gray.light};
  background-color: ${({ theme }) => theme.colors.secondary.normal};
  &:hover {
    color: ${({ theme }) => theme.colors.gray.light};
    background-color: ${({ theme }) => theme.colors.secondary.dark};
    background-image: radial-gradient(
      ${({ theme }) => theme.colors.secondary.normal},
      ${({ theme }) => theme.colors.secondary.dark}
    );
  }
`;
