import { signIn } from './api.auth';
import { useAllWords, useWords, useWord } from './api.words';
import {
  createNewUser,
  useGetUserData,
  updateUser,
  deleteUser,
  useGetNewUserTokens,
} from './api.users';

const api = {
  auth: {
    signIn,
  },
  words: {
    getAllWords: useAllWords,
    getWordById: useWord,
    getWordsByLevel: useWords,
  },
  users: {
    createNewUser,
    getUser: useGetUserData,
    updateUser,
    deleteUser,
    getNewUserTokens: useGetNewUserTokens,
  },
};

export default api;
