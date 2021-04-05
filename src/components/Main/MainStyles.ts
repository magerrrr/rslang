import styled from 'styled-components';
import { Row, Col, Card } from 'react-bootstrap';

import mainBg from '../../assets/img/main.svg';
import howBg from '../../assets/img/howto.svg';
import gamesBg from '../../assets/img/games.svg';
import teamBg from '../../assets/img/creators.svg';

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

const GamesRow = styled(HowToRow)`
  align-items: center;
  height: 100%;
`;

const HowToText = styled(Middle)`
  height: calc(100vw / 1.45);
`;

const Games = styled.div`
  background-image: url(${gamesBg});
  height: calc(100vw / 1.46);
  background-repeat: no-repeat;
  background-size: cover;
`;

const Team = styled.div`
  background-image: url(${teamBg});
  height: calc(100vw / 1.85);
  background-repeat: no-repeat;
  background-size: cover;
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

export {
  Intro,
  HowTo,
  Title,
  Team,
  Member,
  HowToTitle,
  HowToRow,
  GamesRow,
  ImageContainer,
  HowToText,
  Games,
  Game1,
  Game2,
  Game3,
  Game4,
};
