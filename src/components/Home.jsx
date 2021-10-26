import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useGetMovieMutation } from "../services/movieApi";
import Card from "./Card";
import Header from "./Header";
import Loading from "./Loading";
import { Container } from "./styles/Container.styled";
import { ContentRow, MainContent } from "./styles/MainContent.Styled";
import { StyledHome } from "./styles/StyledHome.styled";

const Home = () => {
  const [searchData, getData] = useGetMovieMutation();
  const [searchInput, setSearchInput] = useState("");

  useEffect(() => {
    searchData("game");
  }, [searchData]);
  console.log("d");
  const onSubmitHandle = async (e) => {
    e.preventDefault();
    searchData(searchInput);
    setSearchInput("");
  };

  return (
    <StyledHome>
      <Header
        searchInput={searchInput}
        setSearchInput={setSearchInput}
        submit={onSubmitHandle}
      />
      <Container>
        <MainContent>
          {getData.data?.Error ? (
            <h3>
              Oops! <br />
              {getData.data?.Error}
            </h3>
          ) : getData.isError ? (
            <h3>
              Oops! <br />
              {getData?.error?.error}
            </h3>
          ) : getData.isLoading ? (
            <Loading />
          ) : (
            <ContentRow>
              {getData?.data?.Search?.map((item, i) => (
                <Card item={item} key={item.imdbID} />
              ))}
            </ContentRow>
          )}
        </MainContent>
      </Container>
    </StyledHome>
  );
};

export default Home;
