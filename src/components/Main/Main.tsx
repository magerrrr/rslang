import * as React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import {
  Intro,
  HowTo,
  HowToRow,
  Title,
  HowToTitle,
  ImageContainer,
  HowToText,
  Games,
  Game1,
  Game2,
  Game3,
  Game4,
} from './MainStyles';
import english from '../../assets/img/english.jpg';
import challenge from '../../assets/img/challenge.png';
import speak from '../../assets/img/speakit.jpg';
import sprint from '../../assets/img/sprint.png';
import savannah from '../../assets/img/savannah.jpg';

type Props = {};

export const Main = (props: Props) => {
  return (
    <>
      <Intro>
        <Container>
          <Row>
            <Col xs={6} lg={6} className="ml-auto mr-auto mt-5">
              <p>Выучить английский с LANG!</p>
            </Col>
          </Row>

          <Row>
            <Col xs={6} lg={6} className="ml-auto mr-auto mt-4">
              <ul className="pl-0">
                <li>&mdash; Погружение в языковую среду</li>
                <li>&mdash; Постепенное усложнение учебного материала</li>
                <li>&mdash; Изучение слов в формате игры</li>
              </ul>
            </Col>
          </Row>
        </Container>
      </Intro>
      <HowTo>
        <Container>
          <HowToTitle>Как пользоваться приложением</HowToTitle>
          <HowToRow>
            <ImageContainer xs={6} lg={6}>
              <img src={english} alt="nn" />
            </ImageContainer>
            <HowToText xs={5} lg={5} className="ml-auto">
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                Ipsum has been the industry's standard dummy text ever since the 1500s, when an
                unknown printer took a galley of type and scrambled it to make a type specimen book.
                It has survived not only five centuries, but also the leap into electronic{' '}
              </p>
            </HowToText>
          </HowToRow>
        </Container>
      </HowTo>
      <Games>
        <Container style={{ height: '100%' }}>
          <Title>Игры</Title>
          <HowToRow
            style={{ alignItems: 'center', height: '100%' }}
            className="ml-auto mr-auto mt-4"
          >
            <div className="d-flex ml-auto mr-auto" style={{ maxWidth: 900 }}>
              <Col xs={5} lg={5} className="mr-auto">
                <Game1>
                  <Card.Img variant="top" src={challenge} />
                  <Card.Body>
                    <Card.Title>Аудиовызов</Card.Title>
                  </Card.Body>
                </Game1>
                <Game2>
                  <Card.Img variant="top" src={sprint} />
                  <Card.Body>
                    <Card.Title>Спринт</Card.Title>
                  </Card.Body>
                </Game2>
              </Col>
              <Col xs={7} lg={7}>
                <Game3>
                  <Card.Img variant="top" src={speak} />
                  <Card.Body>
                    <Card.Title>Скажи это</Card.Title>
                  </Card.Body>
                </Game3>
                <Game4>
                  <Card.Img variant="top" src={savannah} />
                  <Card.Body>
                    <Card.Title>Саванна</Card.Title>
                  </Card.Body>
                </Game4>
              </Col>
            </div>
          </HowToRow>
        </Container>
      </Games>
    </>
  );
};
