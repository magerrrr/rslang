import styled from 'styled-components';
import { Row, Col, Card, Container } from 'react-bootstrap';

import mainBg from '../../assets/img/main.svg';
import howBg from '../../assets/img/howto.svg';
import gamesBg from '../../assets/img/games.svg';
import teamBg from '../../assets/img/creators.svg';

const Intro = styled.div`
  background-image: url(${mainBg});
  min-height: calc(100vw / 1.68);
  height: 100vh;
  background-repeat: no-repeat;
  background-size: cover;

  p {
    font-size: 3rem;
    font-weight: 600;
    margin: 0;
    color: white;
    width: 400px;
    padding-top: 3rem;
  }
  li {
    font-size: 1.3rem;
  }
  ul {
    list-style-type: none;
    margin: 0;
    width: 460px;
  }
  @media (max-width: 992px) {
    .row:first-child .col-md-8 {
      margin-top: 0 !important;
    }
  }
  @media (max-width: 400px) {
    p {
      font-size: 2rem;
      padding-top: 1.5rem;
    }
  }

  @media (max-width: 700px) {
    p {
      width: 100%;
    }
  }

  @media (max-width: 576px) {
    ul {
      width: 100%;
    }
  }
`;

const Middle = styled(Col)`
  position: relative;
  margin-top: -8rem;
  img,
  p {
    position: absolute;
    width: 90%;
    top: 50%;
    right: 0;
    left: 0;
    margin-left: auto;
    margin-right: auto;
    transform: translate(0, -50%);
  }
  @media (max-width: 767px) {
    height: 280px;
    p {
      margin-top: 1rem;
    }
  }
  @media (max-width: 767px) {
    height: 400px;
  }
`;

const HowTo = styled.div`
  background-image: url(${howBg});
  height: calc(100vw / 1.45);
  background-repeat: no-repeat;
  background-size: cover;
  @media (max-width: 767px) {
    height: auto;
    min-height: calc(100vw / 1.45);
  }
`;

const Title = styled.div`
  font-size: 2rem;
  text-align: center;
  padding: 20px;
`;

const HowToRow = styled(Row)`
  width: 100%;
`;

const GamesRow = styled(HowToRow)`
  align-items: center;
  height: 100%;
`;

const HowToText = styled(Middle)``;

const Games = styled.div`
  background-image: url(${gamesBg});
  height: calc(100vw / 1.62);
  background-repeat: no-repeat;
  background-size: cover;
  @media (max-width: 992px) {
    height: auto;
    .card {
      margin-bottom: 30px !important;
    }
  }
  @media (min-width: 1320px) {
    .container {
      max-width: 960px;
      height: 90%;
    }
  }
  @media (max-width: 1321px) {
    .container {
      max-width: 800px;
    }
  }
`;

const Team = styled.div`
  background-image: url(${teamBg});
  height: calc(100vw / 1.85);
  background-repeat: no-repeat;
  background-size: cover;
`;
const FlexContainer = styled(Container)`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  .team-col {
    margin-top: -100px;
  }
`;
const Member = styled(Row)`
  background-color: #fff;
  max-width: 400px;
  border-radius: 20px;
  box-shadow: 0 14px 28px rgb(0 0 0 / 25%), 0 10px 10px rgb(0 0 0 / 22%);
  margin-bottom: 40px;
  margin-left: 0;
  margin-right: 0;
  img {
    padding: 30px;
    padding-left: 15px;
    height: 192px;
    width: 170px;
    object-fit: cover;
  }
  .card-body {
    padding-top: 30px;
    padding-bottom: 30px;
  }
`;
const Game = styled(Card)`
  border: none;
  border-radius: 20px;
  margin-bottom: 50px;
  box-shadow: rgb(0 0 0 / 25%) 0px 14px 28px, rgb(0 0 0 / 22%) 0px 10px 10px;

  img {
    border-radius: 20px;
    object-fit: cover;
    object-position: center;
    width: 100%;
    height: 100%;
  }
  .card-body {
    position: absolute;
    bottom: 0;
    right: 20px;
  }
  .card-title {
    font-weight: 600;
  }

  @media (max-width: 400px) {
    margin-top: 0 !important;
    margin-left: 0 !important;
    width: 280px !important;
    height: calc(280px * 0.67887) !important;
  }
`;

const GameCol = styled(Col)`
  @media (max-width: 992px) {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
  }
`;

const Game1 = styled(Game)`
  width: 355px;
  height: 241px;
  @media (max-width: 1320px) {
    width: 280px;
    height: calc(280px * 0.67887);
  }
`;

const Game2 = styled(Game)`
  width: 360px;
  height: 312px;
  margin-bottom: 0;

  @media (max-width: 1320px) {
    width: 300px;
    height: calc(300px * 0.86666);
  }
`;

const Game3 = styled(Game)`
  width: 522px;
  height: 305px;
  @media (max-width: 1320px) {
    width: 414px;
    height: calc(414px * 0.58095);
  }
`;

const Game4 = styled(Game)`
  margin-top: -1px;
  width: 501px;
  height: 249px;
  margin-bottom: 0;
  margin-left: 22px;
  .card-body {
    left: 20px;
  }
  @media (max-width: 1320px) {
    width: 391.5px;
    height: calc(416px * 0.498);
  }
`;

const ImageContainer = styled(Middle)`
  height: 56vw;
  @media (max-width: 767px) {
    display: none;
  }
`;

export {
  Intro,
  HowTo,
  Title,
  Team,
  FlexContainer,
  Member,
  HowToRow,
  GamesRow,
  ImageContainer,
  HowToText,
  Games,
  GameCol,
  Game1,
  Game2,
  Game3,
  Game4,
};
