import React, { useState, useEffect } from 'react';
import './App.css';
import Form from './components/Form';
import TodoList from './components/TodoList';
// import {ReactComponent as Laptop} from './image/'
import Todo_image from './image/todo_image.png';

function App() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("all");
  const [filtered, setFiltered] = useState([]);

  useEffect(() => {
    getLocalTodos();
  }, []);

  useEffect(() => {
    filterHandler();
    saveLocalTodos();
  }, [todos, status]);

  const filterHandler = () => {
    switch (status) {
      case 'completed':
        setFiltered(todos.filter(todo => todo.completed === true));
        break;
      case 'uncompleted':
        setFiltered(todos.filter(todo => todo.completed === false));
        break;
      default:
        setFiltered(todos);
        break;
    }
  }

  const saveLocalTodos = () => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }

  const getLocalTodos = () => {
    if (localStorage.getItem("todos") === null) {
      localStorage.setItem("todos", JSON.stringify([]));
    } else {
      let localTodo = JSON.parse(localStorage.getItem("todos"));
      setTodos(localTodo);
    }
  }
  return (
    <div className="App">
      <div className="heading">
        <img className="heading_img" src={Todo_image} alt="ToDo logo" />
        <h1 className="heading_title">Fyntune Todo Assignment</h1>
      </div>
      <Form inputText={inputText}
        todos={todos}
        setTodos={setTodos}
        setInputText={setInputText}
        setStatus={setStatus} />
      <TodoList todos={todos} setTodos={setTodos} filtered={filtered} />
    </div>
  );
}

export default App;
