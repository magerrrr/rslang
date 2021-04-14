import * as React from 'react';
import { Life, LifeLess } from './SprintStyles';
const livesArray = Array.from(new Array(3), (_, j) =>
  Array.from({ length: 3 }, (_, i) => j + (3 * (i + 1) - 2)),
);

const LivesContent = ({ lives }: any) => {
  if (lives >= 10) {
    return <Life className="m-2" />;
  }
  if (livesArray[2].includes(lives)) {
    return (
      <>
        <Life className="m-2" />
        <Life className="m-2" />
        <Life className="m-2" />
      </>
    );
  }

  if (livesArray[1].includes(lives)) {
    return (
      <>
        <Life className="m-2" />
        <Life className="m-2" />
        <LifeLess className="m-2" />
      </>
    );
  }
  if (livesArray[0].includes(lives)) {
    return (
      <>
        <Life className="m-2" />
        <LifeLess className="m-2" />
        <LifeLess className="m-2" />
      </>
    );
  }
  return (
    <>
      <LifeLess className="m-2" />
      <LifeLess className="m-2" />
      <LifeLess className="m-2" />
    </>
  );
};

export default LivesContent;
