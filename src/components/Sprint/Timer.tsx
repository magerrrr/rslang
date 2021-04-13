import { Countdown } from './SprintStyles';
import * as React from 'react';
import { useState, useEffect } from 'react';
import useCountDown from 'react-countdown-hook';

const initialTime = 60 * 1000;
const interval = 1000;

const convertMsToSeconds = (ms: number) => (ms / 1000).toFixed(0);

const Timer = ({ isTimerRun, onTimeLeft, stopTimer }: any) => {
  const [isStart, setIsStart] = useState(false);
  const [timeLeft, { start, reset }] = useCountDown(initialTime, interval);

  useEffect(() => {
    if (isTimerRun) {
      start();
      setIsStart(true);
    }
        if (stopTimer) {
          reset();
          setIsStart(false);
        }
  }, [isTimerRun, start, stopTimer, reset]);

  useEffect(() => {
    if (isStart && timeLeft === 0) {
      onTimeLeft();
    }
  }, [timeLeft, onTimeLeft, isStart]);

  return (
    <>
      <Countdown className={`${isTimerRun ? '' : 'disabled'}`}>
        <div className="timer_line"></div>
        <div className="timer_body">
          <div className="timer_counter">
            <span id="timer">{convertMsToSeconds(timeLeft)}</span>
          </div>
        </div>
      </Countdown>
    </>
  );
};
export default Timer;
