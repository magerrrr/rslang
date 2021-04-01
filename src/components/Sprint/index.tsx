import React, { useEffect, useState } from 'react';
import { Container, Col } from 'react-bootstrap';
import Levels from '../../components/Levels';
import Divider from '@material-ui/core/Divider';
import Controls from './Controls';
import {
  BackGround,
  GameContainer,
  Box,
  Life,
  LifeLess,
  Round,
  GameHeading,
  Point,
  Parrots,
  WordTranslated,
  Word,
} from './SprintStyles';
import Timer from './Timer';

const activeInit = {
  id: false,
  img: '',
  wordTranslate: '',
};

const Sprint = () => {
  const [gamePage, setGamePage] = useState(0);
  const [gameLevel, setGameLevel] = useState(0);
  const handleTimeLeft = () => {};

  return (
    <BackGround>
      <GameHeading fluid="md">
        <Levels gamePage={gamePage} gameLevel={gameLevel} />
      </GameHeading>
      <Timer isTimerRun={true} onTimeLeft={handleTimeLeft} />
      <Point>Очки: 50</Point>
      <GameContainer>
        <Container fluid="md">
          <Box>
            <div className="d-flex justify-content-center p-2 bd-highlight mt-2">
              <Life className="m-2" />
              <LifeLess className="m-2" />
              <LifeLess className="m-2" />
            </div>
            <div className="d-flex justify-content-center p-2 bd-highlight mt-4">
              <Parrots>
                <div className="parrot parrot_blue" id="parrot-blue"></div>
                <div className="parrot parrot_yellow hide" id="parrot-yellow"></div>
                <div className="parrot parrot_brown hide" id="parrot-brown"></div>
                <div className="parrot parrot_pink hide" id="parrot-pink"></div>
              </Parrots>
            </div>
            <Divider className="mt-5 mb-3" variant="middle" />
            <div className="mt-4">
              <Word>eventually</Word>
              <WordTranslated>очевидно</WordTranslated>
              <Controls />
            </div>
          </Box>
        </Container>
      </GameContainer>
    </BackGround>
  );
};

export default Sprint;
