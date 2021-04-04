import * as React from 'react';
import { Button, Container, Row, Col } from 'react-bootstrap';
import { Intro, HowTo, HowToRow, HowToTitle, ImageContainer, HowToText, Games } from './MainStyles';
import english from '../../assets/english.jpg';
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
      <Games></Games>
    </>
  );
};
