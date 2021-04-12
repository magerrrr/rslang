import styled from 'styled-components';

const Footer = styled.footer`
  display: flex;
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: calc(100px + 3rem);
  background-color: #c1b3f1;
  color: inherit;
  text-align: center;
  flex-direction: column;
  font-size: 1.5rem;
  font-weight: 600;

  & a {
    margin-left: 12px;
  }

  .footer-logo {
    margin-left: -8px;
  }
`;

const TeamContainer = styled.div`
  @media (max-width: 600px) {
    flex-direction: column;
    font-size: 1.2rem;
  }
`;

const Copyright = styled.div`
  font-size: 1rem;
  font-weight: 500;
  margin-bottom: 1rem;
`;

export { Footer, TeamContainer, Copyright };
