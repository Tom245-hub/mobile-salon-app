import styled from "styled-components";

export const StyledContainer = styled.div`
  width: 90%;
  max-width: 40rem;
  margin: 3rem auto;
`;

export const StyledTitle = styled.h1`
  font-family: ${({ theme }) => theme.fonts.secondary};
  font-size: 2.6rem;
  font-weight: 500;
  text-align: center;
  margin-bottom: 0.5rem;
`;
export const StyledComment = styled.h4`
  display: block;
  width: 70%;
  font-size: 0.8rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.gray.normal};
  text-align: center;
  margin-bottom: 1rem;
  margin: 0 auto 1rem auto;
`;

export const StyledForm = styled.form`
  border: 2px solid ${({ theme }) => theme.colors.secondary.light};
  padding: 2rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  grid-gap: 0.5rem;
`;

export const StyledSubtitle = styled.h3`
  grid-column: 1/3;
`;

export const StyledText = styled.h6`
  font-size: 1rem;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.gray.normal};
`;

export const StyledCommentText = styled.h6`
  font-size: 0.8rem;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.gray.normal};
  margin-bottom: 1rem;
  text-align: justify;
`;

export const StyledLine = styled.hr`
  border-top: 2px solid ${({ theme }) => theme.colors.secondary.light};
  margin: 1rem 0;
  grid-column: 1/3;
`;

export const StyledBox = styled.div`
  grid-column: 1/3;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
