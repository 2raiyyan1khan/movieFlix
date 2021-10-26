import React from "react";
import { Link } from "react-router-dom";
import {
  CardBody,
  CardImg,
  CardMedia,
  StyledCard,
} from "./styles/StyledCard.styled";
import defaultImage from "../Assets/images/default.png";
const Card = ({ item: { imdbID, Poster, Title, Type } }) => {
  return (
    <StyledCard>
      <Link to={`/name/${Title}/id/${imdbID}`}>
        <CardMedia>
          <CardImg src={Poster !== "N/A" ? Poster : defaultImage} alt={Title} />
        </CardMedia>
      </Link>
      <CardBody>
        <small>{Type?.toUpperCase()}</small>
        <h5>{Title?.length > 50 ? `${Title?.substring(0, 50)}` : Title}</h5>
      </CardBody>
    </StyledCard>
  );
};

export default Card;
