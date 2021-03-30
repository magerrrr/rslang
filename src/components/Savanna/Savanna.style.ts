import styled from 'styled-components'
import bgImage from '../../assets/savanna-bg.svg'

const GameContainer = styled.div`
  background-image: url(${bgImage});
  min-height: 100vh;
  background-size: cover;
`;

const Button = styled.button`
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
  display: flex;
  flex-direction: column;
  height: 80vh;
  justify-content: space-between;
  margin: 0 auto;
  max-width: 1200px;
  padding: 80px;
  position: relative;
`;

const  ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between !important;
  align-items: normal;
`

const Word = styled.div`
  background-color: white;
  border-radius: 20px;
  font-size: 24px;
  padding: 20px;
  text-align: center;
  width: 200px;
  margin: 0 auto;
`

const Counter = styled.div`
  position: absolute;
  top: 150px;
  left: 150px;
`
const CounterItem = styled.div`
  background-color: white;
  border-radius:50%;
  content: '';
  display: inline-block;
  height: 30px;
  margin: 0 5px;
  width: 30px;
`



export {GameContainer, Button, Box, ButtonContainer, Word, Counter, CounterItem}
