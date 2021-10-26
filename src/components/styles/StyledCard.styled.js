import styled from "styled-components";

export const StyledCard = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  transition: 0.3s;
  background-color: rgba(255, 255, 255, 0.07);
  box-shadow: 0 0 15px 3px rgba(0, 0, 0, 0.15);
  height: 100%;
  max-height: 350px;
  &:hover {
    transform: scale(110%);
  }
`;
export const CardMedia = styled.div`
  width: 100%;
  height: 250px;
`;
export const CardImg = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  background-size: cover;
  background-repeat: no-repeat;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
`;
export const CardBody = styled.div`
  text-align: left;
  padding: 10px;
  & h5 {
    margin: 0;
  }
  & small {
    margin-bottom: 0;
    font-size: 0.8em;
  }
`;
