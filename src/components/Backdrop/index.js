import React from "react";
import { StyledBackdrop } from "./style";

const backdrop = props => (
  <StyledBackdrop className="backdrop" onClick={props.click} />
);

export default backdrop;
