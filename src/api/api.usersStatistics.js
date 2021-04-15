import urls from './urls';
import useSWR from 'swr';
import fetcher from './utils';

const useGetUserStatistics = (userId) => {
  const token = localStorage.getItem('token');
  const { data, error } = useSWR([urls.usersStatistics.byId(userId), token], fetcher);

  return {
    statistics: data,
    isLoading: !error && !data,
    isError: error,
  };
};

const upsertUserStatistics = async (userId, statistics) => {
  const token = localStorage.getItem('token');
  const settings = {
    method: 'PUT',
    withCredentials: true,
    headers: {
      Authorization: `Bearer ${token}`,
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(statistics),
  };

  try {
    const updateUserStatisticsResponse = await fetch(urls.usersStatistics.byId(userId), settings);
    return await updateUserStatisticsResponse.json();
  } catch (error) {
    return error;
  }
};

export { upsertUserStatistics, useGetUserStatistics };
