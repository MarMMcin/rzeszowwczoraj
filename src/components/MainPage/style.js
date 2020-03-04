import styled from "styled-components";
export const Container = styled.div`
  padding-left: 30vw;
  padding-right: 30vw;
  :after {
    content: "";
    display: flex;
    justify-content: center;
    align-items: center;
    align-content: center;
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
  @media (max-width: 768px) {
    padding-left: 5vw;
    padding-right: 5vw;
  }
`;
export const Tittle = styled.h1`
  text-align: center;
  font-size: 4rem;
  font-family: "Amatic SC", cursive;

  @media (max-width: 768px) {
    font-size: 3rem;
  }
`;

export const TextAboutPage = styled.p`
  @media (max-width: 768px) {
    font-size: 12px;
  }
`;
export const TextContainer = styled.div`
  text-align: center;
`;

export const IconContainer = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 100%;
  text-align: center;
`;
export const ButtonIcon = styled.a`
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
  @media (max-width: 768px) {
    width: 45px;
    height: 45px;
  }
`;
export const Icon = styled.i`
  line-height: 90px;
  font-size: 26px;
  transition: 0.2s linear;
  @media (max-width: 768px) {
    line-height: 45px;
    font-size: 13px;
  }
`;
export const Icons = styled.div`
  position: relative;
  margin-top: 10vh;

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
