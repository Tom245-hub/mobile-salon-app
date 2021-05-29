import React from "react";
import { StyledContainerImage, StyledBoxImage, StyledImage } from "./Image.css";

interface ImageProps {
  margin: string;
  paddingTop: string;
  img: string;
  alt: string;
}

const Image: React.FC<ImageProps> = ({
  margin,
  paddingTop,
  img,
  alt = "Mobile Salon",
}) => {
  return (
    <StyledContainerImage margin={margin} paddingTop={paddingTop}>
      <StyledBoxImage>
        <StyledImage src={img} alt={alt} />
      </StyledBoxImage>
    </StyledContainerImage>
  );
};

export default Image;
