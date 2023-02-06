import React from "react";
import no from "../img/face-no.png";
import yes from "../img/face-yes.png";

import classes from "./TodoItem.module.css";

const TodoItem = ({
  todo,
  onCheckToggle,
  onInsertToggle,
  onChangeSelectedTodo,
}) => {
  const { id, text, checked } = todo;
  // onChangeSelectedTodo이 목록에 있는 input 클릭하면 해당하는 text값을 가지고 있음, 화면에 보이진 않음, 클릭 시 객체가 선택 되는 것임
  return (
    <div className={classes.TodoItem}>
      <div className={`${classes.content} ${checked ? classes.checked : ""}`}>
        <div
          className={classes.text}
          onClick={() => {
            onChangeSelectedTodo(todo);
            onInsertToggle();
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
            alt="하트 표정 춘식"
          />
        ) : (
          <img
            src={no}
            className={classes.img}
            onClick={() => {
              onCheckToggle(id);
            }}
            alt="기본 표정 춘식"
          />
        )}
      </div>
    </div>
  );
};

export default TodoItem;
