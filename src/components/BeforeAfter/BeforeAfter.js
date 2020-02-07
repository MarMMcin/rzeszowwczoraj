import React, { Component } from "react";
import BeforeAfeterComponent from "./BeforeAfterComponent";
import styled from "styled-components";

const Container = styled.div`
   {
    display: flex;
    flex-direction: row !important;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    align-content: center;
    overflow: hidden;
    touch-action: none;
    padding: 50px;
  }
`;
class BeforeAfter extends Component {
  render() {
    return (
      <Container>
        <BeforeAfeterComponent></BeforeAfeterComponent>
      </Container>
    );
  }
}

export default BeforeAfter;
