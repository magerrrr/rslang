import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import useAudio from '../hooks/useAudio';
import audio from '../assets/speak-it/volume.svg';
import styled from 'styled-components';
import { baseURL } from '../api/urls';

const AudioIcon = styled.span`
  display: block;
  width: 26px;
  height: 26px;
  background-image: url(${audio});
  background-size: contain;
  cursor: pointer;
`;

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
    '&.hard': {
      backgroundColor: 'rgba(236, 64, 122, 0.2)',

      '& button:first-child': {
        display: 'none',
      },
      '& td, & th': {
        borderBottom: '1px solid rgba(236, 64, 122, 0.3)',
      },
    },
    '&.deleted': {
      display: 'none',
    },
  },
}))(TableRow);

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
  img: {
    objectFit: 'cover',
    height: 60,
    width: 60,
  },
});

export default function CustomizedTables(props: any) {
  const classes = useStyles();

  const items = props.words.map((word: any) => ({
    wordId: word.id || word._id,
    soundURLs: [word.audio, word.audioMeaning, word.audioExample],
    thumb: word.image,
    transcription: word.transcription,
    word: word.word,
    wordTranslate: word.wordTranslate,
    textExample: word.textExample,
    textExampleTranslate: word.textExampleTranslate,
    textMeaning: word.textMeaning,
    textMeaningTranslate: word.textMeaningTranslate,
    className:
      word.difficulty || (word.userWord && word.userWord.difficulty === 'hard' && 'hard') || '',
  }));

  const [audio, playAudio] = useAudio();

  return (
    <>
      <audio ref={audio} />
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="customized table">
          <TableBody>
            {items.map((item: any) => (
              <StyledTableRow key={item.word} className={item.className}>
                <StyledTableCell component="th" scope="row" hidden>
                  {item.wordId}
                </StyledTableCell>
                <StyledTableCell component="th" scope="row">
                  <AudioIcon onClick={() => playAudio(item.soundURLs)} />
                </StyledTableCell>
                <StyledTableCell component="th" scope="row">
                  <img src={`${baseURL}/${item.thumb}`} className={classes.img} alt="word" />
                </StyledTableCell>
                <StyledTableCell>
                  <Box display="flex" flexDirection="column">
                    <span>{item.word}</span>
                    <span>{item.transcription}</span>
                    <span>{item.wordTranslate}</span>
                  </Box>
                </StyledTableCell>
                <StyledTableCell>
                  <div dangerouslySetInnerHTML={{ __html: item.textMeaning }}></div>
                  <div dangerouslySetInnerHTML={{ __html: item.textExample }}></div>
                </StyledTableCell>
                <StyledTableCell>
                  <div dangerouslySetInnerHTML={{ __html: item.textMeaningTranslate }}></div>
                  <div dangerouslySetInnerHTML={{ __html: item.textExampleTranslate }}></div>
                </StyledTableCell>
                <StyledTableCell>{props.children}</StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
