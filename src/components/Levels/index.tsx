import * as React from 'react';
import { LevelsContainer, Select } from './LevelsStyles';
import { Col } from 'react-bootstrap';
import { GAME_MAX_LEVEL, GAME_MAX_PAGE } from '../../shared/constants';

const Levels = ({ gameLevel, gamePage, setGameLevel, setGamePage, isAuthorized }: any) => {
  const levels = Array.from({ length: GAME_MAX_LEVEL }, (_, i) => i + 1);
  const rounds = Array.from({ length: GAME_MAX_PAGE }, (_, i) => i + 1);

  return (
    <LevelsContainer>
      <Col className="align-items-center">
        <p>Level</p>
        <Select
          className="custom-select"
          value={gameLevel}
          disabled={isAuthorized}
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
      </Col>
      <Col className="align-items-center">
        <p>Round</p>
        <Select
          className="custom-select mr-0"
          value={gamePage}
          disabled={isAuthorized}
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
      </Col>
    </LevelsContainer>
  );
};

export default Levels;
