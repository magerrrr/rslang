import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import { PlayButton, ControlButton, GameContainer } from './SpeakItStyles';
import WordBox from './components/WordBox';
import Card from './components/Card';
import { request } from './SpeakItApi';

const activeInit = {
  id: false,
  img: '',
  wordTranslate: '',
};

const wordsCount = 10;

const SpeakIt = () => {
  const [isFinish, setIsFinish] = useState(false);
  const [words, setWords] = useState([]);
  const [active, setActive] = useState(activeInit);
  const [activeAudio, setActiveAudio] = useState('');
  const [isGameMod, setIsGameMod] = useState(false);
  const [gamePage, setGamePage] = useState(0);
  const [gameLevel, setGameLevel] = useState(0);

  const getData = async (page: number, group: number) => {
    const url = `https://afternoon-falls-25894.herokuapp.com/words?page=${page}&group=${group}`;

    try {
      const data = await request(url);
      data.map((item: any) => {
        item.isGuessed = false;
        item.isNotGuessed = false;
      });
      setWords(data.slice(wordsCount));
    } catch (e) {
      console.log(e.message);
    }
  };

  async function init() {
    await getData(gamePage, gameLevel);
  }

  useEffect(() => {
    init();
  }, []);

  return (
    <GameContainer>
      <Container>
        <WordBox
          activeImg={active.img}
          activeAudio={activeAudio}
          wordTranslate={active.wordTranslate}
        />
        <Row className="justify-content-md-center">
          {words.map((item: any) => (
            <Card
              {...item}
              key={item.id}
              audio={item.audio}
              active={active}
              setActive={setActive}
              setActiveAudio={setActiveAudio}
              isGameMod={isGameMod}
              activeAudio={activeAudio}
            />
          ))}
        </Row>
      </Container>
    </GameContainer>
  );
};

export default SpeakIt;
