import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import TodoList from "./TodoList";
import TodoInput from "./TodoInput";

function App() {
  const [tasks, setTasks] = useState(["pray", "play", "study"]);
  const [inputTask, setInputTask] = useState("");

  const handleClick = () => {
    setTasks((prevTasks) => [...prevTasks, inputTask]);
  };

  const handleRemoveTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  const handleChange = (e) => {
    setInputTask(e.target.value);
  };
  return (
    <>
      <h2>To-Do List</h2>
      <TodoInput onSelect={handleClick} onChange={handleChange} />
      <TodoList tasks={tasks} handleRemoveTask={handleRemoveTask} />
    </>
  );
}

export default App;
