import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";

import styles from "./styles.js";

const useStyles = makeStyles(styles);

export default function CustomButton(props) {
  const classes = useStyles();  
  const { title, onClick } = props;

  return (
    <button className={classes.container} onClick={onClick}>
      <p className={classes.label}>{title}</p>
    </button>
  );
}

CustomButton.propTypes = {
  title: PropTypes.string,
};
