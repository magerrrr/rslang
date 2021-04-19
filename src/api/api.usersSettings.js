import urls from './urls';
import useSWR, { mutate } from 'swr';
import fetcher from './utils';

const useGetUserSettings = (userId) => {
  const token = localStorage.getItem('token');
  const { data, error } = useSWR([urls.usersSettings.byId(userId), token], fetcher);

  return {
    settings: data,
    isLoading: !error && !data,
    isError: error,
  };
};

const upsertUserSettings = async (userId, settings) => {
  const token = localStorage.getItem('token');
  const requestSettings = {
    method: 'PUT',
    withCredentials: true,
    headers: {
      Authorization: `Bearer ${token}`,
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(settings),
  };

  try {
    mutate(urls.usersSettings.byId(userId), settings, false);

    const updateUserSettingsResponse = await fetch(
      urls.usersSettings.byId(userId),
      requestSettings,
    );

    mutate(urls.usersSettings.byId(userId));

    return await updateUserSettingsResponse.json();
  } catch (error) {
    return error;
  }
};

export { useGetUserSettings, upsertUserSettings };
