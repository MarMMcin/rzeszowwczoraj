import React, { Component } from "react";

import styled from "styled-components";
const Container = styled.div`
  padding-left: 20vw;
  padding-right: 20vw;
  :after {
    content: "";
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    background-image: url("https://scontent-waw1-1.xx.fbcdn.net/v/t1.0-9/556439_414502845305338_539955454_n.jpg?_nc_cat=101&_nc_ohc=BFsNFLxxTZwAX_3WTZn&_nc_ht=scontent-waw1-1.xx&oh=906b7e31023b7f55b865809adfabf90d&oe=5ED80CC5");
    width: 100%;
    height: 100vh;
    background-size: cover;
    opacity: 0.3;
    z-index: -1;
  }
`;
const Photo = styled.div`
  position: absolute;

  padding: 0;
  opacity: 0.2;

  z-index: -10;
`;
const Content = styled.p``;
const TextDiv = styled.div`
  text-align: center;
`;
const Icons = styled.div`
  position: relative;
  margin-top: 10vh;
  .middle {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 100%;
    text-align: center;
  }
  .btn {
    display: inline-block;
    width: 90px;
    height: 90px;
    background: #f1f1f1;
    margin: 10px;
    border-radius: 30%;
    box-shadow: 0 5px 15px -5px #00000070;
    color: #3498db;
    overflow: hidden;
    position: relative;
  }
  .btn i {
    line-height: 90px;
    font-size: 26px;
    transition: 0.2s linear;
  }
  .btn:hover i {
    transform: scale(1.3);
    color: #f1f1f1;
  }
  .btn::before {
    content: "";
    position: absolute;
    width: 120%;
    height: 120%;
    background: #3498db;
    transform: rotate(45deg);
    left: -110%;
    top: 90%;
  }
  .btn:hover::before {
    animation: button 0.7s 1;
    top: -10%;
    left: -10%;
  }
  @keyframes button {
    0% {
      left: -110%;
      top: 90%;
    }
    50% {
      left: 10%;
      top: -30%;
    }
    100% {
      top: -10%;
      left: -10%;
    }
  }
`;
const StyledH1 = styled.h1`
  text-align: center;
  font-size: 4rem;
  font-family: "Amatic SC", cursive;
`;

class OFirmie extends Component {
  render() {
    return (
      <>
        {" "}
        <Container>
          {" "}
          <Photo></Photo>
          <TextDiv>
            <StyledH1>Rzeszów wczoraj, dziś i jutro</StyledH1>
            <Content>
              Strona Rzeszów, wczoraj dziś i jutro ruszyła z publikacją zdjęc
              starego Rzeszowa jako fanpage na Facebooku 14 czerwca 2013 roku,
              do dzisiaj zgromadziła prawie 16 tys. fanów oraz prawie 6000
              aktywnych członków w grupie dyskusyjnej. Wszystkich pasjonatów
              miasta, oraz chętnych którzy chcą się podzielić fotografiami ze
              swoich albumów, zachęcamy do dołączenia do naszej grupy. Link do
              fanpega oraz grupy znajduę się poniżej.
            </Content>
            <Icons>
              <div className="middle">
                <a
                  className="btn"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.facebook.com/rzeszowwczoraj/"
                >
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn"
                  href="https://www.facebook.com/groups/178523919544167/"
                >
                  <i className="fas fa-user-friends"></i>
                </a>
              </div>
            </Icons>
          </TextDiv>
        </Container>
      </>
    );
  }
}

export default OFirmie;
