import React from "react";
import Spinner from "react-spinkit";
import { StyledLoading } from "./styles/Loading.Styled";

const Loading = () => {
  return (
    <StyledLoading>
      <Spinner name="double-bounce" style={{ color: "#eebbc3" }} />
    </StyledLoading>
  );
};

export default Loading;
