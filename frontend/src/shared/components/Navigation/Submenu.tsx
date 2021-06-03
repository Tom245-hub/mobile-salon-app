import React from "react";
import { StyledSubmenu } from "./Submenu.css";

interface SubmenuProps {
  activeSubmenu: number;
  id: number;
  handleMouseLeave: Function;
}

const Submenu: React.FC<SubmenuProps> = ({
  id,
  activeSubmenu,
  handleMouseLeave,
  children,
}) => {
  return (
    <StyledSubmenu
      idSubmenu={id}
      activeSubmenu={activeSubmenu}
      onMouseLeave={() => handleMouseLeave(0)}
    >
      {children}
    </StyledSubmenu>
  );
};

export default Submenu;
