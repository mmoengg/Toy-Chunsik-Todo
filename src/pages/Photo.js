import React from "react";
import { Link } from "react-router-dom";

import classes from "./Photo.module.css";

import Card from "../components/Card";

import write from '../img/write-01.png'
import faceNo from '../img/face-no.png'
import faceYes from '../img/face-yes.png'
import fighting from '../img/fighting-01.png'


const Photo = () => {
  return (
    <Card>
      <div className={classes.main}>
        <img src={write} className={classes.img} />
        <img src={fighting} className={classes.img} />
        <img src={faceNo} className={classes.img} />
        <img src={faceYes} className={classes.img} />
      </div>
    </Card>
  );
};

export default Photo;
