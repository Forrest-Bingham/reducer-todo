import React, { useReducer } from "react";
import ToDoForm from "./components/ToDoForm";
import ToDoList from "./components/ToDoList";
import "./App.css";
import { reducer, initialState } from "./reducers/toDoReducer";

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div className="App">
      <h1> Your Reducer TO-DO List</h1>
      <ToDoForm dispatch={dispatch} />
      <ToDoList dispatch={dispatch} state={state} />
    </div>
  );
}

export default App;
