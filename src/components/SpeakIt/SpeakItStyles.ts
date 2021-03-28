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

  &:hover {
    background-color: rgba(166, 50, 198, 0.5);
    color: inherit;
  }
`;

const ControlButton = styled(PlayButton)`
  background-color: #ffe8ee;
  &:hover {
    background-color: rgba(166, 50, 198, 0.2);
  }
`;

export { GameContainer, ControlButton, PlayButton, Box };
