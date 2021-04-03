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
  }, [isTimerRun, start]);

  useEffect(() => {
    if (timeLeft === 0) {
      onTimeLeft();
    }
  }, [timeLeft, onTimeLeft]);

  return (
    <>
      <Countdown className="disabled">
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
