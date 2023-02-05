import React from "react";

import classes from "./Menu.module.css";

import Card from "../components/Card";


const Finish = ({ todos }) => {

  const filtered = todos.filter((el) => {
    return el.checked === true
      ? el.checked
      : null
  });


  return (

    
    <Card>
      
      <div className={classes.main}>
        {filtered.map((el, idx) => {
          return (
            <div key={idx}>{el.text}</div>
          )
        })}
      </div>
    </Card>
  );
};

export default Finish;
