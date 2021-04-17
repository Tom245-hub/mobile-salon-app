import React from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';

import styled from 'styled-components';

const Box = styled.div`
    width: 35px;
    height: 35px;
    font-size: 30px;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    background: #FFF;
    border-radius: 50%;
    cursor: pointer;
    z-index: 1;

    &.slick-prev{
        left: 20px;
    }

    &.slick-next{
        right: 20px;
    }

    svg {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }

`;

const PrevArrow = ({ className, style, onClick }) => {
  return (
      <Box
          className={className}
          style={{ ...style, display: "block" }}
          onClick={onClick}
      >
          <FontAwesomeIcon icon={faAngleLeft} />
      </Box>

  );
}

export default PrevArrow;

