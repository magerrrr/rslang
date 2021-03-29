import * as React from 'react';
import { PlayButton, ControlButton } from '../SpeakItStyles';
import { Col, Row } from 'react-bootstrap';

const Controls = ({ isGameMode, startGame, finishedGame, setShowResult }: any) => {
  return (
    <Row className="justify-content-md-center">
      <Col md="auto">
        <ControlButton onClick={() => {}} type="button" disabled={false}>
          повторить
        </ControlButton>
      </Col>
      {isGameMode ? (
        ''
      ) : (
        <Col md="auto">
          <PlayButton onClick={startGame} type="button" disabled={false}>
            начать говорить
          </PlayButton>
        </Col>
      )}
      {isGameMode ? (
        <Col md="auto">
          <PlayButton onClick={finishedGame} type="button" disabled={false}>
            закончить игру
          </PlayButton>
        </Col>
      ) : (
        ''
      )}
      <Col md="auto">
        <ControlButton onClick={() => setShowResult(true)} type="button" disabled={false}>
          результаты
        </ControlButton>
      </Col>
    </Row>
  );
};

export default Controls;
