import React from 'react';
import {
  ButtonRestart,
  GameOver,
  GameOverItemCol,
  ButtonDifficult,
  GameOverItem,
  GameOverResult,
} from '../SavannaStyle';

const Final = ({ words, answer, handleNewGame, restartGame }: any) => {
  return (
    <GameOver>
      <ButtonRestart
        onClick={() => {
          handleNewGame();
          restartGame();
        }}
      >
        Новая Игра
      </ButtonRestart>
      <GameOverResult>
        <GameOverItem>
          <div className="gameOverHeader">
            <h3>Неугаданные слова</h3>
            <div>Неправильно: {answer.unCorrectAnswer}</div>
          </div>
          {words.map((item: any) => {
            if (item.isCheckedAnswer === -1) {
              return (
                <GameOverItemCol>
                  <div>
                    <span>{item.enWord}</span>
                    <span>{item.ruWord}</span>
                  </div>
                  <ButtonDifficult>в сложные</ButtonDifficult>
                </GameOverItemCol>
              );
            }
          })}
        </GameOverItem>
        <GameOverItem>
          <h3>Угаданные слова</h3>
          <div>Правильно: {answer.correctAnswer}</div>
          {words.map((item: any) => {
            if (item.isCheckedAnswer === 1) {
              return (
                <GameOverItemCol>
                  <span>{item.enWord}</span>
                  <span>{item.ruWord}</span>
                </GameOverItemCol>
              );
            }
          })}
        </GameOverItem>
      </GameOverResult>
    </GameOver>
  );
};

export default Final;
