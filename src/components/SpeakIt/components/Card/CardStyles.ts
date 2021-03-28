import styled from 'styled-components';

import audio from '../../../../assets/volume.svg';

const Card = styled.div`
  font-size: 18px;
  line-height: 1.4;
  position: relative;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  min-width: 200px;
  min-height: 70px;
  margin: 10px;
  padding: 10px 10px 10px 70px;
  cursor: pointer;
  transition: 0.3s;

  border-radius: 20px;
  background-color: #fff;
  box-shadow: 0 0 10px rgba(166, 50, 198, 0.5);

  p {
    margin-top: 0;
    margin-bottom: 0;
  }
`;

const AudioIcon = styled.span`
  position: absolute;
  top: 22px;
  left: 20px;
  width: 26px;
  height: 26px;
  background-image: url(${audio});
  background-size: contain;
`;

export { Card, AudioIcon };
