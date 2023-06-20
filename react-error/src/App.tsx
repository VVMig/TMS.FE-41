import React, { useEffect } from "react";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "./store";
import { addTask } from "./store/tasksReducer";
import { fetchTasks } from "./store/tasksReducer/actions";

function App() {
  const tasks = useSelector((state: RootState) => state.tasks.tasks);

  const dispatch = useDispatch() as AppDispatch;

  useEffect(() => {
    dispatch(fetchTasks());
  }, []);

  return (
    <div className="App">
      <button
        onClick={() =>
          dispatch(
            addTask({
              id: Date.now(),
              title: `New task ${Date.now()}`,
            })
          )
        }
      >
        Add task
      </button>
      {tasks.map((task) => (
        <div key={task.id}>{task.title}</div>
      ))}
    </div>
  );
}

export default App;
