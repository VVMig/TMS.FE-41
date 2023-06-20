import { useEffect, useRef, useState } from "react";

export const useCounter = () => {
  const counterRef = useRef<NodeJS.Timer | null>(null);
  const [time, setTime] = useState(new Date().toLocaleTimeString());
  const [isPause, setIsPause] = useState(false);

  const onPausePlay = () => {
    if (counterRef.current) {
      clearInterval(counterRef.current as NodeJS.Timer);
      counterRef.current = null;
      setIsPause(true);
    } else {
      setIsPause(false);

      counterRef.current = setInterval(() => {
        setTime(new Date().toLocaleTimeString());
      }, 1000);
    }
  };

  useEffect(() => {
    counterRef.current = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    });
  }, []);

  return {
    time,
    onPausePlay,
    isPause,
  };
};
