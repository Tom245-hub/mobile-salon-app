import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import Image from './Image';

const Container = styled.div`
  height: 100%;
  transition: .2s ease-in-out;


  h2 {
    font-size: 18px;
    font-weight: 700;
    color: ${props => props.theme.colors.dark};
  }

  h3 {
    font-size: 14px;
    font-weight: 400;
    color: ${props => props.theme.colors.primary};
  }

  &:hover {
    background-color: ${props => props.bgColorHover && props.theme.colors.warning};
  }

  &:hover {
    .image-box {
      transform: scale(1.1);
    }
  }

`;


const Card = (props) => {

  const title = props.title && <h2 className="px-2 py-4">{props.title}</h2>;
  const text = props.text && <h3 className="px-2 py-2">{props.text}</h3>;

  return (
    <Link to={props.url}>
      <Container bgColorHover={props.bgColorHover} >

        <Image 
          height='60%'
          title={props.title}
          img={props.img}
        />

        {title}
        {text}

      </Container>
    </Link>
  )
}

export default Card;