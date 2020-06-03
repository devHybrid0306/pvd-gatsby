import React from 'react';
import { makeStyles } from "@material-ui/core/styles";

import ImgEye from './../../assets/images/Eye.svg';

import styles from "./styles.js";

const useStyles = makeStyles(styles);

export default function AdventageItem(props) {
  const classes = useStyles();
  const { title, description } = props;
  return (
    <div className={classes.container}>
      <img src={ImgEye} className={classes.itemImg} alt="adventage-img"/>
      <div className={classes.itemTitle}>{title}</div>
      <div className={classes.itemDescription}>{description}</div>
    </div>
  )
}

