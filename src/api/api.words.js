import useSWR from 'swr';
import urls from './urls';
import fetcher from './utils';

const useWords = () => {
  const { data, error } = useSWR(urls.words.defaultRoute, fetcher);

  return {
    words: data,
    isLoading: !error && !data,
    isError: error,
  };
};

const useWord = (id) => {
  const { data, error } = useSWR(urls.words.byId(id), fetcher);

  return {
    word: data,
    isLoading: !error && !data,
    isError: error,
  };
};

export { useWords, useWord };
