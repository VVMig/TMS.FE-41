import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import {
  addCashAction,
  addUserAction,
  changeNickAction,
  getCashAction,
} from "./store/actions";
import { useEffect } from "react";

function App() {
  const dispatch = useDispatch();

  const tasks = useSelector((state: any) => state.tasks.tasks);

  const addCash = (cash: number) => {
    dispatch(addCashAction(cash));
  };

  const getCash = (cash: number) => {
    dispatch(getCashAction(cash));
  };

  const changeNick = (nick: string) => {
    dispatch(changeNickAction(nick));
  };

  const addUser = (user: string) => {
    dispatch(addUserAction(user));
  };

  useEffect(() => {
    dispatch({
      type: "FETCH_TODOS",
    });

    // Thunk implementation
    // dispatch(fetchData());
  }, []);

  return (
    <div className="App">
      <div>
        <button onClick={() => changeNick(prompt("Введите ник") || "Any")}>
          Сменить ник
        </button>
        <button onClick={() => addCash(Number(prompt("Введите сумму")))}>
          Положить деньги
        </button>
        <button onClick={() => getCash(Number(prompt("Введите сумму")))}>
          Снять деньги
        </button>
        <button onClick={() => addUser(prompt("Введите сумму") || "Any user")}>
          Добавить юзера
        </button>
        <button
          onClick={() => {
            // Thunk implementation
            // dispatch(fetchData())
            dispatch({
              type: "FETCH_TODOS",
            });
          }}
        >
          Запросить задания
        </button>
      </div>
      <p>{tasks.length}</p>
      {tasks.map((task: any) => {
        return (
          <div key={task.id} style={{ padding: "10px" }}>
            {task.title}
          </div>
        );
      })}
    </div>
  );
}

export default App;
