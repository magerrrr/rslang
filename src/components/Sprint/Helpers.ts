export const getRandom = (arr: any) => {
  return arr[Math.floor(Math.random() * arr.length)];
};

export const getCurrentWordTranslate = (wordsObject: any, currentWord: any, answer: boolean) => {
  let findWord;
  if (wordsObject.length) {
    findWord = wordsObject.find((item: any) => {
      return item.word === currentWord.enWord;
    });

    if (findWord) {
      const correctAnswer = findWord.wordTranslate === currentWord.ruWord;
      const guessed = correctAnswer === answer;
      findWord.isGuessed = guessed;
    }
  }
  return findWord;
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
