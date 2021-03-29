import * as React from 'react';
import { useEffect, useState, useCallback } from 'react';
import { Container, Row } from 'react-bootstrap';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import { GameContainer } from './SpeakItStyles';
import WordBox from './components/WordBox';
import Card from './components/Card';
import Controls from './components/Controls';
import { request } from './SpeakItApi';
import Results from './components/Results';

const activeInit = {
  id: false,
  img: '',
  wordTranslate: '',
};

const wordsCount = 10;
const gameMaxLevel = 6;
const gameMaxPage = 30;

const SpeakIt = () => {
  const [isFinish, setIsFinish] = useState(false);
  const [words, setWords] = useState<any>([]);
  const [active, setActive] = useState(activeInit);
  const [activeAudio, setActiveAudio] = useState('');
  const [isGameMode, setIsGameMode] = useState(false);
  const [gameWordIndex, setGameWordIndex] = useState(0);
  const [gamePage, setGamePage] = useState(0);
  const [gameLevel, setGameLevel] = useState(0);
  const [speakWord, setSpeakWord] = useState(null);
  const [numGuessedWords, setNumGuessedWords] = useState(0);
  const { finalTranscript, resetTranscript } = useSpeechRecognition();

  const startRecording = () => {
    SpeechRecognition.startListening({
      continuous: true,
      language: 'en-GB',
    });
  };

  const stopRecording = () => {
    SpeechRecognition.stopListening();
    SpeechRecognition.abortListening();
  };

  const checkWord = (word: any) => {
    if (word.toLowerCase() === words[gameWordIndex].word) {
      words[gameWordIndex].isGuessed = true;
      setNumGuessedWords(numGuessedWords + 1);
    } else {
      words[gameWordIndex].isNotGuessed = true;
    }
    resetTranscript();
  };

  const activateWord = (i: number) => {
    if (words && words[i] && Object.keys(words[i]).length > 0) {
      const newActive = { ...active };
      const { id, image, wordTranslate } = words[i];
      newActive.id = id;
      newActive.img = image;
      newActive.wordTranslate = wordTranslate;
      setActive(newActive);
      setGameWordIndex((gameWordIndex) => gameWordIndex + 1);
    }
  };

  const saveStats = useCallback(async () => {
    const date = new Date().toLocaleDateString();
    const currentGameStats = {
      date,
      wrong: wordsCount - numGuessedWords,
      right: numGuessedWords,
    };
  }, [numGuessedWords]);

  const cleanResult = () => {
    setIsFinish(false);
    setGameWordIndex(0);
    words.map((item: any) => {
      item.isGuessed = false;
      item.isNotGuessed = false;
      return item;
    });
  };

  const startGame = () => {
    setIsGameMode(true);
    setActive(activeInit);
    cleanResult();
    startRecording();
  };

  const continueGame = () => {
    setGameLevel((level) => (level + 1 < gameMaxLevel ? level + 1 : 0));
    setGamePage((page) => (page + 1 < gameMaxPage ? page + 1 : 0));
    startGame();
  };

  const finishedGame = useCallback(() => {
    setIsFinish(true);
    setIsGameMode(false);
    stopRecording();
    saveStats();
  }, [saveStats]);

  useEffect(() => {
    if (speakWord !== null && gameWordIndex < wordsCount) {
      checkWord(speakWord);
      activateWord(gameWordIndex);
    }
  }, [speakWord]);

  useEffect(() => {
    if (gameWordIndex === wordsCount) {
      finishedGame();
    }
  }, [gameWordIndex]);

  useEffect(() => {
    console.log(finalTranscript);
    if (finalTranscript !== '') {
      setSpeakWord(finalTranscript);
    }
  }, [finalTranscript]);

  const getData = async (page: number, group: number) => {
    const url = `https://afternoon-falls-25894.herokuapp.com/words?page=${page}&group=${group}`;
    try {
      const data = await request(url);
      setWords(data.slice(wordsCount));
    } catch (e) {
      console.log(e.message);
    }
  };

  useEffect(() => {
    const init = async () => {
      await getData(gamePage, gameLevel);
    };
    init();
  }, [gamePage, gameLevel]);

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
              isGameMode={isGameMode}
              activeAudio={activeAudio}
            />
          ))}
        </Row>
        <Controls
          isGameMode={isGameMode}
          startGame={startGame}
          finishedGame={finishedGame}
          continueGame={continueGame}
        />
      </Container>
      {isFinish ? (
        <Results
          words={words}
          setWords={setWords}
          setIsFinish={setIsFinish}
          setGameWordIndex={setGameWordIndex}
          startGame={startGame}
          continueGame={continueGame}
          closeResult={cleanResult}
        />
      ) : (
        ''
      )}
    </GameContainer>
  );
};

export default SpeakIt;
