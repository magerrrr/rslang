import * as React from 'react';
import { useEffect, useState, useRef, useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import HowToRegIcon from '@material-ui/icons/HowToReg';
import NewReleasesIcon from '@material-ui/icons/NewReleases';
import RestoreIcon from '@material-ui/icons/Restore';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
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
  difficulty: {
    flexGrow: 1,
    maxWidth: 500,
    margin: '0 auto',
    boxShadow: 'none',
  },
};

export const Dictionary = (props: Props) => {
  const history = useHistory();
  const { page } = useParams<any>();
  const { group } = useParams<any>();
  const { difficulty } = useParams<any>();
  const userId = useGetCurrentUserId();
  const [currentPage, setPage] = useState<any>(page || 0);
  const [currentLevel, setLevel] = useState<any>(group || 0);
  const [currentDifficulty, setCurrentDifficulty] = useState<string>(difficulty || 'onlearn');
  const [counter, setCounter] = useState<any>(3600);
  const [words, setWords] = useState<any>([]);
  const levelControlsPanel = useRef(null) as any;
  const data = api.usersAggregatedWords.getWords(
    userId,
    currentPage,
    currentLevel,
    currentDifficulty,
    counter,
  );

  const updateLevelControls = useCallback(() => {
    [...levelControlsPanel.current.children].map((child: any) => {
      child.classList.remove('isSelected');
      if (child.children[0].innerText.slice(-1) === currentLevel.toString()) {
        child.classList.add('isSelected');
      }
      return child;
    });
  }, [currentLevel]);

  useEffect(() => {
    if (!data.isLoading && data.words) {
      let cloneData = [...data.words[0].paginatedResults];
      setWords(cloneData);
    }
    history.push(`/wordbook/${currentDifficulty}/${currentLevel}/${currentPage}`);
    updateLevelControls();
  }, [
    data.isLoading,
    data.words,
    currentDifficulty,
    currentPage,
    currentLevel,
    updateLevelControls,
    history,
  ]);

  const levelControls = [...Array(6).keys()].map((level) => (
    <MyButton key={level} size="medium" onClick={() => setLevel(level)}>
      Level {level}
    </MyButton>
  ));

  const handleChange = (event: React.ChangeEvent<{}>, newValue: string) => {
    setCurrentDifficulty(newValue);
  };

  const restoreWord = async (e: any) => {
    const { currentTarget } = e;
    const row = currentTarget.closest('tr');
    const wordId = row.children[0].innerText;
    await api.usersWords.deleteUserWord(userId, wordId);
    setCounter((prevCounter: any) => prevCounter - 1);
  };

  return (
    <>
      <Container>
        <Row>
          <Col xs={12} className="ml-auto mr-auto mt-3">
            <Paper square style={{ ...paneStyles.difficulty }} className="mb-4">
              <Tabs
                value={currentDifficulty}
                onChange={handleChange}
                variant="fullWidth"
                textColor="primary"
                indicatorColor="primary"
                aria-label="icon label tabs example"
              >
                <Tab icon={<HowToRegIcon />} label="Изучаемые" value="onlearn" />
                <Tab icon={<NewReleasesIcon />} label="Сложные" value="hard" />
                <Tab icon={<DeleteForeverIcon />} label="Удаленные" value="deleted" />
              </Tabs>
            </Paper>
            <Box display="flex" justifyContent="center">
              <div ref={levelControlsPanel}> {levelControls} </div>
            </Box>
            <Box display="flex" justifyContent="center">
              {data.isLoading ? (
                <StyledCircularProgress />
              ) : (
                <CustomizedTables words={words}>
                  <MyButton
                    size="medium"
                    onClick={restoreWord}
                    startIcon={<RestoreIcon />}
                    className="text-capitalize"
                    variant="outlined"
                    color="primary"
                  >
                    Восстановить
                  </MyButton>
                </CustomizedTables>
              )}
            </Box>
            <Box display="flex" justifyContent="center" my={4}>
              <Pagination
                count={30}
                showFirstButton
                showLastButton
                page={1 + currentPage}
                color="secondary"
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
              to={`/games/savannah/${currentDifficulty}/${currentLevel}/${currentPage}`}
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
              to={`/games/speakit/${currentDifficulty}/${currentLevel}/${currentPage}`}
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
              to={`/games/audiochallendge/${currentDifficulty}/${currentLevel}/${currentPage}`}
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
              to={`/games/sprint/${currentDifficulty}/${currentLevel}/${currentPage}`}
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
  &.isSelected {
    background-color: #f1e8fd;
  }
`;

const StyledCircularProgress = styled(CircularProgress)`
  margin: 50px;
`;
