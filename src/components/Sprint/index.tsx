import React, { useEffect, useState } from 'react';
import { Container, Col } from 'react-bootstrap';
import Levels from '../../components/Levels';
import Divider from '@material-ui/core/Divider';
import Controls from './Controls';
import { getRandom, isCurrentTranslateCorrect } from './Helpers';
import api from '../../api';
import { LeftControlButton, RightControlButton } from './SprintStyles';

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
  Series,
} from './SprintStyles';
import Timer from './Timer';

const CORRECT_WORD_CHANCE = 50;
const GUESS_FROM_QUANTITY = 100 / CORRECT_WORD_CHANCE;

const Sprint = () => {
  const [gamePage, setGamePage] = useState(0);
  const [gameLevel, setGameLevel] = useState(0);
  const [isPlay, setIsPlay] = useState(false);
  const [isPlayAndNewRaund, setIsPlayAndNewRaund] = useState(false);
  const [score, setScore] = useState(0);
  const [clickAnswerCounter, setClickAnswerCounter] = useState({
    correctAnswer: 0,
    unCorrectAnswer: 0,
  });

  const [arrayStatisticAllGames, setarrayStatisticAllGames] = useState([]);
  const [levels, setLevels] = useState(0);

  const [words, setWords] = useState([]);
  const [currentWord, setCurrentWord] = useState({}) as any;
  const [combo, setCombo] = useState(0);
  const data = api.words.getWordsByLevel(gamePage, gameLevel);

  const newRound = (words: any) => {
    const gameRoundWords = getRandom(words, GUESS_FROM_QUANTITY);
    return gameRoundWords;
  };

  const getNextWord = () => {
    if (words.length) {
      const roundWords = newRound(words);

      const enWord = roundWords[0].word;
      const ruWord = getRandom(roundWords, 1)[0].wordTranslate;

      setCurrentWord({ enWord, ruWord });
    }
  };

  const scoreCounter = (answer: boolean) => {
    const isCorrectAnswer = isCurrentTranslateCorrect(words, currentWord) === answer;

    let kkkkombo = 0;

    if (isCorrectAnswer) {
      setClickAnswerCounter({
        ...clickAnswerCounter,
        correctAnswer: clickAnswerCounter.correctAnswer + 1,
      });
      if (combo < 4) {
        kkkkombo = combo + 1;
      }
      if (combo === 4) {
        kkkkombo = combo;
      }
    } else {
      setClickAnswerCounter({
        ...clickAnswerCounter,
        unCorrectAnswer: clickAnswerCounter.unCorrectAnswer + 1,
      });
    }

    setCombo(kkkkombo);

    switch (kkkkombo) {
      case 1:
        setScore(score + 10);
        break;

      case 2:
        setScore(score + 20);
        break;

      case 3:
        setScore(score + 40);
        break;

      case 4:
        setScore(score + 80);
        break;

      default:
        break;
    }
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

  const handleTimeLeft = () => {
    setIsPlay(false);
  };

  useEffect(() => {
    window.addEventListener('keyup', handleKeyPress);
    return () => {
      window.removeEventListener('keyup', handleKeyPress);
    };
  });

  useEffect(() => {
    getNextWord();
  }, [words]);

  useEffect(() => {
    if (!data.isLoading) {
      setWords(data.word);
    }
  }, [data.isLoading, data.word]);

  return (
    <BackGround>
      <Timer isTimerRun={isPlay} onTimeLeft={handleTimeLeft} />
      <Point>Очки: {score}</Point>
      <GameContainer>
        <Container fluid="md">
          {isPlay ? (
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
        </Container>
      </GameContainer>
    </BackGround>
  );
};

export default Sprint;
