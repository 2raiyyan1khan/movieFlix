import React, { useEffect, useState } from "react";
import { Container } from "./styles/Container.styled";
import {
  Input,
  SearchBox,
  StyledHeader,
  StyledHeading,
} from "./styles/StyledHeader.styled";
import { AiOutlineSearch } from "react-icons/ai";

const Header = ({ searchInput, setSearchInput, submit }) => {
  return (
    <StyledHeader>
      <Container>
        <div>
          <StyledHeading>MovieFlix</StyledHeading>
          <h5>Find Your Favorite Movies.</h5>
          <form onSubmit={submit}>
            <SearchBox>
              <Input
                placeholder="Search here..."
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
              />
              <button type="submit">
                <AiOutlineSearch size={20} />
              </button>
            </SearchBox>
          </form>
        </div>
      </Container>
    </StyledHeader>
  );
};

export default Header;
