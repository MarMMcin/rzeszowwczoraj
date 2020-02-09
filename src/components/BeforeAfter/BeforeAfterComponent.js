import React, { Component } from "react";
import styled from "styled-components";
import gallery from "./BeforeAfterPhotos";
import BeforeAfterSlider from "react-before-after-slider";

let width = 640;
let height = 480;
const Container = styled.div`
  width: 100%;
  overflow: hidden;
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
  width: 100%;
  padding-bottom: 40px;
  overflow: hidden;

  a {
    text-decoration: none;
    color: #666;
  }
`;
const Main = styled.main`
  z-index: 1;
  overflow: hidden;
`;
const StyledSlider = styled(BeforeAfterSlider)`
  overflow: hidden;
  touch-action: none;
 
  }
`;

class BeforeAfterComponent extends Component {
  render() {
    return gallery.photos.map(photo => (
      <Container key={photo.id}>
        <Main>
          <StyledSlider
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
