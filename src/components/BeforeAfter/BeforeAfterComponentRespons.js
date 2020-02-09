import React, { Component } from "react";
import styled from "styled-components";
import gallery from "./BeforeAfterPhotos";
import BeforeAfterSlider from "react-before-after-slider";

let width = 300;
let height = 220;
const Container = styled.div`
  overflow: hidden;
  padding: 10px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  align-content: center;
  :first-child {
    margin-top: 5vh;
  }
`;
const Text = styled.p`
  padding-bottom: 40px;

  a {
    text-decoration: none;
    color: #666;
  }
`;
const Main = styled.main`
  z-index: 1;
`;
const StyledSlider = styled(BeforeAfterSlider)`

  touch-action: none;
 
  }
`;

class BeforeAfterComponent extends Component {
  render() {
    return gallery.photos.map(photo => (
      <Container key={photo.id}>
        <Main key={photo.id}>
          <StyledSlider
            key={photo.id}
            before={photo.before}
            after={photo.after}
            width={width}
            height={height}
          />
          <Text>
            {photo.text} autor: {photo.autor}.
            <a target="_blank" rel="noopener noreferrer" href={photo.link}>
              {" "}
              Link do dyskusji:
            </a>
          </Text>
        </Main>
      </Container>
    ));
  }
}

export default BeforeAfterComponent;
