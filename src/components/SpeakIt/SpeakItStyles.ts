import styled from 'styled-components';
import { Button } from 'react-bootstrap';

import bgImage from '../../assets/speak-it-bg.svg';

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
`;

const ControlButton = styled(PlayButton)`
  background-color: #ffe8ee;
  box-shadow: 0 0 10px rgb(166 50 198 / 50%) !important;
  &:hover,
  &:active,
  &:focus {
    background-color: rgba(166, 50, 198, 0.2) !important;
  }
`;

export { GameContainer, ControlButton, PlayButton, Box };
