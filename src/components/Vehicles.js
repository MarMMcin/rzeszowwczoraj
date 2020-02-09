import React, { Component } from "react";
import styled from "styled-components";

const StyledDiv = styled.div`
  max-width: 20vw;
  background-color: rgba(255, 255, 255, 0.9);
  z-index: 2100;
  border: 1px solid #2f52a0;
  p {
    text-align: center;
  }
  img {
    z-index: 2199;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    opacity: 0.2;
    width: 5vw;
  }
  a {
    color: #2f52a0;
    text-decoration: none;
  }
  @media (max-width: 768px) {
    max-width: 40vw;
  }
`;

class Vehicles extends Component {
  render() {
    return (
      <StyledDiv>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/POL_Rzeszów_COA.svg/800px-POL_Rzeszów_COA.svg.png"
          alt=""
        />{" "}
        <p>
          Mapa przedstawia budynki, które kiedyś znajdowały się w naszym
          mieście. Niebieska pinezka wskzuje historyczną lokalizację obiektu. Po
          jej naciśnięciu pojawiają się informacje o&nbsp;budynku oraz jego
          fotografia. Aby powiększyć zdjęcie należy je kliknąć. Jeżeli mają
          Państwo jakieś propozcyję/prośby o&nbsp;umieszczenie budynków, których
          nie ma na mapie, prosimy o&nbsp;
          <a href="mailto:rzeszowfoto@wp.pl">kontakt</a>
        </p>
      </StyledDiv>
    );
  }
}

export default Vehicles;
