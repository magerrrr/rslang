import useSWR from 'swr';
import urls from './urls';
import fetcher from './utils';

const useGetAllUserWords = (id) => {
  const token = localStorage.getItem('token');
  const { data, error } = useSWR([urls.usersWords.byId(id), token], fetcher);

  return {
    words: data,
    isLoading: !error && !data,
    isError: error,
  };
};

const createUserWord = async (userId, wordId, word) => {
  const token = localStorage.getItem('token');
  const settings = {
    method: 'POST',
    withCredentials: true,
    headers: {
      Authorization: `Bearer ${token}`,
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(word),
  };

  try {
    const createNewUserResponse = await fetch(
      urls.usersWords.byUserIdAndWordId(userId, wordId),
      settings,
    );
    return await createNewUserResponse.json();
  } catch (error) {
    return error;
  }
};

const useGetUserWordById = (userId, wordId) => {
  const token = localStorage.getItem('token');
  const { data, error } = useSWR(
    [urls.usersWords.byUserIdAndWordId(userId, wordId), token],
    fetcher,
  );

  return {
    word: data,
    isLoading: !error && !data,
    isError: error,
  };
};

const updateUserWord = async (userId, wordId, word) => {
  const token = localStorage.getItem('token');
  const settings = {
    method: 'PUT',
    withCredentials: true,
    headers: {
      Authorization: `Bearer ${token}`,
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(word),
  };

  try {
    const createNewUserResponse = await fetch(
      urls.usersWords.byUserIdAndWordId(userId, wordId),
      settings,
    );
    return await createNewUserResponse.json();
  } catch (error) {
    return error;
  }
};

const deleteUserWord = async (userId, wordId) => {
  const token = localStorage.getItem('token');
  const settings = {
    method: 'DELETE',
    withCredentials: true,
    headers: {
      Authorization: `Bearer ${token}`,
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  };

  try {
    const createNewUserResponse = await fetch(
      urls.usersWords.byUserIdAndWordId(userId, wordId),
      settings,
    );
    return await createNewUserResponse.json();
  } catch (error) {
    return error;
  }
};

export { useGetAllUserWords, createUserWord, useGetUserWordById, updateUserWord, deleteUserWord };
