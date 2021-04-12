import * as React from 'react';
import * as S from './FooterStyles';
import { Container } from 'react-bootstrap';
import Link from '@material-ui/core/Link';
import logo from '../../assets/img/logo-rs.svg';

type Props = {};

export const Footer = (props: Props) => {
  return (
    <>
      <S.Footer>
        <Container fluid={true} className="align-items-center pr-4 pl-4">
          <div className="d-flex align-items-center mt-4">
            <div className="mr-auto">
              <Link href="https://rs.school/js/" target="_blank" rel="noopener noreferrer">
                <img
                  src={logo}
                  alt="Rolling Scopes School Logo"
                  height="80"
                  className="footer-logo"
                />
              </Link>
            </div>
            <S.TeamContainer className="d-flex align-items-center">
              <div className="d-flex">
                <Member href="https://github.com/inna-rekesh" name="Inna" />
                <Member href="https://github.com/anasidorovich" name="Anastasiya" />
              </div>
              <div className="d-flex">
                <Member href="https://github.com/SergeyNaumenko" name="Sergey" />
                <Member href="https://github.com/magerrrr" name="Kirill" />
              </div>
            </S.TeamContainer>
          </div>
        </Container>
        <S.Copyright>@2021</S.Copyright>
      </S.Footer>
    </>
  );
};

const Member = ({ href, name }: any) => {
  return (
    <Link
      style={{ textDecoration: 'none' }}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      color="inherit"
    >
      {name}
    </Link>
  );
};
