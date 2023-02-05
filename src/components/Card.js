import React from "react";
import { Link } from "react-router-dom";

import classes from "./Card.module.css";

import menu from "../img/menu-01.png";

const Card = ({ children }) => {
  return (
    <>
      <div className={classes.body}>
        <section className={classes.meun}>
          <p>춘식이는 귀여워</p>
          <Link to="/menu">
            <img src={menu} className={classes.img} />
          </Link>
        </section>
      <div>{children}</div>
      </div>
    </>
  );
};

export default Card;
