import * as React from 'react';
import FullscreenIcon from '@material-ui/icons/Fullscreen';
import { useEffect, useState, useCallback, useRef } from 'react';
import { Container, Row } from 'react-bootstrap';
import useFullScreen from '../../hooks/useFullScreen';
import useCheckAuthenticate from '../../hooks/useCheckAuthenticate';
import useAudio from '../../hooks/useAudio';
import { GameContainer } from './SpeakItStyles';
import WordBox from './components/WordBox';
import Card from './components/Card';
import Levels from '../../components/Levels';
import Controls from './components/Controls';
import { startRecording, stopRecording, useGetSpeakWord } from './helpers/SpeechRecognition';
import Results from './components/Results';
import { activeInit, wordsCount } from './helpers/Constants';
import { getLevels } from './helpers/Game';
import success from '../../assets/guessed.wav';
import api from '../../api';

const SpeakIt = () => {
  const [isFinish, setIsFinish] = useState(false);
  const [words, setWords] = useState<any>([]);
  const [active, setActive] = useState(activeInit);
  const [isGameMode, setIsGameMode] = useState(false);
  const [gameWordIndex, setGameWordIndex] = useState(0);
  const [gamePage, setGamePage] = useState(0);
  const [gameLevel, setGameLevel] = useState(0);
  const [speakWord, resetTranscript] = useGetSpeakWord();
  const [numGuessedWords, setNumGuessedWords] = useState(0);
  const authorized = useCheckAuthenticate();
  const guessedSound = useRef(new Audio(success));
  const [audio, playAudio] = useAudio();
  const onFullScreenChange = useFullScreen();
  const data = api.words.getWordsByLevel(gamePage, gameLevel);

  const saveStats = useCallback(async () => {
    const date = new Date().toLocaleDateString();
    const currentGameStats = {
      date,
      wrong: wordsCount - numGuessedWords,
      right: numGuessedWords,
    };
    console.log(currentGameStats);
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
    const { level, page } = getLevels(gameLevel, gamePage);
    setGameLevel(level);
    setGamePage(page);
    startGame();
  };

  /* eslint-disable react-hooks/exhaustive-deps */
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
  /* eslint-disable react-hooks/exhaustive-deps */

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
        <FullscreenIcon onClick={onFullScreenChange} />
        <Levels
          setGameLevel={setGameLevel}
          setGamePage={setGamePage}
          gameLevel={gameLevel + 1}
          gamePage={gamePage + 1}
        />
        <div className="fullscreen-toggler">
          <WordBox activeImg={active.img} audio={audio} wordTranslate={active.wordTranslate} />
          <Row className="justify-content-center">
            {words.map((item: any) => (
              <Card
                {...item}
                key={item.id}
                audio={item.audio}
                active={active}
                setActive={setActive}
                setActiveAudio={playAudio}
                isGameMode={isGameMode}
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
        </div>
      </Container>
      {isFinish ? (
        <Results
          words={words}
          setIsFinish={setIsFinish}
          startGame={startGame}
          continueGame={continueGame}
          closeResult={cleanResult}
          authorized={authorized}
        />
      ) : (
        ''
      )}
    </GameContainer>
  );
};

export default SpeakIt;
