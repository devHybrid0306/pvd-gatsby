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

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Zoom ref={ref} {...props} />;
});

export default function PortfolioItem(props) {
  const classes = useStyles();
  const [isFull, setIsFull] = React.useState(false);

  const setFull = () => {
    setIsFull(true);
  }
  const handleClose = () => {
    setIsFull(false);
  };

  return (
    <div>
      <Grid container className={classes.container} onClick={setFull}>
        <img
          src={props.img}
          className={classes.image}
          alt="portfolio-img"
        />
      </Grid>
      <Dialog
        fullScreen
        open={isFull}
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
            <Button className={classes.back} onClick={handleClose}>Back</Button>
            <IconButton className={classes.close} onClick={handleClose}>
              <Close fontSize="large" />
            </IconButton>
          </Grid>
          <Grid container className={classes.body}>
            <Grid className={classes.bodyLeft}>
              <div className={classes.title}>Photographer’s Site</div>
              <div className={classes.keywordContainer}>
                <div className={classes.keyword}>#consulting</div>
                <div className={classes.keyword}>#uidesign</div>
                <div className={classes.keyword}>#webdevelopment</div>
              </div>
              <div className={classes.dateContainer}>
                <div className={classes.dateItem}>
                  <div className={classes.subTitle}>DATE:</div>
                  <div className={classes.dateContent}>April ‘20</div>
                </div>
                <div className={classes.dateItem}>
                  <div className={classes.subTitle}>CLIENT:</div>
                  <div className={classes.dateContent}>Veno Inc.</div>
                </div>
                <div className={classes.dateItem}>
                  <div className={classes.subTitle}>LIVE:</div>
                  <div className={classes.dateContent + " " + classes.live}>Veno.design</div>
                </div>
              </div>
              <div className={classes.infoContainer}>
                <div className={classes.subTitle}>PROJECT INFO:</div>
                <div className={classes.infoContent}>
                  There are many variations of passages of Lorem Ipsum available, 
                  but the majority have suffered alteration in some form, by injected 
                  humour, or randomised words which don't look even slightly believable. 
                  If you are going to use a passage of Lorem Ipsum, you need to be sure 
                  there isn't anything embarrassing hidden.
                </div>
              </div>
            </Grid>
            <Grid className={classes.bodyRight}>
              <img
                src={props.img}
                alt="portfolio-img"
                className={classes.portfolioImg}
              />
            </Grid>
          </Grid>
        </Grid>
      </Dialog>
    </div>
  )
}