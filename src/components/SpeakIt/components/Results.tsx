import * as React from 'react';
import { ResultsTable } from '../SpeakItStyles';
import { Modal, Button } from 'react-bootstrap';

const Results = ({ words, setWords, setIsFinish, setGameWordIndex, setShowResult }: any) => {
  const wrongWords = words.filter((word: any) => !word.isGuessed);
  const rightWords = words.filter((word: any) => word.isGuessed);

  const closeResult = () => {
    setIsFinish(false);
    setGameWordIndex(0);
    words.map((item: any) => {
      item.isGuessed = false;
      item.isNotGuessed = false;
      return item;
    });
    setShowResult(false);
  };

  const tableWords = rightWords.length > wrongWords.length ? rightWords : wrongWords;

  return (
    <>
      <Modal show={true} onHide={closeResult} backdrop="static" keyboard={false}>
        <Modal.Header closeButton>
          <Modal.Title>Результаты:</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ResultsTable striped bordered hover responsive size="sm">
            <thead>
              <tr>
                <th>Верно</th>
                <th>Неверно</th>
              </tr>
            </thead>
            <tbody>
              {tableWords.map((item: any, i: number) => (
                <tr key={tableWords[i].id}>
                  <td>{(rightWords[i] && rightWords[i].word) || ''}</td>
                  <td>{(wrongWords[i] && wrongWords[i].word) || ''}</td>
                </tr>
              ))}
            </tbody>
          </ResultsTable>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" color="#c9b1fc" onClick={closeResult}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Results;
