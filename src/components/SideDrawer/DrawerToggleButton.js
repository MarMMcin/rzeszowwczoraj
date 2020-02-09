import React from "react";
import styled from "styled-components";
const StyledButton = styled.button`
  display: flex;
  position: relative;
 
  top: 10px;
  flex-direction: column;
  justify-content: space-around;
  height: 24px;
  width: 30px;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  box-sizing: border-box;    outline: none;

  .toggle-button:focus {
    outline: none;
  }

  .toggle-button__line {
    width: 30px;
    height: 2px;
    background: white
`;

const drawerToggleButton = props => (
  <StyledButton onClick={props.click}>
    <div className="toggle-button__line" />
    <div className="toggle-button__line" />
    <div className="toggle-button__line" />
  </StyledButton>
);

export default drawerToggleButton;
