import React, { useState, useEffect } from "react";
import classes from "./TodoInsert.module.css";
import editRe from "../img/edit-re.png";
import editDel from "../img/edit-del.png";

const TodoInsert = ({
  onInsertTodo,
  onInsertToggle,
  selectedTodo,
  onRemove,
  onUpdate,
}) => {
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
      onInsertToggle(false);
    }
  };

  // selectedTodo는 목록에서 클릭한 투두의 test값
  // useEffect = 렌더링이 되면 '컴포넌트가 렌더링이 되면 어떤 것을 실행하느냐?'를 여기서 처리한다
  useEffect(() => {
    if (selectedTodo) {
      setValue(selectedTodo.text);
    }
  }, [selectedTodo]);

  return (
    <div>
      <div className={classes.card} onClick={onInsertToggle}></div>

      <form
        onSubmit={
          selectedTodo
            ? () => {
                onUpdate(selectedTodo.id, value);
              }
            : onSubmit
        }
        className={classes.form}
      >
        <input placeholder="New Task" value={value} onChange={onChange}></input>
        {selectedTodo ? (
          <div className={classes.edit}>
            <img
              src={editRe}
              className={classes.rewrite}
              onClick={() => {
                onUpdate(selectedTodo.id, value);
              }}
              alt="체크 표시"
            />
            <img
              src={editDel}
              className={classes.rewrite}
              onClick={() => {
                onRemove(selectedTodo.id);
              }}
              alt="엑스 표시"
            />
          </div>
        ) : (
          <>
            <img src={editRe} className={classes.rewrite} onClick={onSubmit} alt="체크 표시" />
            <button type="submit"></button>
          </>
        )}
      </form>
    </div>
  );
};

export default TodoInsert;
