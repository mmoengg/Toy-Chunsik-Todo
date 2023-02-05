import React, { useState } from "react";
import classes from "./TodoInsert.module.css";

const TodoInsert = ({ onInsertTodo, onInsertToggle }) => {
  // 값이 바뀔 때마다 실행하는 함수
  // input에 입력한 값을 value라는 값으로 TodoInsert가 가지고 있는 상태인 것
  const [value, setValue] = useState("");

  // input이 변경 될 때마다 실행됨
  const onChange = (e) => {
    setValue(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault(); // 새로고침 방지
    if (value === "") {
      return alert("할 일을 작성해 주세요");
    } else {
    e.preventDefault(); // 새로고침 방지
    onInsertTodo(value);
    setValue("");
    onInsertToggle(false)
    }
  };

  return (
    <div>
      <div className={classes.card} onClick={onInsertToggle}></div>

      <form onSubmit={onSubmit} className={classes.form}>
        <input placeholder="New Task" value={value} onChange={onChange}></input>
        <button type="submit"></button>
      </form>
    </div>
  );
};

export default TodoInsert;
