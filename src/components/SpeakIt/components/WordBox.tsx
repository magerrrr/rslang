import * as React from 'react';
import { Image } from 'react-bootstrap';
import mainImage from '../../../assets/speakit.png';
import { Box } from '../SpeakItStyles';
//import { baseURL } from '../../../api/urls';
const baseURL = 'https://raw.githubusercontent.com/anasidorovich/rslang-data/master';

const WordBox = ({ activeImg, activeAudio, wordTranslate }: any) => {
  const image = activeImg ? `${baseURL}/${activeImg}` : mainImage;
  return (
    <Box>
      <Image className="mt-4" src={image} width="360" height="240" rounded />
      <p>{wordTranslate}</p>
      {activeAudio ? <audio src={`${baseURL}/${activeAudio}`} autoPlay /> : ''}
    </Box>
  );
};
export default WordBox;
