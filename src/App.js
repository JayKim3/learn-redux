import React from "react";
import "./App.css";
import CounterContainer from "./containers/CounterContainer";
import TodosContainers from "./containers/TodosContainers";
function App() {
  return (
    <>
      <CounterContainer />
      <hr />
      <TodosContainers />
    </>
  );
}

export default App;
