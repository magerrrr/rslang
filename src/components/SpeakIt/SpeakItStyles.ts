import styled from 'styled-components';
import { Button, Table } from 'react-bootstrap';

import arrow from '../../assets/speak-it/down-filled-triangular-arrow.svg';
import bgImage from '../../assets/speak-it/speak-it-bg.svg';
import audio from '../../assets/speak-it/volume.svg';

const Card = styled.div`
  font-size: 18px;
  line-height: 1.4;
  position: relative;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  min-width: 200px;
  min-height: 70px;
  margin: 10px;
  padding: 10px 10px 10px 70px;
  cursor: pointer;
  transition: 0.3s;

  border-radius: 20px;
  background-color: #fff;
  box-shadow: 0 0 10px rgba(166, 50, 198, 0.5);

  p {
    margin-top: 0;
    margin-bottom: 0;
  }
  &.isActive {
    box-shadow: 0 0 10px rgba(166, 50, 198);
  }
  &.isGame {
    pointer-events: none;
  }
  &.isGuessed {
    box-shadow: 0 0 10px #64ffda;
  }
  &.isNotGuessed {
    box-shadow: 0 0 10px #e57373;
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
  width: 22px;
  height: 22px;
  cursor: pointer;
`;

const GameContainer = styled.div`
  background-image: url(${bgImage});
  height: calc(100vw / 1.617);
  background-size: cover;
  background-position: center;
  svg {
    display: none;
    position: absolute;
    right: 25px;
    width: 40px;
    height: 40px;
    fill: #c9b1fc;
    cursor: pointer;
    @media (min-width: 576px) {
      display: block;
    }
  }
  select {
    background: #fff url(${arrow}) right 0.75rem center/14px 14px no-repeat;
  }
  @media (max-width: 1024px) {
    height: auto;
    min-height: calc(100vw / 1.45);
  }
`;

const Box = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  & p {
    margin-top: 20px;
    font-size: 18px;
    font-weight: 600;
  }
  & img {
    max-width: 400px;
  }
  @media (max-width: 400px) {
    & img {
      width: 280.5px;
      height: 187px;
    }
  }
`;

const PlayButton = styled(Button)`
  margin: 30px auto 30px auto;
  width: 200px;
  height: 40px;
  background-color: #c9b1fc;
  border-radius: 20px;
  border: none;
  color: inherit;

  &:hover,
  &:active,
  &:focus {
    background-color: rgba(166, 50, 198, 0.5) !important;
    color: inherit !important;
    border-color: transparent !important;
    box-shadow: none !important;
  }
  &.disabled,
  &:disabled {
    color: inherit;
    background-color: #c9b1fc !important;
    border-color: #007bff !important;
  }
  @media (max-width: 767px) {
    margin: 30px auto 0 auto;
  }
`;

const ControlButton = styled(PlayButton)`
  background-color: #ffe8ee;
  box-shadow: 0 0 10px rgb(166 50 198 / 50%) !important;
  &:hover,
  &:active,
  &:focus {
    background-color: rgba(166, 50, 198, 0.2) !important;
  }
  &.disabled,
  &:disabled {
    background-color: #ffe8ee !important;
    border-color: #007bff !important;
  }
`;

const ResultsTable = styled(Table)`
  tbody tr:nth-of-type(odd) {
    background-color: #ffe8ee;
  }
  tbody tr:nth-of-type(odd):hover {
    background-color: #ffe8ee;
  }
  tbody tr:nth-of-type(even):hover {
    background-color: #fff;
  }
`;

export {
  GameContainer,
  Card,
  AudioIcon,
  ResultsAudioIcon,
  ControlButton,
  PlayButton,
  Box,
  ResultsTable,
};
