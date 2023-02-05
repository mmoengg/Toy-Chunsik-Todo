import React from "react";
import no from "../img/face-no.png";
import yes from "../img/face-yes.png";

import classes from "./TodoItem.module.css";

const TodoItem = ({ todo, onCheckToggle, onChangeSelectedTodo, onInsertToggle }) => {
  const { id, text, checked } = todo;

  return (
    <div className={classes.TodoItem}>
      <div className={`${classes.content} ${checked ? classes.checked : ""}`}>
        <div
          className={classes.text}
          onClick={() => {
            onInsertToggle(todo);
          }}
        >
          {text}
        </div>
        {checked ? (
          <img
            src={yes}
            className={classes.img}
            onClick={() => {
              onCheckToggle(id);
            }}
          />
        ) : (
          <img
            src={no}
            className={classes.img}
            onClick={() => {
              onCheckToggle(id);
            }}
          />
        )}
      </div>
    </div>
  );
};

export default TodoItem;
