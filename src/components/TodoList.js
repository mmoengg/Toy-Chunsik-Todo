import React from "react";
import { Link } from "react-router-dom";

import TodoItem from "./TodoItem";
import classes from "./TodoList.module.css";
import menu from "../img/menu-01.png";

const TodoList = ({
  todos,
  onCheckToggle,
  onInsertToggle,
  onChangeSelectedTodo,
}) => {
  return (
    <div>
      <div className={classes.body}>
        <div className={classes.TodoList}>
          <section className={classes.meun}>
            <p>춘식이는 귀여워</p>
            <Link to="/menu">
              <img src={menu} className={classes.img} />
            </Link>
          </section>
          <section className={classes.position}>
            {todos.map((todo) => (
              <TodoItem
                todo={todo}
                key={todo.id}
                onCheckToggle={onCheckToggle}
                onInsertToggle={onInsertToggle}
                onChangeSelectedTodo={onChangeSelectedTodo}
              />
            ))}
          </section>
        </div>
      </div>
    </div>
  );
};

export default TodoList;
