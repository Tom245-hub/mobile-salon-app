import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import Image from "./Image";
import CardTitle from "./CardTitle";

const ContainerCard = styled.div`
  height: 100%;
  transition: 0.5s ease-in-out;
  margin: ${(props) => props.margin};

  h3 {
    font-size: 14px;
    font-weight: 400;
    color: ${(props) => props.theme.colors.primary};
  }

  &:hover {
    background-color: ${(props) => props.bgColorHover && props.theme.colors.primary};
    h2 {
      color: ${(props) => props.bgColorHover && props.theme.colors.graySuperLight};
    }
  }
`;

const Card = (props) => {
  return (
    <Link to={props.url}>
      <ContainerCard margin={props.margin} bgColorHover={props.bgColorHover}>
        <Image scale={true} height='60%' title={props.title} img={props.img} />
        {props.title && <CardTitle className='px-2 py-4'>{props.title}</CardTitle>}
        {props.text && <h3 className='px-2 py-2'>{props.text}</h3>}
      </ContainerCard>
    </Link>
  );
};

export default Card;
