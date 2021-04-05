import * as React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import {
  Intro,
  HowTo,
  Team,
  Member,
  HowToRow,
  GamesRow,
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
import kirill from '../../assets/img/team/kira.jpg';
import inna from '../../assets/img/team/inna.jpg';
import sergey from '../../assets/img/team/sergey.jpg';
import ana from '../../assets/img/team/photo.jpg';

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
          <GamesRow className="ml-auto mr-auto mt-4">
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
          </GamesRow>
        </Container>
      </Games>
      <Team>
        <Container style={{ maxWidth: 830 }}>
          <HowToTitle>Создатели</HowToTitle>
          <Row>
            <Col xs={6} sm={6}>
              <Member>
                <Col xs={4} sm={4} className="mr-auto">
                  <img src={kirill} alt="kirill" />
                </Col>
                <Col xs={7} sm={7} className="card-body">
                  <h5 className="card-title">Кирилл</h5>
                  This is a wider card with supporting text below as a natural lead-in to additional
                  content.
                </Col>
              </Member>
              <Member>
                <Col xs={4} sm={4} className="mr-auto">
                  <img src={inna} alt="inna" />
                </Col>
                <Col xs={7} sm={7} className="card-body">
                  <h5 className="card-title">Инна</h5>
                  This is a wider card with supporting text below as a natural lead-in to additional
                  content.
                </Col>
              </Member>
            </Col>
            <Col xs={6} sm={6}>
              <Member>
                <Col xs={4} sm={4} className="mr-auto">
                  <img src={sergey} alt="sergey" />
                </Col>
                <Col xs={7} sm={7} className="card-body">
                  <h5 className="card-title">Сергей</h5>
                  This is a wider card with supporting text below as a natural lead-in to additional
                  content.
                </Col>
              </Member>
              <Member>
                <Col xs={4} sm={4} className="mr-auto">
                  <img src={ana} alt="ana" />
                </Col>
                <Col xs={7} sm={7} className="card-body">
                  <h5 className="card-title">Анастасия</h5>
                  This is a wider card with supporting text below as a natural lead-in to additional
                  content.
                </Col>
              </Member>
            </Col>
          </Row>
        </Container>
      </Team>
    </>
  );
};
