import React from "react";
import ReactDOM from "react-dom";

import { StyledBackdrop } from "./Backdrop.css";

interface BackdropProps {
  onClick: () => void;
}

const Backdrop: React.FC<BackdropProps> = ({ onClick }) => {
  return ReactDOM.createPortal(
    <StyledBackdrop onClick={onClick}></StyledBackdrop>,
    document.getElementById("backdrop-hook") as HTMLElement
  );
};

export default Backdrop;
