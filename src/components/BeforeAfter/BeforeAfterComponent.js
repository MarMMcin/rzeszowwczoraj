import React, { Component } from "react";
import styled from "styled-components";
import gallery from "./BeforeAfterPhotos";
import BeforeAfterSlider from "react-before-after-slider";

let width = 640;
let height = 480;
const Container = styled.div`
  width: 0;
  margin: 0 !important;
  display: flex;
  margin: 0;
  padding: 0;
  flex-direction: row;
`;

const Text = styled.p`
  a {
    text-decoration: none;
    color: #666;
  }
`;
const Main = styled.main`text-align: center
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
