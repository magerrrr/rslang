export enum DIFFICULTY {
  onlearn = 'onlearn',
  hard = 'hard',
  deleted = 'deleted',
}
export const difficultyMap = new Map();
difficultyMap.set(DIFFICULTY.onlearn, 'Изучаемые');
difficultyMap.set(DIFFICULTY.hard, 'Сложные');
difficultyMap.set(DIFFICULTY.deleted, 'Удаленные');
