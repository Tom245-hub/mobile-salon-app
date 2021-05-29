import styled from "styled-components";

export const Box = styled.div`
  width: 35px;
  height: 35px;
  font-size: 30px;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: #fff;
  border-radius: 50%;
  cursor: pointer;
  z-index: 1;

  &.slick-prev {
    left: 20px;
  }

  &.slick-next {
    right: 20px;
  }

  svg {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;
