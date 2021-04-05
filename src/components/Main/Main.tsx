import * as React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import {
  Intro,
  HowTo,
  Team,
  FlexContainer,
  Member,
  HowToRow,
  GameCol,
  GamesRow,
  Title,
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
            <Col lg={6} sm={12} md={8} xs={8} className="ml-auto mr-auto mt-5">
              <p>Выучить английский с LANG!</p>
            </Col>
          </Row>
          <Row>
            <Col xs={8} lg={6} sm={12} md={8} className="ml-auto mr-auto mt-4">
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
        <FlexContainer>
          <HowToRow>
            <Col xs={12}>
              <Title className="p-5">Как пользоваться приложением</Title>
            </Col>
            <ImageContainer xs={6} lg={6}>
              <img src={english} alt="english" />
            </ImageContainer>
            <HowToText xs={12} lg={5} md={5}>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                Ipsum has been the industry's standard dummy text ever since the 1500s, when an
                unknown printer took a galley of type and scrambled it to make a type specimen book.
                It has survived not only five centuries, but also the leap into electronic{' '}
              </p>
            </HowToText>
          </HowToRow>
        </FlexContainer>
      </HowTo>
      <Games>
        <Container>
          <GamesRow className="ml-auto mr-auto mt-4">
            <Col xs={12} lg={12}>
              <Title>Игры</Title>
            </Col>
            <GameCol xs={12} md={12} sm={12} lg={5} className="mr-auto">
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
            </GameCol>
            <GameCol xs={12} md={12} sm={12} lg={7}>
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
            </GameCol>
          </GamesRow>
        </Container>
      </Games>
      <Team>
        <FlexContainer style={{ maxWidth: 860, height: '100%' }}>
          <Row>
            <Col xs={12} sm={12} className="team-col">
              <Title>Команда</Title>
            </Col>
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
        </FlexContainer>
      </Team>
    </>
  );
};
