import { useState, useEffect } from 'react';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';

const useGetSpeakWord = () => {
  const [speakWord, setSpeakWord] = useState(null);
  const { finalTranscript, resetTranscript } = useSpeechRecognition();

  useEffect(() => {
    console.log(finalTranscript);
    if (finalTranscript !== '') {
      setSpeakWord(finalTranscript);
    }
  }, [finalTranscript]);

  return [speakWord, resetTranscript];
};

const startRecording = () => {
  SpeechRecognition.startListening({
    continuous: true,
    language: 'en-GB',
  });
};

const stopRecording = () => {
  SpeechRecognition.stopListening();
  SpeechRecognition.abortListening();
};

export { startRecording, stopRecording, useGetSpeakWord };
