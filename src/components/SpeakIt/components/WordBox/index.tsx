import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import mainImage from '../../../../assets/speakit.png';

const BACK_BASE_URL = 'https://raw.githubusercontent.com/anasidorovich/rslang-data/master';

const WordBox = ({ activeImg, activeAudio, wordTranslate }: any) => {
  const image = activeImg ? `${BACK_BASE_URL}/${activeImg}` : mainImage;
  return (
    <div className="ViewBox">
      <Image className="m-4" src={image} width="360" height="240" rounded />
      <p>{wordTranslate}</p>
      {activeAudio ? <audio src={`${BACK_BASE_URL}/${activeAudio}`} autoPlay /> : ''}
    </div>
  );
};
export default WordBox;
