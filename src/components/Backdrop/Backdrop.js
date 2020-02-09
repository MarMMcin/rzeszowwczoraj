import React from "react";
import styled from "styled-components";

const StyledBackdrop = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.3);
  z-index: 100;
`;

const backdrop = props => (
  <StyledBackdrop className="backdrop" onClick={props.click} />
);

export default backdrop;