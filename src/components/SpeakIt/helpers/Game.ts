import { GAME_MAX_LEVEL, GAME_MAX_PAGE } from '../../../shared/constants';

const getLevels = (gameLevel: number, gamePage: number) => {
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

export { getLevels };
