import React from "react";
import styled from "styled-components";

const StyledContainerSubmenu = styled.div`
  border-top: 1px solid rgba(#111, 0.2);
  border-bottom: 1px solid rgba(#111, 0.2);
  position: absolute;
  top: 100%;
  left: 0;
  z-index: 2;
  overflow: hidden;
  display: none;
`;

const ContainerSubmenu = (props) => {
  return (
    <>
      <StyledContainerSubmenu className={"container-fluid bg-white py-5" + (props.activeSubmenu === props.id ? " d-block" : "")} onMouseLeave={props.handleMouseLeave}>
        <div className='row w-100 d-flex justify-content-around px-5'>{props.children}</div>
      </StyledContainerSubmenu>
    </>
  );
};

export default ContainerSubmenu;
