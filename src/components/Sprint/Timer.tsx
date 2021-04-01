import { Countdown } from './SprintStyles';
import * as React from 'react';
import { useEffect } from 'react';
import useCountDown from 'react-countdown-hook';
const initialTime = 60 * 1000;
const interval = 1000;
const convertMsToSeconds = (ms: number) => (ms / 1000).toFixed(0);

const Timer = ({ isTimerRun, onTimeLeft }: any) => {
  const [timeLeft, { start }] = useCountDown(initialTime, interval);

  useEffect(() => {
    if (isTimerRun) {
      start();
    }
  }, [isTimerRun]);

  useEffect(() => {
    if (timeLeft === 0) {
      onTimeLeft();
    }
  }, [timeLeft]);

  return (
    <>
      <Countdown>
        <div className="timer_line"></div>
        <div className="timer_body">
          <div className="timer_counter">
            <span id="timer">60</span>
          </div>
        </div>
      </Countdown>
    </>
  );
};
export default Timer;
