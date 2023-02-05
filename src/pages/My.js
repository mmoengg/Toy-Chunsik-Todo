import React, { useState } from "react";
import { Link } from "react-router-dom";

import classes from "./My.module.css";
import Card from "../components/Card";

import Fighting from '../img/fighting-01.png'

const My = ({ setName, name }) => {
  const [value, setValue] = useState("");

  // input이 변경 될 때마다 실행됨
  const onChange = (e) => {
    setValue(e.target.value);
  };

  const onSubmit = (e) => {
    if (e.key === "Enter") {
      if (value === "") {
        return alert("이름을 입력해 주세요");
      } else {
        setValue("");
        setName(value);
      }
    }
  };


  return (
    <Card>
      <div className={classes.main}>
        <p>네 이름은 뭐야?</p>
        <input
          className={classes.input}
          placeholder="New Name"
          value={value}
          onChange={onChange}
          onKeyPress={onSubmit}
        ></input>
        <button type="submit" onClick={onSubmit}></button>
        <img src={Fighting} alt="Fighting" />
        <p>{name}야, 오늘도 힘내!</p>
      </div>
    </Card>
  );
};

export default My;
