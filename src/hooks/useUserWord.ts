import { useState } from 'react';
import api from '../api';

const sendWordData = {
  difficulty: 'onlearn',
  optional: {
    lastDate: new Date().toDateString(),
  },
};

const useUserWord = (userId: any) => {
  const [word, setWord] = useState<any>({ id: -1 });

  api.usersWords.createUserWord(userId, word.id, sendWordData);
  const userWord = api.usersWords.getUserWordById(userId, word.id);
  if (userWord && userWord.word && userWord.word.difficulty === 'hard') {
    api.usersWords.updateUserWord(userId, userWord.word.wordId, sendWordData);
  }

  return setWord;
};

export default useUserWord;
