import * as React from 'react';
import { ResultsTable, ResultsAudioIcon } from '../SpeakItStyles';
import { Modal, Button } from 'react-bootstrap';

const Results = ({ words, continueGame, closeResult, setActiveAudio }: any) => {
  const wrongWords = words.filter((word: any) => !word.isGuessed);
  const rightWords = words.filter((word: any) => word.isGuessed);
  const tableWords = rightWords.length > wrongWords.length ? rightWords : wrongWords;

  const Word = ({ item, audio }: any) => {
    return (
      <td style={{ position: 'relative' }}>
        {item && item.word && (
          <>
            <ResultsAudioIcon onClick={() => setActiveAudio(audio)} />
            <p style={{ margin: 6, marginLeft: 44 }}>{item.word}</p>
          </>
        )}
      </td>
    );
  };

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
                  <Word item={rightWords[i]} audio={item.audio} />
                  <Word item={wrongWords[i]} audio={item.audio} />
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
