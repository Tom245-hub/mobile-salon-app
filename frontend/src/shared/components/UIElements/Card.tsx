import React from "react";
import { Link } from "react-router-dom";
import Image from "./Image";
import { StyledContainer, StyledTitle } from "./Card.css";

interface CardProps {
  url: string;
  margin: string;
  title: string;
  img: string;
}

const Card: React.FC<CardProps> = ({ url, margin, title, img }) => {
  return (
    <StyledContainer margin={margin}>
      <Link to={url}>
        <Image paddingTop='60%' img={img} margin='0' alt={title} />
        <StyledTitle>{title}</StyledTitle>
      </Link>
    </StyledContainer>
  );
};

export default Card;
