import React, { Children } from 'react';
import styled from 'styled-components';

const ImageBox = styled.div`
  position: relative;
  padding-top: ${props => props.height};
  overflow: hidden;

  .image-box {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    transition: .5s ease-in-out;

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
  }
`;


const Image = (props) => {

  return (
    <ImageBox height={props.height}>
      <div className="image-box">
        <img src={props.img} alt={props.alt || props.title}/>
      </div>
    </ImageBox>
  )
}

export default Image;