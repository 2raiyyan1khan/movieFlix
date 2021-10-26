import React from "react";
import { Container } from "./styles/Container.styled";
import { StyledFooter } from "./styles/StyledFooter.styled";

const Footer = () => {
  return (
    <StyledFooter>
      <Container>
        <span>&copy;{new Date().getFullYear()}</span>
        <span>Developed by Mohammad Raiyyan</span>
      </Container>
    </StyledFooter>
  );
};

export default Footer;
