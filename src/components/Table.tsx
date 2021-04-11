import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import VolumeUpIcon from '@material-ui/icons/VolumeUp';
import Box from '@material-ui/core/Box';

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
  const rows = props.words.map((word:any) => ({
    soundURL: word.audio, 
    transcription: word.transcription, 
    word: word.word, 
    wordTranslate: word.wordTranslate, 
    textExample: word.textExample,
    textExampleTranslate: word.textExampleTranslate,
  }));
  

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableBody>
          {rows.map((row:any) => (
            <StyledTableRow key={row.word}>
              <StyledTableCell component="th" scope="row">
                {row.soundURL}
              </StyledTableCell>
              <StyledTableCell align="center">
                <Box
                  display="flex"
                  flexDirection="column"
                >
                  <span>{row.word}</span>
                  <span>{row.transcription}</span>
                  <span>{row.wordTranslate}</span>
                </Box>
              </StyledTableCell>
              <StyledTableCell align="right"><div dangerouslySetInnerHTML={{__html: row.textExample}}></div></StyledTableCell>
              <StyledTableCell align="right">{row.textExampleTranslate}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
