import React from 'react';
import { ButtonAnswer } from '../SavannaStyle';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  word: string;
  handlerAnswer: any;
  isTrueAnswer: any;
  isFalseAnswer: any;
}

const Button: React.FC<ButtonProps> = (props: any) => {
  return (
    <ButtonAnswer {...props} onClick={(e) => props.handlerAnswer(e)}>
      {props.word}
    </ButtonAnswer>
  );
};

export default Button;
