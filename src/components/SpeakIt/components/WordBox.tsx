import * as React from 'react';
import { Image } from 'react-bootstrap';
import mainImage from '../../../assets/speakit.png';
import { Box } from '../SpeakItStyles';
import { baseURL } from '../../../api/urls';

const WordBox = ({ activeImg, audio, wordTranslate }: any) => {
  const image = activeImg ? `${baseURL}/${activeImg}` : mainImage;
  return (
    <Box>
      <Image className="mt-4" src={image} width="360" height="240" rounded />
      <p>{wordTranslate}</p>
      <audio ref={audio} />
    </Box>
  );
};
export default WordBox;
