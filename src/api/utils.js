// function, which is just a wrapper of the native fetch:
const fetcher = async (url, token) => {
  if (!token) {
    const response = await fetch(url);
    return await response.json();
  } else {
    const settings = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    const response = await fetch(url, settings);

    return await response.json();
  }
};

export default fetcher;

export const aggregatedWordsFilter = (page, group, difficulty?) => {
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

  return encodeURI(`{"$and":[${difficultyConstraint} {"page": ${page}}, {"group": ${group}}]}`);
}

