'use client';

import { AlarmClock, RefreshCcw } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Button } from '../ui/button';

const Timer = () => {
  const [showTimer, setShowTimer] = useState<boolean>(false);
  const [time, setTime] = useState<number>(0);

  const formatTime = (time: number): string => {
    const hours = Math.floor(time / 3600);
    const minutes = Math.floor((time % 3600) / 60);
    const seconds = time % 60;

    return `${hours < 10 ? '0' + hours : hours}:${minutes < 10 ? '0' + minutes : minutes}:${
      seconds < 10 ? '0' + seconds : seconds
    }`;
  };

  useEffect(() => {
    let intervalId: NodeJS.Timeout;

    if (showTimer) {
      intervalId = setInterval(() => {
        setTime(time => time + 1);
      }, 1000);
    }

    return () => clearInterval(intervalId);
  }, [showTimer]);

  return (
    <div>
      {showTimer ? (
        <div className="flex items-center gap-4 space-x- px-1.5 cursor-pointer rounded">
          <div>{formatTime(time)}</div>
          <Button
            variant="outline"
            size="icon"
            onClick={() => {
              setShowTimer(false);
              setTime(0);
            }}
          >
            <RefreshCcw />
          </Button>
        </div>
      ) : (
        <Button
          variant="outline"
          size="icon"
          onClick={() => setShowTimer(true)}
        >
          <AlarmClock />
        </Button>
      )}
    </div>
  );
};
export default Timer;
