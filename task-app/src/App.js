import Overview from "./components/Overview";
import React, { useState } from "react";
import "./App.css";

function App() {
  const [tasks] = useState([]);
  let [text] = useState("");
  const handleChange = (e) => {
    text = e.target.value;
  };
  const onSubmitTask = (e) => {
    e.preventDefault();
    tasks.push(text);
    console.log(tasks);
  };
  return (
    <div>
      <form onSubmit={onSubmitTask}>
        <label htmlFor="taskInput"></label>
        <input type="text" id="taskInput" onChange={handleChange} />
        <button type="submit">Add Task</button>
        <Overview tasks={tasks} />
      </form>
    </div>
  );
}

export default App;
