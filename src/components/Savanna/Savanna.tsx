import React from 'react';
import {GameContainer, Box, ButtonContainer} from "./Savanna.style";
import ButtonAnswer from "./components/ButtonAnswer";
import NewWord from "./components/NewWord";
import MoveCounter from "./components/MoveCounter";

const Savanna = () => {
  return (
    <GameContainer>
      <Box>
        <MoveCounter/>
        <NewWord/>
        <ButtonContainer>
          <ButtonAnswer/>
          <ButtonAnswer/>
          <ButtonAnswer/>
          <ButtonAnswer/>
        </ButtonContainer>
      </Box>
    </GameContainer>
  );
};

export default Savanna;
