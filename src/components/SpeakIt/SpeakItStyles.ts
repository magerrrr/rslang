import styled from 'styled-components';
import { Button, Table } from 'react-bootstrap';

import bgImage from '../../assets/speak-it-bg.svg';
import audio from '../../assets/volume.svg';

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

const GameContainer = styled.div`
  background-image: url(${bgImage});
  min-height: calc(100vh + 90px);
  background-size: 100%;
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
`;

const PlayButton = styled(Button)`
  margin: 25px auto;
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

export { GameContainer, Card, AudioIcon, ControlButton, PlayButton, Box, ResultsTable };
