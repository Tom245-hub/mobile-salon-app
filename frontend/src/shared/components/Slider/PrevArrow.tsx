import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";

import { Box } from "./PrevArrow.css";

interface PrevArrowProps {
  className?: string;
  style?: object;
  onClick?: () => void;
}

const PrevArrow: React.FC<PrevArrowProps> = ({ className, style, onClick }) => {
  return (
    <Box
      className={className}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    >
      <FontAwesomeIcon icon={faAngleLeft} />
    </Box>
  );
};

export default PrevArrow;
