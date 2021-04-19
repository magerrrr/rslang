import { signIn } from './api.auth';
import { useAllWords, useWords, useWord } from './api.words';
import {
  createNewUser,
  useGetUserData,
  updateUser,
  deleteUser,
  useGetNewUserTokens,
} from './api.users';
import {
  useGetAllUserWords,
  createUserWord,
  useGetUserWordById,
  updateUserWord,
  deleteUserWord,
} from './api.usersWords';
import {
  useGetAggregatedWord,
  useGetAggregatedWords,
} from './api.usersAggregatedWords';
import { upsertUserStatistics, useGetUserStatistics } from './api.usersStatistics';
import { useGetUserSettings, upsertUserSettings } from './api.usersSettings';

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
  usersWords: {
    getAllUserWords: useGetAllUserWords,
    createUserWord,
    getUserWordById: useGetUserWordById,
    updateUserWord,
    deleteUserWord,
  },
  usersAggregatedWords: {
   getWordWordById: useGetAggregatedWord,
   getWords: useGetAggregatedWords,
  },
  usersStatistic: {
    getStatistics: useGetUserStatistics,
    updateStatistics: upsertUserStatistics,
  },
  usersSettings: {
    getSettings: useGetUserSettings,
    updateSettings: upsertUserSettings,
  },
};

export default api;
