import React, { Children } from "react";
import styled from "styled-components";

const ContainerImage = styled.div`
  position: relative;
  padding-top: ${(props) => props.height};
  overflow: hidden;
  margin: ${(props) => props.margin};
`;

const BoxImage = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const Image = (props) => {
  return (
    <ContainerImage margin={props.margin} height={props.height}>
      <BoxImage>
        <img src={props.img} alt={props.alt || props.title} />
      </BoxImage>
    </ContainerImage>
  );
};

export default Image;
