import * as React from 'react';
import { ResultsTable } from '../SpeakItStyles';
import { Modal, Button } from 'react-bootstrap';

const Results = ({ words, continueGame, closeResult }: any) => {
  const wrongWords = words.filter((word: any) => !word.isGuessed);
  const rightWords = words.filter((word: any) => word.isGuessed);
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
            рестарт
          </Button>
          <Button variant="secondary" color="#c9b1fc" onClick={continueGame}>
            продолжить
          </Button>
          <Button variant="secondary" color="#c9b1fc" onClick={closeResult}>
            статистика
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Results;
