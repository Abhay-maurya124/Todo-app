import React from "react";
import { useState } from "react";
import Todolist from "./Todolist";

const Todocon = () => {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);

  // Changing the input value
  const inputChange = (e) => {
    setInput(e.target.value);
  };

  // Prevent from page reload and add new todo
  const formHandler = (e) => {
    e.preventDefault();
    if (input.trim()) {
      setTodos([...todos, input]);
      setInput("");
    }
    else if(input.length===0){
        alert("Input can't be empty.Please enter some task")
    }
  };

  return (
    <div>
      <h1 className="heading">TODO-APP</h1>
      <form className="form" onSubmit={formHandler}>
        <input
        className="input"
          type="text"
          value={input}
          id="textarea"
          placeholder="Enter your task"
          onChange={inputChange}
        />
        <button type="submit">Submit</button>
      </form>
      <Todolist todos={todos} />
    </div>
  );
};

export default Todocon;