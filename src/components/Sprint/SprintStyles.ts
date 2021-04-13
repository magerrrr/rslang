import styled from 'styled-components';
import { Button, Container, Table } from 'react-bootstrap';

import sprintBg from '../../assets/sprint/sprint-bg.svg';
import parrot1 from '../../assets/sprint/bird1.png';
import parrot2 from '../../assets/sprint/bird2.png';
import parrot3 from '../../assets/sprint/bird3.png';
import parrot4 from '../../assets/sprint/bird4.png';
import audio from '../../assets/sprint/audio.svg';

const BackGround = styled.div`
  background-image: url(${sprintBg});
  height: calc(100vw / 1.45);
  background-size: cover;
  svg {
    position: absolute;
    right: 25px;
    width: 40px;
    height: 40px;
    fill: #b2ceff;
    cursor: pointer;
  }
  @media (max-width: 1024px) {
    height: auto;
    min-height: calc(100vw / 1.45);
  }
`;

const LeftControlButton = styled(Button)`
  font-size: 1.25rem;
  line-height: 1.7;
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
  &.disabled .timer_line,
  &.disabled .timer_line::after,
  &.disabled::before,
  &.disabled::after {
    animation: none !important;
    background-color: transparent;
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
  margin: 0 auto;
  justify-content: center;
  align-items: center;
  position: relative;
  flex-direction: column;
  height: 400px;
  > div {
    margin: 2rem;
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
  height: 90px;
  display: flex;
  text-align: center;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
  margin-bottom: 0.5rem;

  .parrot {
    position: absolute;
    background-size: contain;
    width: 100% !important;
    height: 100% !important;
    background-repeat: no-repeat;
    left: 30px !important;
    top: 0 !important;
    &.hide {
      display: none;
    }
  }
  .parrot_1 {
    background-image: url(${parrot1});
  }

  .parrot_2 {
    background-image: url(${parrot2});
  }

  .parrot_3 {
    background-image: url(${parrot3});
  }

  .parrot_4 {
    background-image: url(${parrot4});
  }
`;

const AudioIcon = styled.span`
  position: absolute;
  top: 22px;
  left: 20px;
  width: 26px;
  height: 26px;
  background-image: url(${audio});
  background-size: contain;
`;

const ResultsAudioIcon = styled(AudioIcon)`
  top: 12px;
  left: 12px;
  width: 21px;
  height: 22px;
  cursor: pointer;
`;

const ResultsTable = styled(Table)`
  tbody tr:nth-of-type(odd) {
    background-color: rgb(236, 206, 226, 0.6);
  }
  tbody tr:nth-of-type(odd):hover {
    background-color: rgb(236, 206, 226, 0.6);
  }
  tbody tr:nth-of-type(even):hover {
    background-color: #fff;
  }
`;

export {
  BackGround,
  GameContainer,
  Box,
  Life,
  LifeLess,
  Countdown,
  GameHeading,
  Point,
  Parrots,
  Word,
  WordTranslated,
  AudioIcon,
  ResultsAudioIcon,
  LeftControlButton,
  RightControlButton,
  ResultsTable,
};
