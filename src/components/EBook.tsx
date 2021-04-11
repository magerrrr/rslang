import * as React from 'react';
import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { ROUTES } from '../shared/constants';
import { baseURL } from '../api/urls';
import useGetCurrentUserId from '../hooks/useGetCurrentUserId';
import api from '../api';
import { Container, Row, Col, Card } from 'react-bootstrap';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';
import CustomizedTables from './Table';
import Pagination from '@material-ui/lab/Pagination';

type Props = {};

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
    <Button size='medium' onClick={() => setLevel(level)}>Level {level}</Button>
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
            >
              <Pagination count={30} showFirstButton showLastButton onChange={(event, value) => setPage(value - 1)}/>
            </Box>
          </Col>
        </Row>
      </Container>
    </>
  );
};
