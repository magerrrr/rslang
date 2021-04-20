import * as React from 'react';
import { useEffect, useState, useRef, useCallback } from 'react';
import { useHistory, Link as RouterLink, useParams } from 'react-router-dom';
import api from '../../api';
import useGetCurrentUserId from '../../hooks/useGetCurrentUserId';
import { Container, Row, Col } from 'react-bootstrap';
import { paneStyles, CustomButton, StyledCircularProgress } from './DictionaryStyle';
import { Box, Link, Paper, Tab, Tabs } from '@material-ui/core';
import HowToRegIcon from '@material-ui/icons/HowToReg';
import NewReleasesIcon from '@material-ui/icons/NewReleases';
import RestoreIcon from '@material-ui/icons/Restore';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import Pagination from '@material-ui/lab/Pagination';
import CustomizedTables from '../Table';
import { Footer } from '../Footer/Footer';

import { DIFFICULTY, difficultyMap } from './Constants';

type Props = {};

export const Dictionary = (props: Props) => {
  const history = useHistory();
  const { page } = useParams<any>();
  const { group } = useParams<any>();
  const { difficulty } = useParams<any>();
  const userId = useGetCurrentUserId();
  const [currentPage, setPage] = useState<any>(page || 0);
  const [currentLevel, setLevel] = useState<any>(group || 0);
  const [currentDifficulty, setCurrentDifficulty] = useState<string>(
    difficulty || DIFFICULTY.onlearn,
  );
  const [words, setWords] = useState<any>([]);
  const levelControlsPanel = useRef(null) as any;
  const data = api.usersAggregatedWords.getWords(
    userId,
    currentPage,
    currentLevel,
    currentDifficulty === DIFFICULTY.onlearn
      ? [DIFFICULTY.onlearn, DIFFICULTY.hard]
      : currentDifficulty,
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
      let cloneData = [...data.words];
      if (currentDifficulty === DIFFICULTY.hard) {
        //cloneData.map((item: any) => {
      }
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
    <CustomButton key={level} size="medium" style={{ width: 100 }} onClick={() => setLevel(level)}>
      Level {level}
    </CustomButton>
  ));

  const handleChange = (event: React.ChangeEvent<{}>, newValue: string) => {
    setCurrentDifficulty(newValue);
  };

  const restoreWord = async (e: any) => {
    const { currentTarget } = e;
    const row = currentTarget.closest('tr');
    const wordId = row.children[0].innerText;
    await api.usersWords.deleteUserWord(userId, wordId);
    const wordIndex = words.findIndex((word: any) => word._id === wordId);
    words.splice(wordIndex, 1);
    setWords((prevWords: any) => [...prevWords]);
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
                <Tab
                  icon={<HowToRegIcon />}
                  label={difficultyMap.get(DIFFICULTY.onlearn)}
                  value={DIFFICULTY.onlearn}
                />
                <Tab
                  icon={<NewReleasesIcon />}
                  label={difficultyMap.get(DIFFICULTY.hard)}
                  value={DIFFICULTY.hard}
                />
                <Tab
                  icon={<DeleteForeverIcon />}
                  label={difficultyMap.get(DIFFICULTY.deleted)}
                  value={DIFFICULTY.deleted}
                />
              </Tabs>
            </Paper>
            <Box display="flex" justifyContent="center">
              <div ref={levelControlsPanel}> {levelControls} </div>
            </Box>
            <Box display="flex" justifyContent="center">
              {data.isLoading ? (
                <StyledCircularProgress />
              ) : (
                <CustomizedTables words={words} difficulty={currentDifficulty}>
                  <CustomButton
                    size="medium"
                    onClick={restoreWord}
                    startIcon={<RestoreIcon />}
                    className="text-capitalize"
                    variant="outlined"
                    color="primary"
                  >
                    Восстановить
                  </CustomButton>
                </CustomizedTables>
              )}
            </Box>
            {words.length > 0 ? null : (
              <Box display="flex" justifyContent="center" marginTop="30px">
                Начните играть, чтобы слова появились здесь :)
              </Box>
            )}
            <Box display="flex" justifyContent="center" my={4}>
              <Pagination
                count={30}
                showFirstButton
                showLastButton
                page={+currentPage + 1}
                color="secondary"
                onChange={(event, value) => setPage(value - 1)}
              />
            </Box>
          </Col>
        </Row>
        {words.length > 0 ? (
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
        ) : null}
      </Container>
      <Footer />
    </>
  );
};
