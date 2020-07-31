import React, { Component, useState, useEffect } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';
import List from './List.jsx';

const App = () => {
  const [todos, setTodos] = useState(['js studying']);
  const [newTodo, setNewTodo] = useState();

  const changeInputData = (e) => {
    setNewTodo(e.target.value);
  }

const addTodo = (e) => {
  e.preventDefault();
  setTodos([...todos, newTodo]);
}

useEffect( () => {
  console.log("new rendering", todos);
}, [todos])
  
  return (
    <div>
      <h1> Todo Application </h1>

      <form action="">
        <input type="text" name=""  onChange={changeInputData}/>
        <button onClick={addTodo}>Add Todo</button>
      </form>        

    <List todos={todos} />
    </div>
  )
}

render(<App />, document.getElementById('root'));
