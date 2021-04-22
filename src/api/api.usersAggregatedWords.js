import useSWR from 'swr';
import urls from './urls';
import fetcher, { aggregatedWordsFilter } from './utils';

const useGetAggregatedWord = (id, wordId) => {
  const token = localStorage.getItem('token');
  const { data, error } = useSWR([urls.usersAggregatedWords.byUserIdAndWordId(id, wordId), token], fetcher);

  return {
    word: data,
    isLoading: !error && !data,
    isError: error,
  };
};

const useGetAggregatedWords = (id, page, group, difficulty?) => {
  const token = localStorage.getItem('token');
  const filter = aggregatedWordsFilter(page, group, difficulty);

  const url = `${urls.usersAggregatedWords.byId(id)}?filter=${filter}&wordsPerPage=20`;

  const { data, error } = useSWR(() => id ? [url, token] : null, fetcher);

  return {
    words: data && data[0].paginatedResults,
    isLoading: !error && !data,
    isError: error,
  };
};


export { useGetAggregatedWord, useGetAggregatedWords };
