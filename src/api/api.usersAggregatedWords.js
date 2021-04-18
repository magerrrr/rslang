import useSWR from 'swr';
import urls from './urls';
import fetcher from './utils';

const useGetAggregatedWord = (id, wordId) => {
  const token = localStorage.getItem('token');
  const { data, error } = useSWR([urls.usersAggregatedWords.byUserIdAndWordId(id, wordId), token], fetcher);

  return {
    word: data,
    isLoading: !error && !data,
    isError: error,
  };
};

const useGetAggregatedWords = (id, page, group, difficulty) => {
  const token = localStorage.getItem('token');
  const filter = encodeURI(`{"$and":[{"userWord.difficulty":"${difficulty}", "page": ${page}, "group": ${group}}]}`);
  const url = `${urls.usersAggregatedWords.byId(id)}?filter=${filter}`;

  const { data, error } = useSWR([url, token], fetcher);

  return {
    words: data,
    isLoading: !error && !data,
    isError: error,
  };
};


export { useGetAggregatedWord, useGetAggregatedWords };
