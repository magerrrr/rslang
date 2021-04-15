import { GAME_MAX_LEVEL, GAME_MAX_PAGE } from '../../shared/constants';

const initialStats = {
  learnedWords: 0,
  optional: {
    sprint: { items: [] },
  },
};

export const getInitialStats = (data: any) => {
  if (data) {
    return { learnedWords: data.learnedWords, optional: data.optional || {} };
  } else {
    return initialStats;
  }
};

export const getInitialLevels = (gameLevel: string, gamePage: string) => {
  let level = parseInt(gameLevel, 10) || 0;
  let page = parseInt(gamePage, 10) || 0;
  if (page >= GAME_MAX_PAGE) {
    page = 0;
  }
  if (level >= GAME_MAX_LEVEL) {
    level = 0;
  }
  return {
    level,
    page,
  };
};

export const getLevels = (gameLevel: number, gamePage: number) => {
  let level = gameLevel;
  let page = gamePage + 1;
  if (page === GAME_MAX_PAGE) {
    page = 0;
    level = gameLevel + 1;
    if (level === GAME_MAX_LEVEL) {
      level = 0;
    }
  }
  return {
    level,
    page,
  };
};

export const getStatistics = (
  stats: any,
  gameStats: any,
  learnedWords: number,
  gameName: string,
) => {
  const optional = stats.optional || {};
  const sprintData = optional[gameName] || {};
  sprintData.items = sprintData.items || [];
  sprintData.items.push(gameStats);
  optional[gameName] = sprintData;
  return {
    learnedWords: stats.learnedWords + learnedWords,
    optional: optional,
  };
};
