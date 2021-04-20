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

const useGetAggregatedWords = (id, page, group, difficulty?) => {
  const token = localStorage.getItem('token');
  let difficultyConstraint;
  if (Array.isArray(difficulty)) {
      const difficultyArr = [];
      difficulty.map((item: any) => {
        difficultyArr.push(`{"userWord.difficulty":"${item}"}`);
        return item;
      });
     difficultyConstraint = `{"$or":[${difficultyArr.join(",")}]},`;
  } else {
     difficultyConstraint = difficulty ? `{"userWord.difficulty":"${difficulty}"},` : '';
  }

  const filter = encodeURI(`{"$and":[${difficultyConstraint} {"page": ${page}}, {"group": ${group}}]}`);
  const url = `${urls.usersAggregatedWords.byId(id)}?filter=${filter}&wordsPerPage=20`;

  const { data, error } = useSWR(() => id ? [url, token] : null, fetcher);

  return {
    words: data && data[0].paginatedResults,
    isLoading: !error && !data,
    isError: error,
  };
};


export { useGetAggregatedWord, useGetAggregatedWords };
