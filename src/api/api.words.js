import useSWR from 'swr';
import urls from './urls';
import fetcher from './utils';

const useAllWords = () => {
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

const useWords = (page, group) => {
  console.log("getp");
  const { data, error } = useSWR(`${urls.words.defaultRoute}?page=${page}&group=${group}`, fetcher);

  return {
    word: data,
    isLoading: !error && !data,
    isError: error,
  };
};

export { useAllWords, useWords, useWord };
