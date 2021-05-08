import React, { Children } from "react";
import styled from "styled-components";
import SliderInfo from "./SliderInfo";

const ContainerImage = styled.div`
  position: relative;
  padding-top: ${(props) => props.height};
  overflow: hidden;
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

const ImageHero = (props) => {
  return (
    <ContainerImage height={props.height}>
      <BoxImage>
        <img src={props.img} alt={props.alt || props.title} />
      </BoxImage>
      <SliderInfo title={props.title} />
    </ContainerImage>
  );
};

export default ImageHero;