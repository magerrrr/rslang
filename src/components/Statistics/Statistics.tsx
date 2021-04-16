import * as React from 'react';
import { useEffect, useState, useRef, useCallback } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import api from '../../api';
import { Container as BootstrapContainer, Row, Col } from 'react-bootstrap';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';
import Table from './Table';
import { Footer } from '../Footer/Footer';
import styled from 'styled-components';
import useGetCurrentUserId from '../../hooks/useGetCurrentUserId';
import { ROUTES } from '../../shared/constants';
const { GAMES } = ROUTES;

const DEFAULT_GAME = 'savannah';

const Statistics = () => {
  const userId = useGetCurrentUserId();
  const history = useHistory();
  const { gameName } = useParams<any>();
  const [tableData, setTableData] = useState<any>([]);
  const [learnedWords, setLearnedWords] = useState<number>(0);
  const [guessedWords, setGuessedWords] = useState<number>(0);
  const data = api.usersStatistic.getStatistics(userId);
  const gameButtons = useRef(null) as any;

  const getGuessedWordsAsPercentage = (success: number, fail: number) => {
    const learned = success + fail;
    return learned === 0 ? 0 : Math.floor((success / learned) * 100);
  };

  const getGameName = (game: string) => {
    return game.toLowerCase().replace('_', '');
  };

  const updateGameButtons = useCallback(() => {
    [...gameButtons.current.children].map((child: any) => {
      child.classList.remove('isSelected');
      if (getGameName(child.children[0].innerText) === gameName) {
        child.classList.add('isSelected');
      }
      return child;
    });
  }, [gameName]);

  useEffect(() => {
    if (!data.isLoading && data.statistics) {
      history.push(`/statistics/${gameName || DEFAULT_GAME}`);
    }
  }, [data.isLoading, data.statistics, gameName, history]);

  useEffect(() => {
    if (gameName) {
      updateGameButtons();
      const date = new Date().toLocaleDateString();
      const gameData = data.statistics && data.statistics.optional[gameName];
      const tableData = [] as any;
      let allLearned = 0;
      let allGuessed = 0;
      if (gameData && gameData.items) {
        [...Object.values(gameData.items)].map((item: any) => {
          if (item.date === date) {
            const learned = item.success + item.fail;
            const guessed = getGuessedWordsAsPercentage(item.success, item.fail);
            tableData.push({
              learned,
              guessed,
              series: item.series,
            });
            allLearned += learned;
            allGuessed += guessed;
          }
          return item;
        });
      }
      setTableData(tableData);
      setLearnedWords(allLearned);
      const { length } = tableData;
      setGuessedWords(length > 0 ? Math.floor(allGuessed / length) : length);
    }
  }, [gameName, data.statistics, updateGameButtons]);

  const games = [...Object.keys(GAMES.subroutes)].map((game, i) => (
    <MyButton
      key={game}
      size="medium"
      onClick={(e: any) => history.push(`/statistics/${getGameName(e.currentTarget.innerText)}`)}
    >
      {game}
    </MyButton>
  ));

  return (
    <>
      <Container fluid="sm">
        <Row>
          <Col xs={12} className="ml-auto mr-auto mt-5 mb-5">
            <Box display="flex" justifyContent="center">
              <div ref={gameButtons}> {games} </div>
            </Box>
            <Box display="flex" justifyContent="center">
              {data.isLoading ? <StyledCircularProgress /> : <Table data={tableData} />}
            </Box>
          </Col>
        </Row>
        <div className="text-center pb-2">
          <p>Общее количество изученных слов: {learnedWords}</p>
          <p>Процент правильных ответов за день: {guessedWords}</p>
        </div>
      </Container>
      <Footer />
    </>
  );
};

const Container = styled(BootstrapContainer)`
  .table-responsive {
    width: 500px;
    height: 334.5px;
    margin-top: 1rem;
  }
`;

const MyButton = styled(Button)`
  margin-bottom: 10px;
  margin-right: 10px;

  &:hover {
    background-color: #f1e8fd !important;
  }

  &:last-child {
    margin-right: 0;
  }

  &.isSelected {
    background-color: #f1e8fd;
  }
`;

const StyledCircularProgress = styled(CircularProgress)`
  margin: 50px;
`;

export default Statistics;
