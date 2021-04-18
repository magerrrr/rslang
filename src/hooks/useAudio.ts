import { useRef, useCallback } from 'react';
import { baseURL } from '../api/urls';

const useAudio = () => {
  const audio = useRef(null) as any;

  const play = async (audio: any) => {
    return new Promise((resolve) => {
      audio.play();
      audio.onended = resolve;
    });
  };

  const playAudio = useCallback(async (srcSet: any) => {
    if (audio.current) {
      const { current } = audio;
      const audioSrcSet = Array.isArray(srcSet) ? srcSet : [srcSet];
      for (const src of audioSrcSet) {
        current.src = `${baseURL}/${src}`;
        await play(current);
      }
    }
  }, []);

  return [audio, playAudio];
};

export default useAudio;
