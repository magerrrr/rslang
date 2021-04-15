import styled, {css, keyframes} from 'styled-components'
import bgImage from '../../assets/savanna-bg.svg'

const GameContainer = styled.div`
  align-items: center;
  background-image: url(${bgImage});
  background-size: cover;
  display: flex;
  min-height: 100vh;
`;

const StartBlock = styled.div`
  color: white;
  margin: 0 auto;
  max-width: 1200px;
  text-align: center;
  
  h3 {
    font-size: 64px;
    font-weight: bold;
  }
  p {
    background-color: rgba(256, 256,256,0.7);
    border-radius: 30px;
    color: #2a444e;
    font-size: 32px;
    padding: 20px;
  }
`

const ButtonStart = styled.button`
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

const Box = styled.div`
  display: none;
  flex-direction: column;
  height: 80vh;
  justify-content: space-between;
  padding: 80px 0 50px;
  position: relative;
  margin: 0 auto;
  min-width: 1200px;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between !important;
`

const ButtonAnswer = styled.button<{isTrueAnswer: boolean, isFalseAnswer: boolean}>`
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
 
  &:active{
    background-color: rgb(166, 50, 198);
    color: white;
  }



  background: ${props => props.isTrueAnswer ? '#dcf5eb': 'white'};
  color: ${props => props.isTrueAnswer ? '#28c38a' : '#2a444e'};

  // background: ${props => props.isFalseAnswer ? '#fce4df': 'white'};
  // color: ${props => props.isFalseAnswer ? '#ed593b' : '#2a444e'};
}
`

const FalseAnswerButton = styled(ButtonAnswer)`
  color: #ed593b;
  background-color: #fce4df;
  border-color: #fce4df;
`
const TrueAnswerButton = styled(ButtonAnswer)`
color: #28c38a;
background-color: #dcf5eb;
border-color: #dcf5eb;
`

const bounce = keyframes`
  0% {
    transform: translateY(0);
  }
  100% {
    opacity:0;
    transform: translateY(65vh);
  }
`

const Word = styled.div`
  background-color: white;
  border-radius: 20px;
  font-size: 24px;
  padding: 20px;
  text-align: center;
  width: 200px;
  margin: 0 auto;
  animation-name: ${bounce};
  animation-duration: 4s;
  animation-iteration-count: infinite;
`


const LifeCounter = styled.div`
  position: absolute;
  top: 150px;
  left: 150px;
`

const Life = styled.div`
  display: inline-block;
  height: 30px;
  margin: 0 5px;
  width: 30px;
  border-radius: 50%;
  background-color: white;
`;

const LifeLess = styled(Life)`
  background-color: rgb(166, 50, 198)
`;

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
const ButtonRestart = styled(ButtonStart)`
margin-bottom: 30px;
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



export {GameContainer, StartBlock, ButtonStart, Box, ButtonContainer, ButtonAnswer, FalseAnswerButton, TrueAnswerButton, ButtonRestart, Word, LifeCounter, Life, LifeLess, GameOver,GameOverItem, GameOverItemCol, GameOverResult, ButtonDifficult}
