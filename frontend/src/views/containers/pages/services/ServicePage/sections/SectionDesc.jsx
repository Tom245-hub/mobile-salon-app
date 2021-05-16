import React from "react";

import CommentText from "../../../../../components/fonts/CommentText";
import SectionTitle from "../../../../../components/fonts/SectionTitle";

const SectionDesc = ({ category }) => {
  return (
    <>
      <SectionTitle>{category.title}</SectionTitle>
      <CommentText>{category.text}</CommentText>
    </>
  );
};

export default SectionDesc;
