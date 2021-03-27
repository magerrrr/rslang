import styled from 'styled-components';
import { Button, Container } from 'react-bootstrap';

import sprintBg from '../assets/sprint-bg.svg';

const BackGround = styled.div`
  background-image: url(${sprintBg});
  min-height: calc(100vh + 90px);
  background-size: 100%;
`;

const PlayButton = styled(Button)`
  margin: 25px auto;
  width: 200px;
  height: 40px;
  background-color: #c9b1fc;
  border-radius: 20px;
  border: none;
  color: inherit;

  &:hover {
    background-color: rgba(166, 50, 198, 0.5);
    color: inherit;
  }
`;

const LeftButton = styled(PlayButton)`
  background-color: #ffe8ee;
  &:hover {
    background-color: rgba(166, 50, 198, 0.2);
  }
`;

const RightButton = styled(PlayButton)`
  background-color: #ffe8ee;
  &:hover {
    background-color: rgba(166, 50, 198, 0.2);
  }
`;

const GameContainer = styled.div`
  background-image: url(${sprintBg});
  min-height: calc(100vh + 90px);
  background-size: 100%;
`;

const Box = styled.div`
  width: 500px;
  height: 500px;
  background-color: #fff;
  border-radius: 20px;
  margin: 0 auto;
  padding: 5px;
`;

const Life = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: #32a2e5;
`;

const LifeLess = styled(Life)`
  background: rgb(178, 206, 255);
  background: linear-gradient(
    90deg,
    rgba(178, 206, 255, 1) 0%,
    rgba(178, 206, 255, 1) 0%,
    rgba(236, 206, 226, 1) 100%,
    rgba(178, 206, 255, 1) 100%
  );
`;

const Round = styled.h4`
  font-weight: 600;
  margin: 2rem;
`;

export { BackGround, LeftButton, RightButton, GameContainer, Box, Life, LifeLess, Round };
