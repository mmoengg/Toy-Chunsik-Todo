import React from "react";
import TodoItem from "./TodoItem";
import classes from "./TodoList.module.css";
import menu from "../img/menu-01.png";

const TodoList = ({ todos, onCheckToggle, onChangeSelectedTodo, onInsertToggle }) => {
  return (
    <div>
      <div className={classes.body}>
        <div className={classes.TodoList}>
          <section className={classes.meun}>
            <p>춘식이는 귀여워</p>
            <img src={menu} className={classes.img} />
          </section>
          <section className={classes.position}>
            {todos.map((todo) => (
              <TodoItem
                todo={todo}
                key={todo.id}
                onCheckToggle={onCheckToggle}
                onChangeSelectedTodo={onChangeSelectedTodo}
                onInsertToggle={onInsertToggle}
              />
            ))}
          </section>
        </div>
      </div>
    </div>
  );
};

export default TodoList;
