import React from "react";
import { Link } from "react-router-dom";
import Image from "./Image";
import { StyledContainerCard } from "./Card.css";

interface CardProps {
  url: string;
  margin: string;
  title: string;
  img: string;
  text?: string;
}

const Card: React.FC<CardProps> = ({ url, margin, title, img, text }) => {
  return (
    <StyledContainerCard margin={margin}>
      <Link to={url}>
        <Image paddingTop='60%' img={img} margin='0' alt={title} />
        {title && <h2>{title}</h2>}
      </Link>
    </StyledContainerCard>
  );
};

export default Card;
