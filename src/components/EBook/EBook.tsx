import * as React from 'react';
import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import api from '../../api';
import useGetCurrentUserId from '../../hooks/useGetCurrentUserId';
import { Container, Row, Col } from 'react-bootstrap';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import CustomizedTables from '../Table';
import Pagination from '@material-ui/lab/Pagination';
import { Link as RouterLink } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import challenge from '../../assets/img/challenge.png';
import speak from '../../assets/img/speakit.jpg';
import sprint from '../../assets/img/sprint.png';
import savannah from '../../assets/img/savannah.jpg';
import { Footer } from '../Footer/Footer';
import styled from 'styled-components';

type Props = {};

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

export const EBook = (props: Props) => {
  const history = useHistory();
  const { page } = useParams<any>();
  const { group } = useParams<any>();
  const userId = useGetCurrentUserId();
  const [currentPage, setPage] = useState<number>(page || 0);
  const [currentLevel, setLevel] = useState<number>(group || 0);
  const [words, setWords] = useState<any>([]);
  const data = api.words.getWordsByLevel(currentPage, currentLevel);
  const userData = api.usersAggregatedWords.getWords(userId, currentPage, currentLevel);

  useEffect(() => {
    if (!data.isLoading && !userData.isLoading) {
      const cloneData = [...data.word];
      cloneData.map((item: any) => {
        const userWord = [...userData.words].find((word: any) => item.id === word._id);
        console.log(userWord);
        if (userWord && userWord.userWord) {
          item.difficulty = userWord.userWord.difficulty;
        }
        return item;
      });
      setWords(cloneData);
    }
    history.push(`/textbook/${currentLevel}/${currentPage}`);
  }, [
    data.isLoading,
    data.word,
    userData.isLoading,
    userData.words,
    currentPage,
    currentLevel,
    history,
  ]);

  const levelControls = [...Array(6).keys()].map((level) => (
    <MyButton key={level} size="medium" onClick={() => setLevel(level)}>
      Level {level}
    </MyButton>
  ));

  const sendWordData = (difficulty: string) => {
    return {
      difficulty,
      optional: {
        lastDate: new Date().toDateString(),
      },
    };
  };

  const moveWord = async ({ currentTarget }: any, difficulty: string) => {
    const row = currentTarget.closest('tr');
    const wordId = row.children[0].innerText;
    const response = await api.usersWords.updateUserWord(userId, wordId, sendWordData(difficulty));
    if (response.error) {
      await api.usersWords.createUserWord(userId, wordId, sendWordData(difficulty));
    }
    const movedWord = words.find((word: any) => word.id === wordId);
    if (movedWord) {
      movedWord.difficulty = difficulty;
    }
    setWords((prevWords: any) => [...prevWords]);
  };

  return (
    <>
      <Container>
        <Row>
          <Col xs={12} className="ml-auto mr-auto mt-5">
            <Box display="flex" justifyContent="center">
              {levelControls}
            </Box>
            <Box display="flex" justifyContent="center">
              {data.isLoading ? (
                <StyledCircularProgress />
              ) : (
                <CustomizedTables words={words}>
                  <MyButton
                    size="medium"
                    style={{ width: 120, marginRight: 0 }}
                    onClick={(e) => {
                      moveWord(e, 'hard');
                    }}
                    className="text-capitalize"
                    variant="outlined"
                    color="primary"
                  >
                    В сложные
                  </MyButton>
                  <MyButton
                    size="medium"
                    style={{ width: 120, marginRight: 0 }}
                    onClick={(e) => {
                      moveWord(e, 'deleted');
                    }}
                    className="text-capitalize"
                    variant="outlined"
                    color="primary"
                  >
                    В удаленные
                  </MyButton>
                </CustomizedTables>
              )}
            </Box>
            <Box display="flex" justifyContent="center" my={4}>
              <Pagination
                count={30}
                color="secondary"
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
  width: 100px;
  &:hover {
    background-color: #f1e8fd !important;
  }

  &:last-child {
    margin-right: 0;
  }
`;

const StyledCircularProgress = styled(CircularProgress)`
  margin: 50px;
`;
