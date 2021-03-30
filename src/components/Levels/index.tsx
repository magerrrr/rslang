import * as React from 'react';
import { LevelsContainer, Select } from './LevelsStyles';
import { Row } from 'react-bootstrap';
import { GAME_MAX_LEVEL, GAME_MAX_PAGE } from '../../shared/constants';

const Levels = ({ gameLevel, gamePage, setGameLevel, setGamePage }: any) => {
  const levels = Array.from({ length: GAME_MAX_LEVEL }, (_, i) => i + 1);
  const rounds = Array.from({ length: GAME_MAX_PAGE }, (_, i) => i + 1);

  return (
    <LevelsContainer>
      <Row noGutters className="align-items-center">
        <h5 className="mt-2">Level:</h5>
        <Select
          className="custom-select"
          value={gameLevel}
          onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
            setGameLevel(parseInt(e.target.value, 10) - 1)
          }
        >
          {levels.map((level, index) => (
            <option value={level} key={`level-${index}`} className="dropdown-item">
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
          onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
            setGamePage(parseInt(e.target.value, 10) - 1)
          }
        >
          {rounds.map((round, index) => (
            <option value={round} key={`page-${index}`} className="dropdown-item">
              {round}
            </option>
          ))}
        </Select>
      </Row>
    </LevelsContainer>
  );
};

export default Levels;
