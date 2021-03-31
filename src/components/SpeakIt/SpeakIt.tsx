import * as React from 'react';
import { useEffect, useState, useCallback, useRef } from 'react';
import { Container, Row } from 'react-bootstrap';
import useCheckAuthenticate from '../../hooks/useCheckAuthenticate';
import { GameContainer } from './SpeakItStyles';
import WordBox from './components/WordBox';
import Card from './components/Card';
import Levels from '../../components/Levels';
import Controls from './components/Controls';
import { startRecording, stopRecording, useGetSpeakWord } from './helpers/SpeechRecognition';
import Results from './components/Results';
import { activeInit, wordsCount } from './helpers/Constants';
import { GAME_MAX_LEVEL, GAME_MAX_PAGE } from '../../shared/constants';
import success from '../../assets/guessed.wav';
import fail from '../../assets/fail.mp3';
import api from '../../api';

const SpeakIt = () => {
  const [isFinish, setIsFinish] = useState(false);
  const [words, setWords] = useState<any>([]);
  const [active, setActive] = useState(activeInit);
  const [activeAudio, setActiveAudio] = useState('');
  const [isGameMode, setIsGameMode] = useState(false);
  const [gameWordIndex, setGameWordIndex] = useState(0);
  const [gamePage, setGamePage] = useState(0);
  const [gameLevel, setGameLevel] = useState(0);
  const [speakWord, resetTranscript] = useGetSpeakWord();
  const [numGuessedWords, setNumGuessedWords] = useState(0);
  const authorized = useCheckAuthenticate();
  const guessedSound = useRef(new Audio(success));
  const failSound = useRef(new Audio(fail));
  const data = api.words.getWordsByLevel(gamePage, gameLevel);

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
    let level = gameLevel;
    let page = gamePage + 1;
    if (page === GAME_MAX_PAGE) {
      page = 0;
      level = gameLevel + 1;
      if (level === GAME_MAX_LEVEL) {
        level = 0;
      }
    }
    setGameLevel(level);
    setGamePage(page);
    startGame();
  };

  const finishedGame = useCallback(() => {
    setIsFinish(true);
    setIsGameMode(false);
    stopRecording();
    saveStats();
  }, [saveStats]);

  useEffect(() => {
    let ignore = false;
    const checkWord = (word: any) => {
      const wordIndex = words.findIndex(
        (item: any) => item.word.toLowerCase() === word.toLowerCase(),
      );
      if (wordIndex > -1) {
        words[wordIndex].isGuessed = true;
        guessedSound.current.play();
        setNumGuessedWords((numGuessedWords) => numGuessedWords + 1);
      } else {
        //words[wordIndex].isNotGuessed = true;
        //failSound.current.play();
      }
      resetTranscript();
      return wordIndex;
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

    if (!ignore && speakWord !== null && gameWordIndex < wordsCount) {
      const wordIndex = checkWord(speakWord);
      activateWord(wordIndex);
    }
    return () => {
      ignore = true;
    };
  }, [speakWord]);

  useEffect(() => {
    if (gameWordIndex === wordsCount) {
      finishedGame();
    }
  }, [gameWordIndex, finishedGame]);

  useEffect(() => {
    if (!data.isLoading) {
      const cloneData = [...data.word].slice(wordsCount);
      setWords(cloneData);
    }
  }, [data.isLoading, data.word, gamePage, gameLevel]);

  return (
    <GameContainer>
      <Container>
        <Levels
          setGameLevel={setGameLevel}
          setGamePage={setGamePage}
          gameLevel={gameLevel + 1}
          gamePage={gamePage + 1}
        />
        <WordBox
          activeImg={active.img}
          activeAudio={activeAudio}
          wordTranslate={active.wordTranslate}
        />
        <Row className="justify-content-center">
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
          cleanResult={cleanResult}
        />
      </Container>
      {isFinish ? (
        <Results
          words={words}
          setIsFinish={setIsFinish}
          startGame={startGame}
          continueGame={continueGame}
          closeResult={cleanResult}
          setActiveAudio={setActiveAudio}
        />
      ) : (
        ''
      )}
    </GameContainer>
  );
};

export default SpeakIt;
