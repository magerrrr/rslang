import * as React from 'react';
import { useEffect, useState, useCallback } from 'react';
import { useParams } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import FullscreenIcon from '@material-ui/icons/Fullscreen';
import useFullScreen from '../../hooks/useFullScreen';
import useCheckAuthenticate from '../../hooks/useCheckAuthenticate';
import Levels from '../../components/Levels';
import Divider from '@material-ui/core/Divider';
import Controls from './Controls';
import LivesContent from './Lives';
import Results from './Results';
import {
  getRandom,
  isCurrentTranslateCorrect,
  getInitialLevels,
  getLevels,
  getScorePoints,
} from './Helpers';
import api from '../../api';
import { LeftControlButton } from './SprintStyles';
import success from '../../assets/guessed.wav';
import fail from '../../assets/fail.mp3';

import {
  BackGround,
  GameContainer,
  Box,
  GameHeading,
  Point,
  Parrots,
  WordTranslated,
  Word,
} from './SprintStyles';
import Timer from './Timer';

const POINTS_COUNT = 3;

const Sprint = () => {
  const { page } = useParams();
  const { group } = useParams();
  const isAuthorized = useCheckAuthenticate();
  const initialLevels = isAuthorized ? getInitialLevels(group, page) : { page: 0, level: 0 };
  const [isFinish, setIsFinish] = useState(false);
  const [gamePage, setGamePage] = useState(initialLevels.page);
  const [gameLevel, setGameLevel] = useState(initialLevels.level);
  const [isPlay, setIsPlay] = useState(false);
  const [score, setScore] = useState(0);
  const [clickAnswerCounter, setClickAnswerCounter] = useState({
    correctAnswer: 0,
    unCorrectAnswer: 0,
  });
  const [words, setWords] = useState([]);
  const [currentWord, setCurrentWord] = useState({}) as any;
  const [lives, setLives] = useState(0);

  const data = api.words.getWordsByLevel(gamePage, gameLevel);
  const successSound = new Audio(success);
  const failSound = new Audio(fail);
  const onFullScreenChange = useFullScreen();

  const restartGame = () => {
    setIsFinish(false);
    setIsPlay(true);
  };

  const continueGame = () => {
    setIsFinish(false);
    const { level, page } = getLevels(gameLevel, gamePage);
    setGameLevel(level);
    setGamePage(page);
    setIsPlay(true);
  };

  const cleanResult = () => {
    words.map((item: any) => {
      item.isGuessed = false;
      return item;
    });
    setIsFinish(false);
  };

  const getNextWord = useCallback(() => {
    if (words.length) {
      const restWords = words.filter((word: any) => !word.isGuessed);
      if (restWords.length > 0) {
        const nextWord = getRandom(restWords);
        const enWord = nextWord.word;
        const ruWord =
          Math.random() < 0.5 ? getRandom(words).wordTranslate : nextWord.wordTranslate;
        setCurrentWord({ enWord, ruWord });
      } else {
        setIsFinish(true);
      }
    }
  }, [words]);

  const scoreCounter = (answer: boolean) => {
    const isCorrectAnswer = isCurrentTranslateCorrect(words, currentWord, answer);

    let pointsFactor = 1;

    if (isCorrectAnswer) {
      successSound.play();
      setClickAnswerCounter({
        ...clickAnswerCounter,
        correctAnswer: clickAnswerCounter.correctAnswer + 1,
      });
      pointsFactor = Math.floor(lives / POINTS_COUNT) + 1;
      setLives((lives) => lives + 1);
    } else {
      failSound.play();
      setLives(0);
      setClickAnswerCounter({
        ...clickAnswerCounter,
        unCorrectAnswer: clickAnswerCounter.unCorrectAnswer + 1,
      });
    }

    setScore((score) => score + getScorePoints(pointsFactor));
  };

  const handleSelect = (isCorrect: boolean) => {
    scoreCounter(isCorrect);
    getNextWord();
  };

  const handleKeyPress = ({ key = '' }) => {
    if (key === 'ArrowLeft') {
      handleSelect(false);
    }

    if (key === 'ArrowRight') {
      handleSelect(true);
    }
  };

  const handleTimeLeft = useCallback(() => {
    setIsFinish(true);
  }, []);

  useEffect(() => {
    window.addEventListener('keyup', handleKeyPress);
    return () => {
      window.removeEventListener('keyup', handleKeyPress);
    };
  });

  useEffect(() => {
    getNextWord();
  }, [words, getNextWord]);

  useEffect(() => {
    setLives(0);
    setScore(0);
    if (isFinish) {
      setIsPlay(false);
    }
  }, [isFinish]);

  useEffect(() => {
    if (!data.isLoading) {
      setWords(data.word);
    }
  }, [data.isLoading, data.word]);

  return (
    <BackGround className="fullscreen-toggler">
      <FullscreenIcon onClick={onFullScreenChange} />
      <Timer isTimerRun={isPlay} onTimeLeft={handleTimeLeft} />
      <Point>Очки: {score}</Point>
      <GameContainer>
        <Container fluid="md">
          {isPlay ? (
            <Box>
              <div className="d-flex justify-content-center p-2 bd-highlight mt-2">
                <LivesContent lives={lives} />
              </div>
              <div className="d-flex justify-content-center p-2 bd-highlight mt-4">
                <Parrots>
                  <div className={`parrot parrot_1`}></div>
                  <div className={`parrot parrot_2 ${lives <= POINTS_COUNT && 'hide'}`}></div>
                  <div
                    className={`parrot parrot_3 ${
                      lives <= POINTS_COUNT * (POINTS_COUNT - 1) && 'hide'
                    }`}
                  ></div>
                  <div
                    className={`parrot parrot_4 ${lives <= POINTS_COUNT * POINTS_COUNT && 'hide'}`}
                  ></div>
                </Parrots>
              </div>
              <Divider className="mt-4 mb-3" variant="middle" />
              <div className="mt-4">
                <Word>{currentWord.enWord}</Word>
                <WordTranslated>{currentWord.ruWord}</WordTranslated>
                <Controls handleSelect={handleSelect} />
              </div>
            </Box>
          ) : (
            <Box>
              <GameHeading fluid="md">
                <Levels
                  isAuthorized={isAuthorized}
                  gamePage={gamePage + 1}
                  gameLevel={gameLevel + 1}
                  setGamePage={setGamePage}
                  setGameLevel={setGameLevel}
                />
                <LeftControlButton
                  className="d-flex justify-content-center p-2 bd-highlight mt-4"
                  onClick={() => setIsPlay(true)}
                >
                  <p>играть</p>
                </LeftControlButton>
              </GameHeading>
            </Box>
          )}
          {isFinish ? (
            <Results
              words={words}
              restartGame={restartGame}
              continueGame={continueGame}
              closeResult={cleanResult}
            />
          ) : (
            ''
          )}
        </Container>
      </GameContainer>
    </BackGround>
  );
};

export default Sprint;
