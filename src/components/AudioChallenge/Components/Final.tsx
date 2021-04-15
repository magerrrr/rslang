import React from 'react';
import {
  GameOver,
  GameOverItemCol,
  ButtonDifficult,
  GameOverItem,
  GameOverResult,
} from '../AudiochallengeStyle';

const Final = ({ words, answer, handleNewGame, restartGame }: any) => {
  return (
    <GameOver>
      <GameOverResult>
        <GameOverItem>
          <div className="gameOverHeader">
            <h3>Неугаданные слова</h3>
            <div>Неправильно: {answer.unCorrectAnswer}</div>
          </div>
          {words.map((item: any) => {
            return item.isCheckedAnswer === false ? (
              <GameOverItemCol>
                <div>
                  <span>{item.enWord}</span>
                  <span>{item.ruWord}</span>
                </div>
                <ButtonDifficult>в сложные</ButtonDifficult>
              </GameOverItemCol>
            ) : (
              ''
            );
          })}
        </GameOverItem>
        <GameOverItem>
          <h3>Угаданные слова</h3>
          <div>Правильно: {answer.correctAnswer}</div>
          {words.map((item: any) => {
            return item.isCheckedAnswer === true ? (
              <GameOverItemCol>
                <span>{item.enWord}</span>
                <span>{item.ruWord}</span>
              </GameOverItemCol>
            ) : (
              ''
            );
          })}
        </GameOverItem>
      </GameOverResult>
    </GameOver>
  );
};

export default Final;
