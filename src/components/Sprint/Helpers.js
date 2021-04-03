import { GAME_MAX_LEVEL, GAME_MAX_PAGE } from '../../shared/constants';

export const getLevels = (gameLevel: number, gamePage: number) => {
  let level = gameLevel;
  let page = gamePage + 1;
  if (page === GAME_MAX_PAGE) {
    page = 0;
    level = gameLevel + 1;
    if (level === GAME_MAX_LEVEL) {
      level = 0;
    }
  }
  return {
    level,
    page,
  };
};

export function getRandom (arr, n) {
  const result = new Array(n);
  let len = arr.length;
  const taken = new Array(len);
  if (n > len) throw new RangeError('getRandom: more elements taken than available');
  while (n--) {
    const x = Math.floor(Math.random() * len);
    result[n] = arr[x in taken ? taken[x] : x];
    taken[x] = --len in taken ? taken[len] : len;
  }
  return result;
}

export function isCurrentTranslateCorrect (wordsObject, currentWord, answer) {
  if (wordsObject.length) {
    const findWord = wordsObject.find((item) => {
      return item.word === currentWord.enWord;
    });

    if (findWord) {
      const correctAnswer = findWord.wordTranslate === currentWord.ruWord;
      const guessed = correctAnswer === answer;
      findWord.isGuessed = guessed;
      return guessed;
    }
  }
};

export const getScorePoints = (pointsFactor: any) => {
    switch (pointsFactor) {
      case 1:
        return 10;
      case 2:
        return 20;
      case 3:
        return 40;
      case 4:
        return 80;
      default:
        return 80;
    }
};


