import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { BackGround, GameContainer, Box, Life, LifeLess, Round } from './SprintStyles';

const activeInit = {
  id: false,
  img: '',
  wordTranslate: '',
};

const Sprint = () => {
  return (
    <>
      <Container fluid="md">
        <Round>Раунд 1.20</Round>
      </Container>
      <GameContainer>
        <div className="Sprint">
          <Container>
            <Box>
              <div className="d-flex justify-content-center p-2 bd-highlight mt-2">
                <Life className="m-1" />
                <LifeLess className="m-1" />
                <LifeLess className="m-1" />
              </div>
            </Box>
          </Container>
        </div>
      </GameContainer>
    </>
  );
};

export default Sprint;
