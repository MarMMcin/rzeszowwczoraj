import React, { Component } from "react";
import {
  Container,
  TextContainer,
  Tittle,
  TextAboutPage,
  IconContainer,
  ButtonIcon,
  Icon,
  Icons
} from "./style";
import styled from "styled-components";

class OFirmie extends Component {
  render() {
    return (
      <>
        {" "}
        <Container>
          {" "}
          <TextContainer>
            <Tittle>Rzeszów wczoraj, dziś i jutro</Tittle>
            <TextAboutPage>
              Strona Rzeszów wczoraj, dziś i jutro ruszyła z publikacją zdjęć
              starego Rzeszowa jako fanpage na Facebooku 14 czerwca 2013 roku.
              Do dzisiaj zgromadziła prawie 16 tys. fanów oraz niemal 6000
              aktywnych członków w grupie dyskusyjnej. Wszystkich pasjonatów
              miasta oraz chętnych, którzy chcą się podzielić fotografiami ze
              swoich albumów, zachęcamy do dołączenia do naszej grupy. Link do
              fanpega oraz grupy znajduje się poniżej.
            </TextAboutPage>
            <Icons>
              <IconContainer>
                <ButtonIcon
                  className="btn"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.facebook.com/rzeszowwczoraj/"
                >
                  <Icon className="fab fa-facebook-f"></Icon>
                </ButtonIcon>
                <ButtonIcon
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn"
                  href="https://www.facebook.com/groups/178523919544167/"
                >
                  <Icon className="fas fa-user-friends"></Icon>
                </ButtonIcon>
              </IconContainer>
            </Icons>
          </TextContainer>
        </Container>
      </>
    );
  }
}

export default OFirmie;
