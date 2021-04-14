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
  },
}))(TableRow);

function createData(soundURL: string,  word:string, transcription:string, wordTranslate:string, textExample:string, textExampleTranslate:string) {
  return { 
    soundURL, 
    transcription, 
    word, 
    wordTranslate, 
    textExample,
    textExampleTranslate
  };
}

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});

export default function CustomizedTables(props:any) {
  const classes = useStyles();
  const items = props.words.map((word:any) => ({
    soundURL: word.audio, 
    transcription: word.transcription, 
    word: word.word, 
    wordTranslate: word.wordTranslate, 
    textExample: word.textExample,
    textExampleTranslate: word.textExampleTranslate,
  }));
  
  const [audio, playAudio] = useAudio();
  
  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableBody>
          <audio ref={audio} />
          {items.map((item:any) => (
            <StyledTableRow key={item.word}>
              <StyledTableCell component="th" scope="row">
                <AudioIcon onClick={() => playAudio(item.soundURL)}/>
              </StyledTableCell>
              <StyledTableCell align="center">
                <Box
                  display="flex"
                  flexDirection="column"
                  >
                  <span>{item.word}</span>
                  <span>{item.transcription}</span>
                  <span>{item.wordTranslate}</span>
                </Box>
              </StyledTableCell>
              <StyledTableCell align="center"><div dangerouslySetInnerHTML={{__html: item.textExample}}></div></StyledTableCell>
              <StyledTableCell align="center">{item.textExampleTranslate}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
