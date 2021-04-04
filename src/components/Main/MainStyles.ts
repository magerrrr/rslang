import styled from 'styled-components';
import { Row, Col, Card } from 'react-bootstrap';

import mainBg from '../../assets/img/main.svg';
import howBg from '../../assets/img/howto.svg';
import games from '../../assets/img/games.svg';

const Intro = styled.div`
  background-image: url(${mainBg});
  height: calc(100vw / 1.68);
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
    width: 500px;
  }
`;

const Middle = styled(Col)`
  position: relative;
  img,
  p {
    position: absolute;
    width: 100%;
    top: 50%;
    transform: translate(0, -50%);
  }
`;

const HowTo = styled.div`
  background-image: url(${howBg});
  height: calc(100vw / 1.45);
  background-repeat: no-repeat;
  background-size: cover;
`;

const Title = styled.div`
  font-size: 2rem;
  text-align: center;
  padding-top: 8vw;
  padding-bottom: 3vw;
`;

const HowToTitle = styled(Title)`
  padding-bottom: 0;
`;

const HowToRow = styled(Row)`
  margin-top: calc(-8vw - 48px) !important;
`;

const HowToText = styled(Middle)`
  height: calc(100vw / 1.45);
`;

const Games = styled.div`
  background-image: url(${games});
  height: calc(100vw / 1.46);
  background-repeat: no-repeat;
  background-size: cover;
`;
const Game = styled(Card)`
  border-radius: 20px;
  margin-bottom: 50px;
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
`;
const Game1 = styled(Game)`
  width: 355px;
  height: 241px;
`;

const Game2 = styled(Game)`
  width: 360px;
  height: 312px;
  margin-bottom: 0;
`;

const Game3 = styled(Game)`
  width: 525px;
  height: 305px;
`;

const Game4 = styled(Game)`
  margin-top: -1px;
  width: 500px;
  height: 249px;
  margin-bottom: 0;
  margin-left: 22px;
  .card-body {
    left: 20px;
  }
`;

const ImageContainer = styled(Middle)`
  height: calc(100vw / 1.46);
`;

const GamesContainer = styled(Middle)`
  height: calc(100vw / 1.46);
`;

export {
  Intro,
  HowTo,
  Title,
  HowToTitle,
  HowToRow,
  ImageContainer,
  HowToText,
  Games,
  GamesContainer,
  Game,
  Game1,
  Game2,
  Game3,
  Game4,
};
