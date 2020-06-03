import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import {
  FormControl,
  InputLabel,
  Input,
  InputAdornment,
} from "@material-ui/core";

import ImgSuccess from "../../assets/images/success.png"

import styles from "./styles.js";

const useStyles = makeStyles(styles);

export default function InputField(props) {
  const classes = useStyles();
  const {
    className,
    label,
    error,
    success,
    multiline,
    rows,
    required,
    id,
    value,
    onChange,
  } = props;

  return (
    <div className={
      success !== undefined && success
        ? classes.container + " " + classes.success
        : error !== undefined && error
          ? classes.container + " " + classes.error
          : classes.container
    }
    >
      <FormControl
        className={
          className !== undefined
            ? classes.controlContainer + " " + className
            : classes.controlContainer
        }
      >
        {label !== undefined ? (
          <InputLabel
            required={required !== undefined ? true : false}
            className={classes.label}
          >
            {label}
          </InputLabel>
        ) : null}
        <Input
          disableUnderline={true}
          className={classes.input}
          multiline={multiline !== undefined ? true : false}
          rows={rows !== undefined ? rows : null}
          id={id !== undefined ? id : null}
          value={value !== undefined ? value : null}
          onChange={onChange !== undefined ? onChange : null}
          endAdornment={
            <InputAdornment position="end">
              {
                success !== undefined && success
                  ? <img className={classes.successAdornment} src={ImgSuccess} alt='success' />
                  : error !== undefined && error
                    ? <div className={classes.errorAdornment}>Fill this field</div>
                    : <></>
              }
            </InputAdornment>
          }
        />
      </FormControl>
    </div>
  );
}

InputField.propTypes = {
  label: PropTypes.node,
  error: PropTypes.bool,
  success: PropTypes.bool,
};