import React from "react";

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
        <img src={write} className={classes.img} alt='춘식이가 연필 든 모습' />
        <img src={fighting} className={classes.img} alt='파이팅하는 춘식이' />
        <img src={faceNo} className={classes.img} alt='기본 표정 춘식' />
        <img src={faceYes} className={classes.img} alt='하트 표정 춘식' />
      </div>
    </Card>
  );
};

export default Photo;
