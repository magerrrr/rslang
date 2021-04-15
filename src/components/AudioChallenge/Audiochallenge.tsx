import React, { useState, useCallback } from 'react';
import {
  GameContainer,
  Box,
  AudioImage,
  ButtonContainer,
  Button,
  StartButton,
  NextWord,
} from './AudiochallengeStyle';
import useAudio from '../../hooks/useAudio';
import api from '../../api';
import success from '../../assets/audio/guessed.wav';
import fail from '../../assets/audio/fail.mp3';
import Final from './Components/Final';

interface State {
  audio: string;
  enWord: string;
  ruWord: string;
  isChecked: any;
}

const AudioChallenge = () => {
  const initialState: State = {
    audio: '',
    enWord: '',
    ruWord: '',
    isChecked: null,
  };
  const [count, setCount] = useState(0);
  const [isGameOver, setIsGameOver] = useState(false);
  const data = api.words.getAllWords();
  const [words, setWords] = useState<any>([]);
  const [gameWords, setGameWords] = useState<any>([initialState]);
  const [translate, setTranslate] = useState([]);
  const [currentWord, setCurrentWord] = useState({
    audio: '',
    enWord: '',
    ruWord: '',
    isChecked: false,
  } as any);
  const [audio, playAudio] = useAudio();
  const [playable, setPlayable] = useState(false);
  const [clickAnswerCounter, setClickAnswerCounter] = useState({
    correctAnswer: 0,
    unCorrectAnswer: 0,
  });

  const successSound = new Audio(success);
  const failSound = new Audio(fail);

  const getRandom = (arr: any) => {
    return arr[Math.floor(Math.random() * arr.length)];
  };

  const handleNewGame = () => {
    setClickAnswerCounter({
      correctAnswer: 0,
      unCorrectAnswer: 0,
    });
  };

  const getNextWord = useCallback(() => {
    if (words.length) {
      const restWords = words.filter((word: any) => word.isGuessed !== null);

      if (restWords.length > 0) {
        const nextWord = getRandom(restWords);
        const audio = nextWord.audio;
        const enWord = nextWord.word;
        const ruWord = nextWord.wordTranslate;
        setCurrentWord({ audio, enWord, ruWord });
      } else {
        setIsGameOver(true);
      }
    }
  }, [words]);

  const handleClick = () => {
    if (playable) playAudio(currentWord.audio);
    setPlayable(true);
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
      let res = gameWords.map((item: any) => {
        if (item.ruWord === currentWord.ruWord) {
          item.isChecked = true;
        }
        return item;
      });
      setGameWords(res);
    } else {
      setClickAnswerCounter({
        ...clickAnswerCounter,
        unCorrectAnswer: clickAnswerCounter.unCorrectAnswer + 1,
      });
      let res = gameWords.map((item: any) => {
        if (item.enWord === currentWord.enWord) {
          item.isChecked = false;
        }
        return item;
      });
      setGameWords(res);
    }
  };

  const roundOver = () => {
    gameWords.forEach((item: any) => {
      if (item.isChecked != null) {
        setCount(count + 1);
      }
    });
    if (count === 5) {
      setIsGameOver(true);
    }
  };

  const handlerNext = (e: any) => {
    getNextWord();
  };

  const handleCheckAnswer = (e: any) => {
    roundOver();
    scoreCounter(e);
    if (e.target.textContent === currentWord.ruWord) {
      successSound.play();
    } else {
      failSound.play();
    }
  };

  const random = (count: number) => {
    return Math.floor(Math.random() * count);
  };

  const shuffleWords = (array: any) => {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  const getRandomTranslate = useCallback(() => {
    let filteredCurrent = gameWords.filter((item: any) => item.ruWord === currentWord.ruWord)[0];
    let filteredWords = gameWords.filter((item: any) => item.ruWord !== currentWord.ruWord);
    const startArray: any = [filteredCurrent];
    const randomTranslate = filteredWords.splice(random(17), 3);
    const result = startArray.concat(randomTranslate);
    const res = shuffleWords(result);
    setTranslate(res);
  }, [currentWord.ruWord, gameWords]);

  React.useEffect(() => {
    if (!data.isLoading) {
      setWords(data.words);
      const wordsGame = data.words.map((item: any) => {
        return {
          audio: item.audio,
          enWord: item.word,
          ruWord: item.wordTranslate,
          isChecked: null,
        };
      });
      setGameWords(wordsGame);
    }
  }, [data.isLoading, data.words]);

  React.useEffect(() => {
    getNextWord();
  }, [words, getNextWord]);

  React.useEffect(() => {
    playable && currentWord.audio && playAudio(currentWord.audio);
  }, [currentWord.audio, playAudio, playable]);

  React.useEffect(() => {
    if (currentWord && currentWord.enWord) {
      getRandomTranslate();
    }
  }, [currentWord, getRandomTranslate]);

  return (
    <GameContainer>
      {isGameOver ? (
        <>
          <StartButton onClick={() => setIsGameOver(false)}>Начать Игру</StartButton>
          <Final
            words={gameWords}
            answer={clickAnswerCounter}
            handleNewGame={handleNewGame}
            //restartGame={restartGame}
          />{' '}
        </>
      ) : (
        <Box>
          <AudioImage onClick={handleClick}>
            <audio ref={audio} />
          </AudioImage>
          <ButtonContainer>
            {translate.map((item: any, i: number) => {
              return (
                <Button key={`btn-${i}`} onClick={handleCheckAnswer}>
                  {item.ruWord}
                </Button>
              );
            })}
          </ButtonContainer>
          <NextWord onClick={(e) => handlerNext(e)}>Следующее</NextWord>
        </Box>
      )}
    </GameContainer>
  );
};

export default AudioChallenge;
