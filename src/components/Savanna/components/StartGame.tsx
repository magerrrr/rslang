import React from 'react';
import { StartBlock, ButtonStart } from '../SavannaStyle';

const StartGame = ({ active, handleClick }: any) => {
  return (
    <StartBlock className={active ? 'hidden' : 'block'}>
      <h3>Саванна</h3>
      <p>
        Тренировка Саванна развивает словарный запас. Чем больше слов ты знаешь, тем легче тебе
        будет общаться.
      </p>
      <ButtonStart
        onClick={() => {
          handleClick();
        }}
      >
        Начать
      </ButtonStart>
    </StartBlock>
  );
};

export default StartGame;
