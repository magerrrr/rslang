import { useState, useEffect } from 'react';
import api from '../api';

const sendWordData = {
  difficulty: 'onlearn',
  optional: {
    lastDate: new Date().toDateString(),
  },
};

const useUserWord = (userId: any) => {
  const [word, setWord] = useState<any>();
  const userWord = api.usersWords.getUserWordById(userId, word && word.id);

  useEffect(() => {
    const getData = async () => {
      if (!userWord.isLoading) {
        if (userWord.word && userWord.word.wordId && userWord.word.difficulty === 'hard') {
          await api.usersWords.updateUserWord(userId, userWord.word.wordId, sendWordData);
        }
        if (userWord.isError || (userWord.word && userWord.word.error)) {
          const wordId = word && word.id;
          wordId && (await api.usersWords.createUserWord(userId, wordId, sendWordData));
        }
      }
    };
    getData();
  }, [userWord, word, userId]);

  return setWord;
};

export default useUserWord;
