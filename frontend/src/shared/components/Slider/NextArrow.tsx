import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";

import { Box } from "./NextArrow.css";

interface NextArrowProps {
  className?: string;
  style?: object;
  onClick?: () => void;
}

const NextArrow: React.FC<NextArrowProps> = ({ className, style, onClick }) => {
  return (
    <Box
      className={className}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    >
      <FontAwesomeIcon icon={faAngleRight} />
    </Box>
  );
};

export default NextArrow;
