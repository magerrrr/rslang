import * as React from 'react';
import { LeftControlButton, RightControlButton } from './SprintStyles';
import { Col, Row } from 'react-bootstrap';

const Controls = ({ startGame, finishedGame }: any) => {
  return (
    <Row className="justify-content-center">
      <Col xs="auto" className="mt-2">
        <LeftControlButton onClick={startGame} type="button" disabled={false}>
          верно
        </LeftControlButton>
      </Col>
      <Col xs="auto" className="mt-2">
        <RightControlButton onClick={finishedGame} type="button" disabled={false}>
          неверно
        </RightControlButton>
      </Col>
    </Row>
  );
};

export default Controls;
