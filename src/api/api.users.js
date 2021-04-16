import urls from './urls';
import useSWR from 'swr';
import fetcher from './utils';

const createNewUser = async (userData) => {
  const settings = {
    method: 'POST',
    body: userData,
  };

  const createNewUserResponse = await fetch(urls.users.defaultRoute, settings);

  if ([403, 404, 422].includes(createNewUserResponse.status)) {
    throw new Error('Некорректный е-мейл или пароль.');
  }

  if ([417].includes(createNewUserResponse.status)) {
    throw new Error('Пользователь с таким адресом электронной почты уже существует.');
  }

  return await createNewUserResponse.json();
};

const useGetUserData = (id) => {
  const token = localStorage.getItem('token');
  const { data, error } = useSWR([urls.users.byId(id), token], fetcher);

  return {
    user: data,
    isLoading: !error && !data,
    isError: error,
  };
};

const updateUser = async (id, userData) => {
  const token = localStorage.getItem('token');
  const settings = {
    method: 'PUT',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(userData),
  };

  try {
    const updateUserResponse = await fetch(urls.users.byId(id), settings);
    return await updateUserResponse.json();
  } catch (error) {
    return error;
  }
};

const deleteUser = async (id) => {
  const token = localStorage.getItem('token');
  const settings = {
    method: 'DELETE',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  };

  try {
    const deleteUserResponse = await fetch(urls.users.byId(id), settings);
    return await deleteUserResponse.json();
  } catch (error) {
    return error;
  }
};

const useGetNewUserTokens = (id) => {
  const token = localStorage.getItem('token');
  const { data, error } = useSWR([urls.users.byIdWithToken(id), token], fetcher);

  return {
    data: data,
    isLoading: !error && !data,
    isError: error,
  };
};

export { createNewUser, useGetUserData, updateUser, deleteUser, useGetNewUserTokens };
