import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const StyledContainerImage = styled.div`
  position: relative;
  padding-top: ${(props) => props.height};
  overflow: hidden;
  margin: ${(props) => props.margin};
`;

const StyledBoxImage = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
`;

const StyledImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Image = ({ margin, height, img, alt = "Mobile Salon", title = "Mobile Salon" }) => {
  return (
    <StyledContainerImage margin={margin} height={height}>
      <StyledBoxImage>
        <StyledImage src={img} alt={alt || title} />
      </StyledBoxImage>
    </StyledContainerImage>
  );
};

Image.propTypes = {
  height: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
};

export default Image;
