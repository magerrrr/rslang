import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { PlayButton, ControlButton } from './SpeakItStyles';

const activeInit = {
  id: false,
  img: '',
  wordTranslate: '',
};

const SpeakIt = () => {
  const [isFinish, setIsFinish] = useState(false);
  const [words, setWords] = useState([]);
  const [active, setActive] = useState(activeInit);
  const [activeAudio, setActiveAudio] = useState('');
  const [isGameMod, setIsGameMod] = useState(false);
  const [gameDifficulty, setGameDifficulty] = useState(0);

  return (
    <div className="SpeakIt">
      <Container>

      </Container>
    </div>
  );
};

export default SpeakIt;
