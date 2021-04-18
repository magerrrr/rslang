import * as React from 'react';
import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import api from '../api';
import useGetCurrentUserId from '../hooks/useGetCurrentUserId';
import { Container, Row, Col } from 'react-bootstrap';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import CustomizedTables from './Table';
import Pagination from '@material-ui/lab/Pagination';
import { Link as RouterLink } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import challenge from '../assets/img/challenge.png';
import speak from '../assets/img/speakit.jpg';
import sprint from '../assets/img/sprint.png';
import savannah from '../assets/img/savannah.jpg';
import { Footer } from './Footer/Footer';
import styled from 'styled-components';

type Props = {};

const DIFFICULTY_GROUPS: any = { onlearn: 'Изученные', hard: 'Сложные', deleted: 'Удаленные' };

const paneStyles = {
  commonPane: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    maxWidth: 200,
    height: 140,
    width: '100%',
    color: '#2A444E',
    textShadow: '1px 1px 2px #fff, 1 1 2em #fff',
    fontSize: '2em',
  },
  savannahContainer: {
    background: `center / cover no-repeat url(${savannah})`,
  },
  speakContainer: {
    background: `center / cover no-repeat url(${speak})`,
  },
  challengeContainer: {
    background: `center / cover no-repeat url(${challenge})`,
  },
  sprintContainer: {
    background: `center / cover no-repeat url(${sprint})`,
  },
};

export const Dictionary = (props: Props) => {
  const history = useHistory();
  const { page } = useParams<any>();
  const { group } = useParams<any>();
  const { difficulty } = useParams<any>();
  const userId = useGetCurrentUserId();
  const [currentPage, setPage] = useState<number>(page || 0);
  const [currentLevel, setLevel] = useState<number>(group || 0);
  const [currentDifficulty, setCurrentDifficulty] = useState<string>(difficulty || 'onlearn');
  const [words, setWords] = useState<any>([]);
  const data = api.usersAggregatedWords.getWords(
    userId,
    currentPage,
    currentLevel,
    currentDifficulty,
  );

  useEffect(() => {
    if (!data.isLoading && data.words) {
      console.log(data.words);
      let cloneData = [...data.words[0].paginatedResults];

      setWords(cloneData);
    }
    history.push(`/wordbook/${currentDifficulty}/${currentLevel}/${currentPage}`);
  }, [data.isLoading, data.words, currentDifficulty, currentPage, currentLevel, history]);

  const difficultyControls = [...Object.keys(DIFFICULTY_GROUPS)].map((difficulty: string) => (
    <DifficultyButton
      key={difficulty}
      size="medium"
      onClick={() => setCurrentDifficulty(difficulty)}
    >
      {DIFFICULTY_GROUPS[difficulty]}
    </DifficultyButton>
  ));

  const levelControls = [...Array(6).keys()].map((level) => (
    <MyButton key={level} size="medium" onClick={() => setLevel(level)}>
      Level {level}
    </MyButton>
  ));

  return (
    <>
      <Container>
        <Row>
          <Col xs={12} className="ml-auto mr-auto mt-5">
            <Box display="flex" justifyContent="center">
              {difficultyControls}
            </Box>
            <Box display="flex" justifyContent="center">
              {levelControls}
            </Box>
            <Box display="flex" justifyContent="center">
              {data.isLoading ? <StyledCircularProgress /> : <CustomizedTables words={words} />}
            </Box>
            <Box display="flex" justifyContent="center" my={4}>
              <Pagination
                count={30}
                showFirstButton
                showLastButton
                onChange={(event, value) => setPage(value - 1)}
              />
            </Box>
          </Col>
        </Row>
        <Row>
          <Col lg={3} sm={6} xs={12} className="pb-4">
            <Link
              className="d-flex justify-content-sm-end justify-content-center justify-content-lg-center"
              component={RouterLink}
              to={`/games/savannah/${currentLevel}/${currentPage}`}
              color="primary"
              variant="body1"
              style={{ textDecoration: 'none' }}
            >
              <Paper style={{ ...paneStyles.savannahContainer, ...paneStyles.commonPane }}>
                <span>Саванна</span>
              </Paper>
            </Link>
          </Col>
          <Col lg={3} sm={6} xs={12} className="pb-4">
            <Link
              className="d-flex justify-content-sm-start justify-content-center justify-content-lg-center"
              component={RouterLink}
              to={`/games/speakit/${currentLevel}/${currentPage}`}
              color="primary"
              variant="body1"
              style={{ textDecoration: 'none' }}
            >
              <Paper style={{ ...paneStyles.speakContainer, ...paneStyles.commonPane }}>
                <span>Скажи это</span>
              </Paper>
            </Link>
          </Col>
          <Col lg={3} sm={6} xs={12} className="pb-4">
            <Link
              className="d-flex justify-content-sm-end justify-content-center justify-content-lg-center"
              component={RouterLink}
              to={`/games/audiochallendge/${currentLevel}/${currentPage}`}
              color="primary"
              variant="body1"
              style={{ textDecoration: 'none' }}
            >
              <Paper style={{ ...paneStyles.challengeContainer, ...paneStyles.commonPane }}>
                <span>Аудиовызов</span>
              </Paper>
            </Link>
          </Col>
          <Col lg={3} sm={6} xs={12} className="pb-4">
            <Link
              className="d-flex justify-content-sm-start justify-content-center justify-content-lg-center"
              component={RouterLink}
              to={`/games/sprint/${currentLevel}/${currentPage}`}
              color="primary"
              variant="body1"
              style={{ textDecoration: 'none' }}
            >
              <Paper style={{ ...paneStyles.sprintContainer, ...paneStyles.commonPane }}>
                <span>Спринт</span>
              </Paper>
            </Link>
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
};

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

const DifficultyButton = styled(MyButton)`
  &:hover {
    background-color: #c1b3f1 !important;
  }
`;

const StyledCircularProgress = styled(CircularProgress)`
  margin: 50px;
`;
