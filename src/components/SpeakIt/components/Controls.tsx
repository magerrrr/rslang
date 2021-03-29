import * as React from 'react';
import { PlayButton, ControlButton } from '../SpeakItStyles';
import { Col, Row } from 'react-bootstrap';

const Controls = ({ isGameMode, startGame, continueGame, finishedGame }: any) => {
  return (
    <Row className="justify-content-md-center">
      <Col md="auto">
        <ControlButton onClick={startGame} type="button" disabled={false}>
          повторить
        </ControlButton>
      </Col>
      <Col md="auto">
        <PlayButton onClick={startGame} type="button" disabled={isGameMode}>
          начать говорить
        </PlayButton>
      </Col>
      <Col md="auto">
        <ControlButton onClick={finishedGame} type="button" disabled={!isGameMode}>
          результаты
        </ControlButton>
      </Col>
    </Row>
  );
};

export default Controls;
