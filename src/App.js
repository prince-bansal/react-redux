import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { getTodos } from "./redux/todoSlice";
import { useEffect } from "react";
function App() {
  const dispatch = useDispatch();
  const { todos, loading, error } = useSelector(state=> state.todos);

  useEffect(() => {
    dispatch(getTodos());
  }, []);
  return (
    <div className="App">
      {loading && <h1>Loading....</h1>}

      {todos &&
        todos.map((todo, i) => {
          return (
            <div key={i}>
              <p>{todo.title}</p>
            </div>
          );
        })}

      {error && <h1>Error....</h1>}
    </div>
  );
}

export default App;
