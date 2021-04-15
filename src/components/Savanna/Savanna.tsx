import React, { useState, useEffect, useRef } from 'react';
import { GameContainer, Box, ButtonContainer } from './SavannaStyle';
import StartGame from './components/StartGame';
import Button from './components/Button';
import NewWord from './components/NewWord';
import MoveCounter from './components/MoveCounter';
import Final from './components/Final';
import { random, shuffleWords } from './helpers/Functions';
import api from '../../api';
import './styles.css';
import success from '../../assets/guessed.wav';
import fail from '../../assets/fail.mp3';

interface State {
  enWord: string;
  ruWord: string;
  isChecked: boolean;
  isCheckedAnswer: number;
}

interface State2 {
  ruWord: string;
  isTrue: boolean;
  isFalse: boolean;
}

const Savanna = () => {
  const intialState: State = {
    enWord: '',
    ruWord: '',
    isChecked: false,
    isCheckedAnswer: 0,
  };

  const intialStateRu: State2 = {
    ruWord: '',
    isTrue: false,
    isFalse: false,
  };

  const [active, setActive] = useState(false);
  const [isLoad, setIsLoad] = useState(false);
  const [count, setCount] = useState(0);
  const [wrongAnswer, setWrongAnswer] = useState(0);
  const [words, setWords] = useState<any>([]);
  const [currentWord, setCurrentWord] = useState<any>({});
  const wordsCount = 20;
  const [translate, setTranslate] = useState<any>([]);
  const [gameWords, setGameWords] = useState([intialState]);
  const [gameWordsTranslate, setGameWordsTranslate] = useState<any>([intialStateRu]);
  const [isGameOver, setIsGameOver] = useState(false);
  const [clickAnswerCounter, setClickAnswerCounter] = useState({
    correctAnswer: 0,
    unCorrectAnswer: 0,
  });
  const data = api.words.getAllWords();
  const nodeRef = React.useRef<HTMLDivElement>(null);

  const successSound = new Audio(success);
  const failSound = new Audio(fail);

  const handleClick = () => {
    setActive(!active);
  };

  const restartGame = () => {
    setIsGameOver(false);
  };

  const handleNewGame = () => {
    newRound();
    newGame();
    setClickAnswerCounter({
      correctAnswer: 0,
      unCorrectAnswer: 0,
    });
  };

  const newGame = () => {
    const res = gameWords.map((item) => {
      if (item.isChecked) {
        item.isChecked = false;
      }
      if (item.isCheckedAnswer === 1 || item.isCheckedAnswer === -1) {
        item.isCheckedAnswer = 0;
      }
      return item;
    });
    setGameWords(res);
  };

  //Getting 4 random words for round
  const getRandomTranslate = () => {
    let current = '';
    gameWordsTranslate.forEach((item: any) => {
      if (currentWord.ruWord === item.ruWord) {
        current = item;
      }
    });

    let filtredGameWordsTranslate = gameWordsTranslate.filter((item: any) => {
      if (item.ruWord !== currentWord.ruWord) {
        return item;
      }
    });
    const startArray: any = [current];
    const randomTranslate = filtredGameWordsTranslate.splice(random(17), 3);
    const result = startArray.concat(randomTranslate);
    const res = shuffleWords(result);
    setTranslate(res);
  };

  const roundOver = () => {
    gameWords.forEach((item) => {
      if (!item.isChecked) {
        setCount(count + 1);
      }
    });
    if (clickAnswerCounter.unCorrectAnswer === 2) {
      setIsGameOver(true);
    }
    if (count === 20) {
      setIsGameOver(true);
    }
  };

  const isCurrentTranslateCorrect = (clickWord: any, currentWord: any) => {
    return clickWord === currentWord;
  };

  const scoreCounter = (e: any) => {
    const isCorrectAnswer = isCurrentTranslateCorrect(e.target.textContent, currentWord.ruWord);

    if (isCorrectAnswer) {
      setClickAnswerCounter({
        ...clickAnswerCounter,
        correctAnswer: clickAnswerCounter.correctAnswer + 1,
      });
      let res = gameWords.map((item) => {
        if (item.enWord === currentWord.enWord) {
          item.isCheckedAnswer = 1;
        }
        return item;
      });
      setGameWords(res);
    } else {
      setClickAnswerCounter({
        ...clickAnswerCounter,
        unCorrectAnswer: clickAnswerCounter.unCorrectAnswer + 1,
      });
      let res = gameWords.map((item) => {
        if (item.enWord === currentWord.enWord) {
          item.isCheckedAnswer = -1;
        }
        return item;
      });
      setGameWords(res);
    }
  };

  const usedWord = (num: any) => {
    let res = gameWords.map((item) => {
      if (item.enWord === gameWords[num].enWord) {
        item.isChecked = true;
      }
      return item;
    });
    setGameWords(res);
  };

  const newRound = () => {
    let res = translate.map((item: any) => {
      if (item.isTrue) {
        item.isTrue = false;
      }
      if (item.isFalse) {
        item.isFalse = false;
      }
      return item;
    });
    setTranslate(res);

    let numRandom = random(wordsCount - 1);
    if (!gameWords[numRandom].isChecked) {
      usedWord(numRandom);
      setCurrentWord(gameWords[numRandom]);
    } else {
      setCurrentWord(gameWords[random(wordsCount - 1)]);
    }

    getRandomTranslate();
    roundOver();
  };

  const handlerAnswer = (e: any) => {
    if (e.target.textContent === currentWord.ruWord) {
      successSound.play();
      let a = translate.map((item: any) => {
        if (e.target.textContent === item.ruWord) {
          item.isTrue = true;
        }
        return item;
      });
      setTranslate(a);

      setTimeout(() => newRound(), 500);
      scoreCounter(e);
    } else if (e.target.textContent !== currentWord.ruWord) {
      failSound.play();
      let a = translate.map((item: any) => {
        if (e.target.textContent === item.ruWord) {
          item.isFalse = true;
        }
        return item;
      });

      setTranslate(a);
      if (wrongAnswer === 4) {
        roundOver();
      }
      setWrongAnswer(wrongAnswer + 1);

      setTimeout(() => newRound(), 500);
      scoreCounter(e);
    }
  };

  //Getting data from server
  useEffect(() => {
    if (!data.isLoading) {
      setWords(data.words);

      const wordsGame = data.words.map((item: any) => {
        return {
          enWord: item.word,
          ruWord: item.wordTranslate,
          isChecked: false,
          isCheckedAnswer: 0,
        };
      });
      setGameWords(wordsGame);

      const arr = data.words.map((item: any) => {
        return {
          ruWord: item.wordTranslate,
          isTrue: false,
          isFalse: false,
        };
      });
      setGameWordsTranslate(arr);
      setIsLoad(true);
    }
  }, [data.isLoading, data.words]);

  //Start new round depending on the data
  useEffect(() => {
    if (isLoad) {
      newRound();
    }
  }, [words, isLoad]);

  useEffect(() => {
    getRandomTranslate();
  }, [currentWord.ruWord]);

  useEffect(() => {
    if (isGameOver) {
      setCount(0);
    }
  }, [isGameOver]);

  return (
    <GameContainer>
      <StartGame active={active} handleClick={handleClick} />
      {isGameOver ? (
        <Final
          words={gameWords}
          answer={clickAnswerCounter}
          handleNewGame={handleNewGame}
          restartGame={restartGame}
        />
      ) : (
        <Box className={!active ? 'hidden' : 'flex'}>
          <MoveCounter unCorrect={clickAnswerCounter.unCorrectAnswer} />
          <NewWord word={currentWord.enWord} ref={nodeRef} />
          <ButtonContainer>
            {translate.map((item: any, i: number) => {
              return (
                <Button
                  key={i}
                  word={item.ruWord}
                  handlerAnswer={handlerAnswer}
                  isTrueAnswer={item.isTrue}
                  isFalseAnswer={item.isFalse}
                />
              );
            })}
          </ButtonContainer>
        </Box>
      )}
    </GameContainer>
  );
};

export default Savanna;
