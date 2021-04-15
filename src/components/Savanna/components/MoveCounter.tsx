import React from 'react';
import '../styles.css';
import { LifeCounter, LifeLess, Life } from '../SavannaStyle';

const MoveCounter = ({ unCorrect }: any) => {
  if (unCorrect === 1) {
    return (
      <LifeCounter>
        <LifeLess />
        <Life />
        <Life />
      </LifeCounter>
    );
  } else if (unCorrect === 2) {
    return (
      <LifeCounter>
        <LifeLess />
        <LifeLess />
        <Life />
      </LifeCounter>
    );
  } else if (unCorrect === 3) {
    return (
      <LifeCounter>
        <LifeLess />
        <LifeLess />
        <LifeLess />
      </LifeCounter>
    );
  } else {
    return (
      <LifeCounter>
        <Life />
        <Life />
        <Life />
      </LifeCounter>
    );
  }
};

export default MoveCounter;
