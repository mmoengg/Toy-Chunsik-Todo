import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

import classes from "./App.module.css";
import write from "./img/write-01.png";

import data from "./data/data";
import Template from "./components/Template";
import TodoInsert from "./components/TodoInsert";
import TodoList from "./components/TodoList";

import Card from "./components/Card";
import Menu from "./pages/Menu";
import My from "./pages/My";
import Photo from "./pages/Photo";
import Editer from "./pages/Editer";

const App = () => {
  // todoitem input 글자 받아오는 useState
  const [selectedTodo, setSelectedTodo] = useState(null);
  // 평소에는 false인 상태의 insert창
  const [insertToggle, setInsertToggle] = useState(false);
  const [todos, setTodos] = useState(data);
  // 이름 받아오기
  const [name, setName] = useState("민정이");

  const onInsertTodo = (text) => {
    const todo = {
      id: uuidv4(),
      text,
      checked: false,
    };
    setTodos((todos) => [todo, ...todos]);
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

  // 이름이 바뀔 때마다 받아오기

  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <div className={classes.main}>
        <Template todos={todos} name={name}>
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
            <Routes>
              <Route
                path="/"
                element={
                  <>
                    <TodoList
                      todos={todos}
                      onCheckToggle={onCheckToggle}
                      onInsertToggle={onInsertToggle}
                      onChangeSelectedTodo={onChangeSelectedTodo}
                    />
                    <div className={classes.addTodoButton}>
                      <img
                        src={write}
                        className={classes.img}
                        onClick={onInsertToggle}
                        alt="춘식이가 연필 든 모습"
                      />
                    </div>
                  </>
                }
              />
              <Route path="/card" element={<Card />} />
              <Route path="/menu" element={<Menu />} />
              <Route
                path="/my"
                element={<My setName={setName} name={name} />}
              />
              <Route path="/photo" element={<Photo />} />
              <Route path="/editer" element={<Editer />} />
            </Routes>
          </div>
        </Template>
      </div>
    </BrowserRouter>
  );
};

export default App;
