import styled from 'styled-components';
import { Button, Container } from 'react-bootstrap';

import sprintBg from '../../assets/sprint/sprint-bg.svg';
import pinkParrot from '../../assets/sprint/parrot-pink.png';
import yellowParrot from '../../assets/sprint/parrot-yellow.png';
import brownParrot from '../../assets/sprint/parrot-brown.png';
import blueParrot from '../../assets/sprint/parrot-blue.png';
import stick from '../../assets/sprint/stick.png';

const BackGround = styled.div`
  background-image: url(${sprintBg});
  min-height: calc(100vh + 90px);
  background-size: 100%;
`;

const LeftControlButton = styled(Button)`
  font-size: 1.25rem;
  margin: 35px auto 0 auto;
  width: 170px;
  height: 53px;
  background-color: #b2ceff;
  border-radius: 20px;
  border: none;
  color: inherit;
  &:hover,
  &:active,
  &:focus {
    background-color: rgba(178, 206, 255, 0.5) !important;
    color: inherit !important;
    border-color: transparent !important;
    box-shadow: none !important;
  }
`;

const RightControlButton = styled(LeftControlButton)`
  background-color: #eccee2;
  &:hover,
  &:active,
  &:focus {
    background-color: #d4b9cb !important;
  }
`;

const GameContainer = styled.div`
  margin: 1rem;
`;

const Box = styled.div`
  width: 500px;
  height: 500px;
  background-color: #fff;
  box-shadow: 0 0 10px rgb(50 162 229 / 50%);
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

const Round = styled.div`
  font-size: 1.25rem;
  font-weight: 600;
  width: 112px;
  p {
    font-size: 1.25rem;
    font-weight: 600;
    width: calc(100px - 10px);
    text-align: center;
    margin: 5px;
  }
`;

const Countdown = styled.div`
  width: 90px;
  height: 90px;
  border-radius: 50%;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  position: relative;
  margin: 15px auto;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 50%;
    height: 100%;
    z-index: 3;
    background-color: white;
    animation: mask_left 60s steps(1, end) forwards;
  }

  &::after {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    width: 50%;
    height: 100%;
    z-index: 3;
    background-color: #32a2e5;
    animation: mask_right 60s steps(1, end) forwards;
  }

  .timer_body {
    width: 80px;
    height: 80px;
    border-radius: 50%;
    background-color: white;
    text-align: center;
    overflow: hidden;
    z-index: 4;
  }

  .timer_line {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 2;
    animation: line 60s linear forwards;

    &::after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 50%;
      height: 100%;
      background-color: #32a2e5;
    }
  }

  .timer_counter {
    & span {
      font-size: 2rem;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 80px;
      height: 80px;
    }
  }

  @keyframes line {
    0% {
    }
    100% {
      transform: rotate(360deg);
    }
  }
  @keyframes mask_left {
    0% {
      visibility: visible;
    }
    50%,
    100% {
      visibility: hidden;
    }
  }
  @keyframes mask_right {
    0% {
      visibility: hidden;
    }
    50%,
    100% {
      visibility: visible;
    }
  }
`;

const GameHeading = styled(Container)`
  display: flex;
  margin: 20px auto;
  margin-top: 0;
  justify-content: center;
  align-items: center;
  position: relative;
  > div:first-child {
    position: absolute;
    left: 0;
    top: 0;
  }
  select {
    box-shadow: 0 0 10px rgb(50 162 229 / 50%);
    &:focus {
      box-shadow: 0 0 10px rgb(50 162 229 / 50%);
    }
  }
`;

const Point = styled.div`
  font-size: 1.25rem;
  font-weight: 600;
  max-width: 112px;
  height: 38px;
  text-align: center;
  margin: 0 auto;
`;

const Word = styled.div`
  font-size: 1.5rem;
  font-weight: 600;
  text-align: center;
  padding: 10px;
`;

const WordTranslated = styled(Word)`
  font-weight: 400;
`;

const Parrots = styled.div`
  position: relative;
  width: 250px;
  height: 70px;
  background: linear-gradient(40deg, rgb(210, 239, 26), rgb(178, 231, 12));
  border-radius: 10px;
  display: flex;
  text-align: center;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
  background-image: url(${stick});
  background-repeat: no-repeat;
  background-position: bottom 10px right 20px;

  .parrot {
    position: absolute;
  }
  .parrot_blue {
    left: 30px;
    top: 5px;
    width: 53px;
    height: 62px;
    background: url(${blueParrot}) no-repeat;
  }

  .parrot_yellow {
    width: 45px;
    height: 64px;
    background: url(${yellowParrot}) no-repeat;
    left: 80px;
    top: 4px;
  }

  .parrot_brown {
    width: 56px;
    height: 53px;
    background: url(${brownParrot}) no-repeat;
    left: 127px;
    top: 12px;
  }

  .parrot_pink {
    width: 45px;
    height: 58px;
    background: url(${pinkParrot}) no-repeat;
    left: 176px;
    top: 11px;
  }
`;

export {
  BackGround,
  GameContainer,
  Box,
  Life,
  LifeLess,
  Round,
  Countdown,
  GameHeading,
  Point,
  Parrots,
  Word,
  WordTranslated,
  LeftControlButton,
  RightControlButton,
};
