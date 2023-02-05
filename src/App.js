import React, { useState } from "react";

import classes from "./App.module.css";
import draw from "./img/draw-01.png";

import Template from "./components/Template";
import TodoInsert from "./components/TodoInsert";
import TodoList from "./components/TodoList";

const App = () => {
  // tod-oitem 글자 받아오는 useState
  const [selectedTodo, setSelectedTodo] = useState(null);
  // 평소에는 false인 상태의 insert
  const [insertToggle, setInsertToggle] = useState(false);
  const [todos, setTodos] = useState([
    {
      id: Math.random().toString(),
      text: "할 일 1",
      checked: true,
    },
    {
      id: Math.random().toString(),
      text: "할 일 2",
      checked: false,
    },
  ]);

  const onInsertTodo = (text) => {
      const todo = {
        id: Math.random().toString(),
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

  // t o d o-item 글자 받아오는 useState를 쓰는 함수
  const onChangeSelectedTodo = (todo) => {
    setSelectedTodo(todo);
  };

  // insert창 띄우고 끄고
  const onInsertToggle = () => {
    setInsertToggle(prev => !prev)
  }

  return (
    <div className={classes.main}>
      <Template todos={todos}>
          {insertToggle && <TodoInsert onInsertToggle={onInsertToggle} onInsertTodo={onInsertTodo}  />}
        <div className={classes.position}>
          <TodoList
            todos={todos}
            onCheckToggle={onCheckToggle}
            onChangeSelectedTodo={onChangeSelectedTodo}
            onInsertToggle={onInsertToggle}
          />
          <div className={classes.addTodoButton}>
            <img src={draw} className={classes.img} onClick={onInsertToggle} />
          </div>
        </div>
      </Template>
    </div>
  );
};

export default App;
