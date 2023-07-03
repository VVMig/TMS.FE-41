import { useEffect, useRef, useState } from "react";

interface IProps {
  time: string;
}

export function withCounter<OriginalProps>(
  Component: React.FC<OriginalProps & IProps>
) {
  return (props: OriginalProps) => {
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
      }, 1000);

      return () => {
        if (counterRef.current) {
          clearInterval(counterRef.current);
        }
      };
    }, []);

    return (
      <>
        <button onClick={onPausePlay}>{!isPause ? "Pause" : "Play"}</button>
        <Component time={time} {...props} />
      </>
    );
  };
}
