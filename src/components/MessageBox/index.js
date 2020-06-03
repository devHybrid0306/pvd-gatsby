import React from "react";
import {
  Dialog,
  Grid,
  Zoom,
  Badge,
} from '@material-ui/core';

import { makeStyles } from "@material-ui/core/styles";

import ImgMessage from "../../assets/images/message.png"
import ImgMessageStatus from "../../assets/images/message-status.png"
import ImgClose from "../../assets/images/close.png";

import styles from "./styles.js";

const useStyles = makeStyles(styles);

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Zoom ref={ref} {...props} />;
});

export default function MessageBox(props) {
  const classes = useStyles();
  const { close } = props;
  return (
    <Dialog
      open={true}
      TransitionComponent={Transition}
      disableBackdropClick
    >
      <div className={classes.container}>
        <Grid onClick={close}>
          <img className={classes.close} src={ImgClose} alt='close' />
        </Grid>
        <div className={classes.body}>
          <Badge
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'right',
            }}
            badgeContent={
              <div className={classes.messageStatus}>
                <img className={classes.messageStatusImg} src={ImgMessageStatus} alt='success' />
              </div>
            }
          >
            <img className={classes.message} src={ImgMessage} alt='message' />
          </Badge>
          <div className={classes.title}>Message was sent</div>
          <div className={classes.description}>
            We’ll try to respond quickly as it possible. <br />Please be patient.
          </div>
          <Grid className={classes.button} onClick={close}>Got it</Grid>
          <div className={classes.underBtn} />
        </div>
      </div>
    </Dialog>
  );
}