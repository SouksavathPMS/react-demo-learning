import React, { useState } from 'react'

const TodoList = () => {
    const [todos, setTodo] = useState([]);
    const [todoInput, setTodoInput] = useState("");

    const handleTodoInput =(event) => {
        setTodoInput(event.target.value);
    }

    const addTodoHandler = () => {
        if (todoInput.trim() === "") return;
        setTodo([...todos, todoInput]);
        setTodoInput("");
    }
  return (
      <div>
          <h2>TODO</h2>
          <ul >
              {todos.map((todo, index) => (
              <li key={index}> {todo} </li>
              ))}
          </ul>
          <input value={todoInput} onChange={handleTodoInput} />
          <button onClick={addTodoHandler}>Add todo</button>
    </div>
  )
}

export default TodoList
