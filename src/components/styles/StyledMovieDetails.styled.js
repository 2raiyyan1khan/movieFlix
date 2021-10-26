import styled from "styled-components";

export const MovieTitle = styled.h1`
  color: ${({ theme }) => theme.colors.heading};
  font-weight: 700;
  margin-bottom: 1rem;
  text-align: left;
`;
export const MovieSubTitle = styled.h3`
  color: ${({ theme }) => theme.colors.heading};
  font-weight: 700;
  margin-bottom: 1rem;
  text-align: left;
`;
export const MovieType = styled.small`
  text-transform: uppercase;
  border-radius: 5px;
  padding: 3px 8px;
  background-color: #f59e0b;
  color: black;
  font-weight: bold;
  font-size: 0.8em;
  margin-bottom: 0.8em;
`;
export const TopContainer = styled.div`
  text-align: left;
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 1.5rem;
  & img {
    display: block;
    background-size: cover;
    background-repeat: no-repeat;
    width: 100%;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
    border-radius: 10px;
  }
  & p {
    margin-bottom: 0.3em;
  }
  & span {
    margin-right: 0.5em;
  }

  @media only screen and (max-width: 600px) {
    grid-template-columns: 100%;
  }
`;
export const Ratings = styled.span`
  background-color: #eab308;
  padding: 5px 10px;
  border-radius: 5px;
  color: black;
  font-weight: bold;
`;
export const Votes = styled.span`
  background-color: #14b8a6;
  color: black;
  font-weight: bold;
  padding: 5px 10px;
  border-radius: 5px;
`;
export const Hr = styled.div`
  border-top: 1.5px solid rgba(255, 255, 255, 0.15);
  margin: 40px 0;
`;
export const PlotContainer = styled.div`
  text-align: justify;
`;
export const CastContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;
`;
export const ExtraContainer = styled.div`
  text-align: left;
`;
export const CastList = styled.ul`
  text-align: left;
`;
export const CrewList = styled.ul`
  text-align: left;
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 1.5rem;
`;
export const ExtraList = styled.ul`
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 1.5rem;
`;
export const Li = styled.li`
  padding: 12px 0;
  /* border-top: 1.5px solid rgba(255, 255, 255, 0.15); */
`;
