import React from "react";
import styled from "styled-components";

const StyledCommentText = styled.h1`
  font-size: 0.9rem;
  font-weight: 700;
  color: ${(props) => props.theme.colors.dark};
  text-align: center;
  margin: 1rem 0;
`;

const CommentText = ({ children }) => {
  return <StyledCommentText>{children}</StyledCommentText>;
};

export default CommentText;
