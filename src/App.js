import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

import classes from "./App.module.css";
import draw from "./img/draw-01.png";

import data from "./data/data";
import Template from "./components/Template";
import TodoInsert from "./components/TodoInsert";
import TodoList from "./components/TodoList";

import My from './pages/My'
import Finish from './pages/Finish'
import Photo from './pages/Photo'
import Editer from './pages/Editer'

const App = () => {
  // todoitem input 글자 받아오는 useState
  const [selectedTodo, setSelectedTodo] = useState(null);
  // 평소에는 false인 상태의 insert
  const [insertToggle, setInsertToggle] = useState(false);
  const [todos, setTodos] = useState(data);

  const onInsertTodo = (text) => {
    const todo = {
      id: uuidv4(),
      text,
      checked: false,
    };
    setTodos((todos) => todos.concat(todo));
  };

  // checked 상태 변경 함수
  const onCheckToggle = (id) => {
    setTodos((todos) =>
      todos.map((todo) =>
        todo.id === id ? { ...todo, checked: !todo.checked } : todo
      )
    );
  };

  // insert창 띄우고 끄고
  const onInsertToggle = () => {
    if (selectedTodo) {
      setSelectedTodo(null);
    }
    setInsertToggle((prev) => !prev);
  };

  // todotitem 글자 받아오는 useState를 쓰는 함수
  const onChangeSelectedTodo = (todo) => {
    setSelectedTodo(todo);
  };

  // 입력된 id와 일치하지 않는 것만 남겨 놓는다
  const onRemove = (id) => {
    onInsertToggle();
    setTodos((todos) => todos.filter((todo) => todo.id !== id));
  };

  const onUpdate = (id, text) => {
    onInsertToggle();
    setTodos((todos) =>
      todos.map((todo) => (todo.id === id ? { ...todo, text } : todo))
    );
  };

  return (
    <BrowserRouter>
      <div className={classes.main}>
        <Template todos={todos}>
          {insertToggle && (
            <TodoInsert
              selectedTodo={selectedTodo}
              onInsertTodo={onInsertTodo}
              onInsertToggle={onInsertToggle}
              onRemove={onRemove}
              onUpdate={onUpdate}
            />
          )}
          <div className={classes.position}>
            <TodoList
              todos={todos}
              onCheckToggle={onCheckToggle}
              onInsertToggle={onInsertToggle}
              onChangeSelectedTodo={onChangeSelectedTodo}
            />
            <div className={classes.addTodoButton}>
              <img
                src={draw}
                className={classes.img}
                onClick={onInsertToggle}
              />
            </div>
          </div>
        </Template>
        <Routes>
          <Route path="/my" element={<My />} />
          <Route path="/finish" element={<Finish />} />
          <Route path="/photo" element={<Photo />} />
          <Route path="/editer" element={<Editer />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;

