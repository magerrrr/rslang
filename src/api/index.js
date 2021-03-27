import { signIn } from './api.auth';
import { useWords, useWord } from './api.words';
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
    getAllWords: useWords,
    getWordById: useWord,
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
