import React, { useEffect } from "react";
import { useParams } from "react-router";
import { useGetMovieByIdMutation } from "../services/movieApi";
import Loading from "./Loading";
import { Container } from "./styles/Container.styled";
import { MainContent } from "./styles/MainContent.Styled";
import {
  CastContainer,
  CastList,
  CrewList,
  ExtraContainer,
  ExtraList,
  Hr,
  Li,
  List,
  MovieSubTitle,
  MovieTitle,
  MovieType,
  PlotContainer,
  Ratings,
  TopContainer,
  Votes,
} from "./styles/StyledMovieDetails.styled";

const MovieDetails = () => {
  const [fetchMovieById, movie] = useGetMovieByIdMutation();
  let { mId } = useParams();

  useEffect(() => {
    fetchMovieById(mId);
  }, [fetchMovieById, mId]);

  if (movie.isLoading) return <Loading />;

  return (
    <>
      <Container>
        <MainContent>
          <MovieTitle>{movie?.data?.Title}</MovieTitle>
          <TopContainer>
            <div>
              <img src={movie.data?.Poster} alt="" />
            </div>
            <div>
              <MovieType>{movie?.data?.Type}</MovieType>
              <p>{movie.data?.Genre}</p>
              <p>
                <span>{movie.data?.Released}</span>
                <span>|</span>
                <span>{movie.data?.Rated}</span>
              </p>
              <p>
                <span> {movie.data?.Country}</span>
                <span>|</span>
                <span>{movie.data?.Language}</span> <span>|</span>
                <span>{movie.data?.Runtime}</span>
                <span>|</span>
                {movie.data?.totalSeasons && (
                  <span>
                    <span>Seasons</span>
                    {movie.data?.totalSeasons}
                  </span>
                )}
              </p>
              <p>
                <Votes>Votes {movie.data?.imdbVotes}</Votes>
                <Ratings>IMDb {movie.data?.imdbRating} </Ratings>
              </p>
            </div>
          </TopContainer>
          <Hr />
          <PlotContainer>
            <MovieSubTitle>Plot</MovieSubTitle>
            <p>{movie.data?.Plot}</p>
          </PlotContainer>
          <Hr />
          <CastContainer>
            <div>
              <MovieSubTitle>Cast</MovieSubTitle>
              <CastList>
                {movie.data?.Actors.split(",").map((actor, i) => (
                  <Li key={i}>{actor}</Li>
                ))}
              </CastList>
            </div>

            <div>
              <MovieSubTitle>Crew</MovieSubTitle>
              <CrewList>
                <div>
                  <Li>
                    <strong>Director</strong>
                  </Li>
                  <Li>
                    <strong>Writer</strong>
                  </Li>
                </div>
                <div>
                  <Li>
                    <span>{movie.data?.Director}</span>
                  </Li>
                  <Li>
                    <span>{movie.data?.Writer}</span>
                  </Li>
                </div>
              </CrewList>
            </div>
          </CastContainer>
          <Hr />
          <ExtraContainer>
            <MovieSubTitle>Extra</MovieSubTitle>
            <ExtraList>
              <div>
                <Li>
                  <strong>DVD</strong>
                </Li>
                <Li>
                  <strong>BoxOffice</strong>
                </Li>
                <Li>
                  <strong>Production</strong>
                </Li>
                <Li>
                  <strong>Awards</strong>
                </Li>
                <Li>
                  <strong>Website</strong>
                </Li>
              </div>
              <div>
                <Li>
                  <span>{movie.data?.DVD || "N/A"}</span>
                </Li>
                <Li>
                  <span>{movie.data?.BoxOffice || "N/A"}</span>
                </Li>
                <Li>
                  <span>{movie.data?.Production || "N/A"}</span>
                </Li>
                <Li>
                  <span>{movie.data?.Awards || "N/A"}</span>
                </Li>
                <Li>
                  <span>{movie.data?.Website || "N/A"}</span>
                </Li>
              </div>
            </ExtraList>
          </ExtraContainer>
        </MainContent>
      </Container>
    </>
  );
};

export default MovieDetails;
