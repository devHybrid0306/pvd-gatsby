import React from 'react';
import {
  Dialog,
  Grid,
  Zoom,
  Button,
  IconButton,
} from '@material-ui/core';
import { Close } from '@material-ui/icons';
import { makeStyles } from "@material-ui/core/styles";

import ImgLogoDark from "../../assets/images/logo_dark.svg";
import ImgAvailable from "../../assets/images/available.png";

import styles from "./styles.js";

const useStyles = makeStyles(styles);

const policyList = [
  {
    index: 1,
    title: "Lorem ipsum dolor sit amet",
    content: "There are many variations of passages of Lorem Ipsum available, " +
      "but the majority have suffered alteration in some form, by injected humour, " +
      "or randomised words which don't look even slightly believable. If you are " +
      "going to use a passage of Lorem Ipsum, you need to be sure there isn't " +
      "anything embarrassing hidden in the middle of text. All the Lorem Ipsum " +
      "generators on the Internet tend to repeat predefined chunks as necessary, " +
      "making this the first true generator on the Internet. It uses a dictionary " +
      "of over 200 Latin words, combined with a handful of model sentence structures, " +
      "to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is " +
      "therefore always free from repetition, injected humour, or non-characteristic " +
      "words etc."
  },
  {
    index: 2,
    title: "Combined with a handful of model sentence",
    content: "There are many variations of passages of Lorem Ipsum available, " +
      "but the majority have suffered alteration in some form, by injected humour, " +
      "or randomised words which don't look even slightly believable. If you are " +
      "going to use a passage of Lorem Ipsum, you need to be sure there isn't " +
      "anything embarrassing hidden in the middle of text. All the Lorem Ipsum " +
      "generators on the Internet tend to repeat predefined chunks as necessary, " +
      "making this the first true generator on the Internet. It uses a dictionary " +
      "of over 200 Latin words, combined with a handful of model sentence structures, " +
      "to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is " +
      "therefore always free from repetition, injected humour, or non-characteristic " +
      "words etc."
  },
  {
    index: 3,
    title: "There are many variations of passages",
    content: "There are many variations of passages of Lorem Ipsum available, " +
      "but the majority have suffered alteration in some form, by injected humour, " +
      "or randomised words which don't look even slightly believable. If you are " +
      "going to use a passage of Lorem Ipsum, you need to be sure there isn't " +
      "anything embarrassing hidden in the middle of text. All the Lorem Ipsum " +
      "generators on the Internet tend to repeat predefined chunks as necessary, " +
      "making this the first true generator on the Internet. It uses a dictionary " +
      "of over 200 Latin words, combined with a handful of model sentence structures, " +
      "to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is " +
      "therefore always free from repetition, injected humour, or non-characteristic " +
      "words etc."
  },
];

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Zoom ref={ref} {...props} />;
});

export default function PrivacyPolicy(props) {
  const classes = useStyles();
  const { close } = props;

  return (
    <Dialog
      fullScreen
      open={true}
      TransitionComponent={Transition}
    >
      <Grid container className={classes.dialog} alignItems='flex-start'>
        <Grid
          container
          className={classes.dlgHeader}
          alignItems="center"
        >
          <img 
            src={ImgLogoDark}
            alt="logo-dark"
          />
          <img
            className={classes.availableImg}
            src={ImgAvailable}
            alt="available"
          />
          <p className={classes.availableText}>available</p>
          <Button className={classes.back} onClick={close}>Back</Button>
          <IconButton className={classes.close} onClick={close}>
            <Close fontSize="large" />
          </IconButton>
        </Grid>
        <Grid
          container
          className={classes.body}
          alignItems="center"
        >
          <p className={classes.title}>Privacy Policy</p>
          {
            policyList.map((item) => {
              return (
                <div key={item.index}>
                  <p className={classes.subtitle}>{item.index + ". " + item.title}</p>
                  <p className={classes.content}>{item.content}</p>
                </div>
              )
            })
          }
        </Grid>
      </Grid>
    </Dialog>
  )
}