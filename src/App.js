import React from "react";
import { ThemeProvider } from "styled-components";
import Home from "./components/Home";
import { Global } from "./components/styles/Global.Styled";
import { Switch, Route } from "react-router-dom";
import MovieDetails from "./components/MovieDetails";
import Footer from "./components/Footer";

const theme = {
  colors: {
    heading: "rgba(255,255,255,0.9)",
    paragraph: "#b8c1ec",
    header: "#232946",
    body: "#161618",
  },
};
const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Global />

      <Switch>
        <Route path="/" exact render={() => <Home />} />
        <Route
          path="/name/:mName/id/:mId"
          exact
          render={() => <MovieDetails />}
        />
      </Switch>
      <Footer />
    </ThemeProvider>
  );
};

export default App;
