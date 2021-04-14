import * as React from 'react';
import { useEffect, useState, useCallback } from 'react';
import { useParams } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import FullscreenIcon from '@material-ui/icons/Fullscreen';
import useFullScreen from '../../hooks/useFullScreen';
import useGetCurrentUserId from '../../hooks/useGetCurrentUserId';
import useUserWord from '../../hooks/useUserWord';
import Levels from '../../components/Levels';
import Divider from '@material-ui/core/Divider';
import Controls from './Controls';
import LivesContent from './Lives';
import Results from './Results';
import { getRandom, getCurrentWordTranslate, getScorePoints } from './Helpers';
import { getInitialLevels, getLevels, getInitialStats, getStatistics } from '../../shared/helpers';
import { increaseSeries, resetSeries, maxSeries } from './SeriesHelper';
import api from '../../api';
import { LeftControlButton } from './SprintStyles';
import success from '../../assets/audio/guessed.wav';
import fail from '../../assets/audio/fail.mp3';

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
const initialStatsData = {
  isLoading: false,
  statistics: null,
};
const initialAnswerCounter = {
  correctAnswer: 0,
  inCorrectAnswer: 0,
};

const Sprint = () => {
  const { page } = useParams<any>();
  const { group } = useParams<any>();
  const userId = useGetCurrentUserId();
  const initialLevels = userId ? getInitialLevels(group, page) : { page: 0, level: 0 };
  const [isFinish, setIsFinish] = useState(false);
  const [gamePage, setGamePage] = useState(initialLevels.page);
  const [gameLevel, setGameLevel] = useState(initialLevels.level);
  const [isPlay, setIsPlay] = useState(false);
  const [score, setScore] = useState(0);
  const [clickAnswerCounter, setClickAnswerCounter] = useState(initialAnswerCounter);
  const [correctAnswerCounter, setCorrectAnswerCounter] = useState([0]);
  const [words, setWords] = useState([]);
  const [currentWord, setCurrentWord] = useState({}) as any;
  const [lives, setLives] = useState(0);

  const data = api.words.getWordsByLevel(gamePage, gameLevel);
  const statsData = userId ? api.usersStatistic.getStatistics(userId) : initialStatsData;

  const [stats, setStats] = useState<any>();
  const setWord = useUserWord(userId);

  const successSound = new Audio(success);
  const failSound = new Audio(fail);
  const onFullScreenChange = useFullScreen();

  const cleanStats = () => {
    setCorrectAnswerCounter([0]);
    setClickAnswerCounter(initialAnswerCounter);
    initStats();
  };

  const restartGame = () => {
    cleanResult();
    setIsPlay(true);
  };

  const continueGame = () => {
    cleanStats();
    setIsFinish(false);
    const { level, page } = getLevels(gameLevel, gamePage);
    setGameLevel(level);
    setGamePage(page);
    setIsPlay(true);
  };

  const cleanResult = () => {
    words.map((item: any) => {
      delete item.isGuessed;
      return item;
    });
    cleanStats();
    setIsFinish(false);
  };

  const getNextWord = useCallback(() => {
    if (words.length) {
      const restWords = words.filter((word: any) => word.isGuessed == null);
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
    const currentWordTranslate = getCurrentWordTranslate(words, currentWord, answer);
    userId && setWord(currentWordTranslate);
    let pointsFactor = 1;
    if (currentWordTranslate.isGuessed) {
      successSound.play();
      setCorrectAnswerCounter((series) => increaseSeries(series));
      setClickAnswerCounter((prevCounter) => {
        return {
          ...prevCounter,
          correctAnswer: clickAnswerCounter.correctAnswer + 1,
        };
      });
      pointsFactor = Math.floor(lives / POINTS_COUNT) + 1;
      setLives((lives) => lives + 1);
    } else {
      failSound.play();
      setLives(0);
      setCorrectAnswerCounter((series) => resetSeries(series));
      setClickAnswerCounter((prevCounter) => {
        return {
          ...prevCounter,
          inCorrectAnswer: clickAnswerCounter.inCorrectAnswer + 1,
        };
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
    userId && stats && api.usersStatistic.updateStatistics(userId, stats);
  }, [userId, stats]);

  /* eslint-disable react-hooks/exhaustive-deps */
  useEffect(() => {
    const setStatistic = () => {
      const date = new Date().toLocaleDateString();
      const guessed = words.filter((word: any) => word.isGuessed);
      const currentGameStats = {
        date,
        success: guessed.length,
        fail: words.length - guessed.length,
        series: maxSeries(correctAnswerCounter),
      };

      setStats((prevStat: any) => {
        const { correctAnswer, inCorrectAnswer } = clickAnswerCounter;
        const learnedWords = correctAnswer + inCorrectAnswer;
        return getStatistics(prevStat, currentGameStats, learnedWords, 'sprint');
      });
    };
    setLives(0);
    setScore(0);
    if (isFinish) {
      setIsPlay(false);
      if (userId) {
        setStatistic();
      }
    }
  }, [isFinish]);
  /* eslint-disable react-hooks/exhaustive-deps */

  useEffect(() => {
    if (!isFinish && !data.isLoading) {
      const clonedData = [...data.word] as any;
      setWords(clonedData);
    }
  }, [data.isLoading, data.word]);

  const initStats = () => {
    if (!statsData.isLoading) {
      setStats(getInitialStats(statsData.statistics));
    }
  };

  useEffect(() => {
    initStats();
  }, [statsData.isLoading, statsData.statistics]);

  return (
    <BackGround className="fullscreen-toggler">
      <FullscreenIcon onClick={onFullScreenChange} />
      <Timer isTimerRun={isPlay} onTimeLeft={handleTimeLeft} stopTimer={isFinish} />
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
                  isDisabled={page && group}
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

export { Sprint };
