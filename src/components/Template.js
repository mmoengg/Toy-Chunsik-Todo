import React from "react";
import { Link } from "react-router-dom";
import classes from "./Template.module.css";

const Template = ({ children, todos, name }) => {
  return (
    <div className={classes.Template}>
      <Link to="/">
        <div className={classes.title}>
          {name}가 <br /> 오늘 할 일 {todos.length}개{" "}
        </div>
      </Link>
      <div className={classes.children}>{children}</div>
    </div>
  );
};

export default Template;
