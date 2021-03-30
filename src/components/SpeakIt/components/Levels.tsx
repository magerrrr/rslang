import * as React from 'react';
import { LevelsContainer, Select } from '../SpeakItStyles';
import { Row } from 'react-bootstrap';
import { gameMaxPage, gameMaxLevel } from '../Constants';

const Levels = ({ gameLevel, gamePage, setGameLevel, setGamePage }: any) => {
  const levels = Array.from({ length: gameMaxLevel }, (_, i) => i + 1);
  const rounds = Array.from({ length: gameMaxPage }, (_, i) => i + 1);

  return (
    <LevelsContainer>
      <Row noGutters className="align-items-center">
        <h5 className="mt-2">Level:</h5>
        <Select
          className="custom-select"
          value={gameLevel}
          onChange={(e: any) => setGameLevel(parseInt(e.target.value, 10) - 1)}
        >
          {levels.map((level, index) => (
            <option value={level} key={index + 100} className="dropdown-item">
              {level}
            </option>
          ))}
        </Select>
      </Row>
      <Row noGutters className="align-items-center">
        <h5 className="mt-2">Round:</h5>
        <Select
          className="custom-select mr-0"
          value={gamePage}
          onChange={(e: any) => setGamePage(parseInt(e.target.value, 10) - 1)}
        >
          {rounds.map((round, index) => (
            <option value={round} key={index + 200} className="dropdown-item">
              {round}
            </option>
          ))}
        </Select>
      </Row>
    </LevelsContainer>
  );
};

export default Levels;
