import React from "react";
import { Link } from "react-router-dom";

import classes from "./Editer.module.css";
import me from '../img/me-01.png'

import Card from "../components/Card";

const Editer = () => {
  return (
    <Card>
      <div className={classes.main}>
        <img src={me} className={classes.img} />
        <div className={classes.div}>
          <p>✏️ Github</p>
          <a href="https://github.com/dding-v" target="_blank">dding-v</a>
        </div>
        <div className={classes.div}>
          <p>💬 Blog</p>
          <a href="https://dding-v.tistory.com" target="_blank">수료까지 달리는 중</a>
        </div>
        <div className={classes.div}>
          <p>🥳 Insta</p>
          <a href="https://www.instagram.com/mxnxeong/" target="_blank">@mxnxeong</a>
        </div>
      </div>
    </Card>
  );
};

export default Editer;
