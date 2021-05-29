import styled from "styled-components";

interface StyledContainerImageProps {
  paddingTop: string;
  margin: string;
}

export const StyledContainerImage = styled.div<StyledContainerImageProps>`
  position: relative;
  padding-top: ${({ paddingTop }) => paddingTop};
  overflow: hidden;
  margin: ${({ margin }) => margin};
`;

export const StyledBoxImage = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
`;

export const StyledImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: 0.5s all ease-in-out;
`;
