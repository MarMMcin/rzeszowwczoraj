import React, { Component } from "react";
import styled from "styled-components";
import gallery from "./BeforeAfterPhotos";
import BeforeAfterSlider from "react-before-after-slider";
const width = 640;
const height = 480;
const Container = styled.div`
  :first-child {
    margin-top: 5vh;
  }
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  align-content: center;
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
  width: 240px;
  touch-action: none;
  @media (min-width: 769px) {
    width: 320px;
  }
`;

class BeforeAfterComponent extends Component {
  render() {
    return gallery.photos.map(photo => (
      <Container>
        <Main>
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
