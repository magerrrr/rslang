import React from "react";
import '../styles.css';
import {Counter, CounterItem} from '../Savanna.style'



const MoveCounter = () => {
  return <Counter>
    <CounterItem className='red-bg'/>
    <CounterItem/>
    <CounterItem/>
  </Counter>
}


export default MoveCounter
