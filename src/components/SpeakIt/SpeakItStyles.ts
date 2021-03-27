import styled from 'styled-components';
import { Button } from 'react-bootstrap';

const WordBox = styled.div`
  margin: 25px auto;
  width: 50%;
  background-color: #525ae9;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  border-radius: 20px;
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

export { ControlButton, PlayButton };
