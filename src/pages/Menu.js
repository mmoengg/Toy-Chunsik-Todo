import React from "react";
import { Link } from "react-router-dom";

import classes from "./Menu.module.css";

import Card from "../components/Card";

const Menu = () => {
  return (
    <Card>
      <div className={classes.main}>
        <Link to="/">
          <div className={classes.div}>Home</div>
        </Link>
        <Link to="/my">
          <div className={classes.div}>My</div>
        </Link>
        <Link to="/finish">
          <div className={classes.div}>Finish</div>
        </Link>
        <Link to="/photo">
          <div className={classes.div}>Photo</div>
        </Link>
        <Link to="/editer">
          <div className={classes.div}>Editer</div>
        </Link>
      </div>
    </Card>
  );
};

export default Menu;
