import { withCounter } from "../hoc/withCounter";
import { useCounter } from "../hooks";

interface IProps {
  title: string;
}

export const Time = withCounter<IProps>(({ title, time }) => {
  const { time: timeFromHook, onPausePlay, isPause } = useCounter();

  return (
    <div>
      <h2>{title}</h2>
      <h3>{time}</h3>
      <hr />
      <button onClick={onPausePlay}>{!isPause ? "Pause" : "Play"}</button>

      <h4>Time from hook: {timeFromHook}</h4>
    </div>
  );
});
