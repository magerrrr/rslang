import React from 'react';
import { Card as WordCard, AudioIcon } from './CardStyles';

const Card = ({
  word,
  transcription,
  active,
  setActive,
  id,
  image,
  setActiveAudio,
  audio,
  wordTranslate,
  isGameMod,
  isGuessed,
  isNotGuessed,
}: any) => {
  const isActive = active.id === id;

  function setCurrentItem(id: number, image: string, setActive: any, activeAudio: string) {
    const audio = document.querySelector('audio') as any;
    console.log(image);
    if (isActive && audio) {
      audio.play();
    } else {
      setActive({
        id,
        img: image,
        wordTranslate,
      });
      setActiveAudio(activeAudio);
    }
  }
  return (
    <WordCard
      className={[
        'item ',
        isActive ? 'isActive' : '',
        id,
        isGameMod ? 'isGame' : '',
        isGuessed ? 'isGuessed' : '',
        isNotGuessed ? 'isNotGuessed' : '',
      ].join(' ')}
      onClick={() => setCurrentItem(id, image, setActive, audio)}
    >
      <AudioIcon className="audio-icon" />
      <p>{word}</p>
      <p>{transcription}</p>
    </WordCard>
  );
};
export default Card;
