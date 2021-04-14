import * as React from 'react';
import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { ROUTES } from '../../shared/constants';
import { baseURL } from '../../api/urls';
import useGetCurrentUserId from '../../hooks/useGetCurrentUserId';
import api from '../../api';
import { Container, Row, Col } from 'react-bootstrap';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import CustomizedTables from '../Table';
import Pagination from '@material-ui/lab/Pagination';
import { Link as RouterLink } from 'react-router-dom';

import challenge from '../../assets/img/challenge.png';
import speak from '../../assets/img/speakit.jpg';
import sprint from '../../assets/img/sprint.png';
import savannah from '../../assets/img/savannah.jpg';
import Footer from '../Footer';

import { spacing } from '@material-ui/system';

type Props = {};

const paneStyles = {
  commonPane: {
    display: 'flex',
    justifyContent:'center',
    alignItems: 'center',
    maxWidth: 200,
    height: 140,
    width: '100%',
    color: '#2A444E',
    textShadow: '1px 1px 2px #fff, 1 1 2em #fff',
    fontSize: '2em',
    
  },
  savannahContainer: {
    background: `center / cover no-repeat url(${savannah})`
  },
  speakContainer: {
    background: `center / cover no-repeat url(${speak})`
  },
  challengeContainer: {
    background: `center / cover no-repeat url(${challenge})`
  },
  sprintContainer: {
    background: `center / cover no-repeat url(${sprint})`
  },
};

export const EBook = (props: Props) => {
  const history = useHistory();
  const [ currentPage, setPage ] = useState<number>(0);
  const [ currentLevel, setLevel ] = useState<number>(0);
  const [words, setWords] = useState<any>([]);
  const data = api.words.getWordsByLevel(currentPage, currentLevel);
  

  useEffect(() => {
    if (!data.isLoading) {
      const cloneData = [...data.word];
      setWords(cloneData);
    }
  }, [data.isLoading, data.word, currentPage, currentLevel]);

  const levelControls = [...Array(6).keys()].map((level) => 
    <Button key={level} size='medium' onClick={() => setLevel(level)}>Level {level}</Button>
  );

  return (
    <>
      <Container>
        <Row>
          <Col xs={12} className='ml-auto mr-auto mt-5'>
            <Box
              display='flex'
              justifyContent='center'
            >
              { levelControls }
            </Box>
            <Box>
              { data.isLoading ? <CircularProgress /> : <CustomizedTables words={words}/> }
            </Box>
            <Box
              display='flex'
              justifyContent='center'
              my={4}
            >
              <Pagination count={30} showFirstButton showLastButton onChange={(event, value) => setPage(value - 1)}/>
            </Box>
          </Col>
        </Row>
        <Row>
          <Col xs={3}>
            <Link 
                component={RouterLink}
                to={`/savannah/${currentLevel}/${currentPage}`}
                color="primary"
                variant="body1"
                style={{ textDecoration: 'none' }}
              >
                <Paper style={{...paneStyles.savannahContainer, ...paneStyles.commonPane}}>
                  <span>Саванна</span>
                </Paper>
              </Link>
            </Col>
            <Col xs={3}>
              <Link
                component={RouterLink}
                to={`/speakit/${currentLevel}/${currentPage}`}
                color="primary"
                variant="body1"
                style={{ textDecoration: 'none' }}
              >
                <Paper style={{...paneStyles.speakContainer, ...paneStyles.commonPane}}>
                  <span>Скажи это</span>
                </Paper>
              </Link>
            </Col>
            <Col xs={3}>
              <Link
                component={RouterLink}
                to={`/audiochallendge/${currentLevel}/${currentPage}`}
                color="primary"
                variant="body1"
                style={{ textDecoration: 'none' }}
              >
                <Paper style={{...paneStyles.challengeContainer, ...paneStyles.commonPane}}>
                  <span>Аудиовызов</span>
                </Paper>
              </Link>
            </Col>
            <Col xs={3}>
              <Link
                component={RouterLink}
                to={`/sprint/${currentLevel}/${currentPage}`}
                color="primary"
                variant="body1"
                style={{ textDecoration: 'none' }}
              >
                <Paper style={{...paneStyles.sprintContainer, ...paneStyles.commonPane}}>
                  <span>Спринт</span>
                </Paper>
              </Link>
            </Col>
        </Row>
        <Row>
          <Col>
            <Footer/>
          </Col>
        </Row>
      </Container>
    </>
  );
};
