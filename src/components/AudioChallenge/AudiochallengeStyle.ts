import styled from 'styled-components';
import bgImage from '../../assets/audio-challenge/audiochallenge-bg.svg';
import audioImage from '../../assets/audio-challenge/audio-img.svg';

const GameContainer = styled.div`
  align-items: center;
  background-image: url(${bgImage});
  background-size: cover;
  min-height: 100vh;
  display: flex;
flex-direction: column;
justify-content: space-between;
`;

const Box = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-between;
margin-bottom: 100px;
`

const AudioImage = styled.div`
 background-image: url(${audioImage});
 background-size: cover;
 width: 150px;
 height: 140px;
 margin: 150px 0;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 50px;

`

const Button= styled.button`
  border: none;
  border-radius: 20px;
  font-family: 'Philosopher', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
  font-size: 16px;
  padding:10px 10px;
  width: 150px;
  margin: 0 20px;
  &:hover,
  &:active, 
  &:focus{
    outline: none;
  }
  &:hover,
  &:active{
    background-color: rgb(166, 50, 198);
    color: white;
`

const StartButton = styled.button`
  margin-top: 100px;
  background-color: white;
  border: none;
  border-radius: 20px;
  font-family: 'Philosopher', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
  font-size: 16px;
  padding:15px 20px;
  width: 200px;
  
  &:hover,
  &:active, 
  &:focus{
    outline: none;
  }
  &:hover,
  &:active{
    background-color: rgb(166, 50, 198);
    color: white;
`

const NextWord= styled.button`
  background-color: white;
  border: none;
  font-size: 12px;
  padding:5px;
  width: 100px;
  
  &:hover,
  &:active, 
  &:focus{
    outline: none;
  }
  &:hover,
  &:active{
`


const AnswerContainer = styled.div`
    width: 300px;
`

const GameOver = styled.div`
margin: 50px auto;
display:flex;
flex-direction: column;
align-items: center;
justify-content space-between;
`

const GameOverResult = styled.div`
display:flex;
max-width: 800px;
background-color: #ffffff;
border-radius: 20px;
box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
`

const GameOverItem = styled.div`
  padding: 10px 15px;
width: 200px;
h3 {
  margin:0;
  padding:0;
}
  div.gameOverHeader {
    padding-bottom:20px;
  }
`

const GameOverItemCol = styled.div`
display:flex;
justify-content: space-between;
align-items: center;
height: 60px;

div {
  padding: 10px 0;
}

 span{
  display: block;
}
`

const ButtonDifficult = styled.button`
    background-color: #d74c37;
    border: none;
    border-radius: 10px;
    height: 30px;
    width: 100px;

    &:hover {
      background-color: rgb(166, 50, 198);
    }
`







export { GameContainer, Box, AudioImage,StartButton, ButtonContainer, Button, NextWord,  GameOver,GameOverItem, GameOverItemCol, GameOverResult, ButtonDifficult };