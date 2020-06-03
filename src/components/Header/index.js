import React from "react";
import {
  AppBar,
  Toolbar,
  Hidden,
  IconButton,
  Button,
  Grid,
  Collapse,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import ImgLogoDark from "../../assets/images/logo_dark.svg";
import ImgMenu from "../../assets/images/menu.png";
import ImgClose from "../../assets/images/close.png";

import styles from "./styles.js";

const useStyles = makeStyles(styles);

export default function Header(props) {
  const classes = useStyles();
  const { open, handleChange, scrollToPosition } = props;

  return (
    <AppBar className={open ? classes.openBar : classes.appBar}>
      <Toolbar className={classes.container}>
        <Grid onClick={() => scrollToPosition("pvd")}>
          <img className={classes.brand} src={ImgLogoDark} alt="logo-dark" />
        </Grid>
        <Grid container justify="flex-end">
          <Hidden smDown implementation="css">
            <Grid container justify="space-between">            
              <Button
                className={classes.btnMenu}
                onClick={() => scrollToPosition('section-about')}
              >
                About
              </Button>
              <Button
                className={classes.btnMenu}
                onClick={() => scrollToPosition('section-services')}
              >
                Services
              </Button>
              <Button
                className={classes.btnMenu}
                onClick={() => scrollToPosition('section-whyus')}
              >
                Why us?
              </Button>
              <Button
                className={classes.btnMenu}
                onClick={() => scrollToPosition('section-portfolio')}
              >
                Portfolio
              </Button>
              <Button
                className={classes.btnMenu}
                onClick={() => scrollToPosition('section-testimonials')}
              >
                Testimonials
              </Button>
              <Button
                className={classes.btnContact}
                onClick={() => scrollToPosition('section-contact')}
              >
                contact
              </Button>
            </Grid>
          </Hidden>
          <Hidden mdUp>
            <div className={classes.divider} />
            <IconButton size="small" aria-label="open drawer" onClick={handleChange}>
              {
                open
                  ? <img className={classes.mnuImg} src={ImgClose} alt='close' />
                  : <img className={classes.mnuImg} src={ImgMenu} alt='menu' />
              }
            </IconButton>
          </Hidden>
        </Grid>
      </Toolbar>
      <Hidden mdUp implementation="js">
        <Collapse in={open}>
          <Grid
            container
            direction="column"
            alignItems="center"
          >
            <Button className={classes.mobileMenu}>Start</Button>
            <Button
              className={classes.mobileMenu}
              onClick={() => scrollToPosition('section-about')}
            >
              About
            </Button>
            <Button
              className={classes.mobileMenu}
              onClick={() => scrollToPosition('section-services')}
            >
              Services
            </Button>
            <Button
              className={classes.mobileMenu}
              onClick={() => scrollToPosition('section-whyus')}
            >
              Why us?
            </Button>
            <Button
              className={classes.mobileMenu}
              onClick={() => scrollToPosition('section-portfolio')}
            >
              Portfolio
            </Button>
            <Button
              className={classes.mobileMenu}
              onClick={() => scrollToPosition('section-testimonials')}
            >
              Testimonials
            </Button>
            <Button className={classes.mobileContact}
              onClick={() => scrollToPosition('section-contact')}
            >
              contact
            </Button>
          </Grid>
        </Collapse >
      </Hidden>
    </AppBar>
  );
}