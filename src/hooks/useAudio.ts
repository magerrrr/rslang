import { useRef, useCallback } from 'react';
import { baseURL } from '../api/urls';

const useAudio = () => {
  const audio = useRef(null) as any;

  const playAudio = useCallback((activeAudio: any) => {
    const { current } = audio;
    current.src = `${baseURL}/${activeAudio}`;
    current.play();
  }, []);

  return [audio, playAudio];
};

export default useAudio;
