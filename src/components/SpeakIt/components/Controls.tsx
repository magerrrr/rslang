import * as React from 'react';
import { PlayButton, ControlButton } from '../SpeakItStyles';
import { Col, Row } from 'react-bootstrap';

const Controls = ({ isGameMode, startGame, continueGame, finishedGame, cleanResult }: any) => {
  return (
    <Row className="justify-content-center mb-3">
      <Col xs="auto" sm="auto">
        <ControlButton
          onClick={() => {
            finishedGame();
            cleanResult();
          }}
          type="button"
          disabled={false}
        >
          рестарт
        </ControlButton>
      </Col>
      <Col xs="auto" sm="auto">
        <PlayButton onClick={startGame} type="button" disabled={isGameMode}>
          начать говорить
        </PlayButton>
      </Col>
      <Col xs="auto" sm="auto">
        <ControlButton className="mb-4" onClick={finishedGame} type="button" disabled={!isGameMode}>
          результаты
        </ControlButton>
      </Col>
    </Row>
  );
};

export default Controls;
