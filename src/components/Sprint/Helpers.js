import { GAME_MAX_LEVEL, GAME_MAX_PAGE } from '../../shared/constants';

export const getInitialLevels = (gameLevel: string, gamePage: string) => {
  let level = parseInt(gameLevel, 10) || 0;
  let page = parseInt(gamePage, 10) || 0;
  if (page >= GAME_MAX_PAGE) {
    page = 0;
  }
  if (level >= GAME_MAX_LEVEL) {
      level = 0;
  }
  return {
    level,
    page,
  };
};

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

export const getRandom = (arr) => {
   return arr[Math.floor(Math.random() * arr.length)];
}

export const isCurrentTranslateCorrect = (wordsObject, currentWord, answer) => {
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


