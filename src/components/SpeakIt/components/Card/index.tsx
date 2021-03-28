import * as React from 'react';
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
  isGameMode,
  isGuessed,
  isNotGuessed,
}: any) => {
  const isActive = active.id === id;

  function setCurrentItem(id: number, image: string, setActive: any, activeAudio: string) {
    const audio = document.querySelector('audio') as any;
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
        isActive ? 'isActive' : '',
        id,
        isGameMode ? 'isGame' : '',
        isGuessed ? 'isGuessed' : '',
        isNotGuessed ? 'isNotGuessed' : '',
      ].join(' ')}
    >
      <AudioIcon
        className="audio-icon"
        onClick={() => setCurrentItem(id, image, setActive, audio)}
      />
      <p>{word}</p>
      <p>{transcription}</p>
    </WordCard>
  );
};
export default Card;
