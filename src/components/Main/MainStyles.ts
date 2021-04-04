import styled from 'styled-components';
import { Button, Container, Row, Col, Card } from 'react-bootstrap';

import mainBg from '../../assets/main.svg';
import howBg from '../../assets/howto.svg';
import games from '../../assets/games.svg';

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

const HowToTitle = styled.div`
  font-size: 2rem;
  padding-top: 8vw;
  text-align: center;
`;

const HowToRow = styled(Row)`
  margin-top: calc(-8vw - 48px);
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
  img {
    border-radius: 20px;
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
  HowToTitle,
  HowToRow,
  ImageContainer,
  HowToText,
  Games,
  GamesContainer,
  Game,
};
