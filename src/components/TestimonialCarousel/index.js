import React, { useState, useEffect } from "react";
import Swipe from 'react-easy-swipe';
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import ImgAvatar1 from "./../../assets/images/avatar1.jpeg";
import ImgAvatar2 from "./../../assets/images/avatar2.jpeg";
import ImgAvatar3 from "./../../assets/images/avatar3.jpeg";
import ImgLeftArrow from "./../../assets/images/carousel-left.png";
import ImgRightArrow from "./../../assets/images/carousel-right.png";

import styles from "./styles.js";

const useStyles = makeStyles(styles);

const testimonialArray = [
  {
    img: ImgAvatar1,
    desp: "Veno is wonderful to work with. They worked to understand our needs, prototyped with us, and delivered superb work. I highly recommend working with them!",
    job: "RedBull, CFO & Founder at Placement Inc."
  },
  {
    img: ImgAvatar2,
    desp: "Alex Veno is wonderful to work with. They worked to understand our needs, prototyped with us, and delivered superb work. I highly recommend working with them!",
    job: "Sean Linehan, CEO & Founder at Placement Inc."
  },
  {
    img: ImgAvatar3,
    desp: "Piotr Veno is wonderful to work with. They worked to understand our needs, prototyped with us, and delivered superb work. I highly recommend working with them!",
    job: "Cyber TEC, CTO & Founder at Placement Inc."
  }
];

function TestimonialItem(props) {
  const classes = useStyles();
  const { image, description, job } = props;
  return (
    <div className={classes.itemContainer}>
      <img src={image} className={classes.itemImg} alt="testimonial-img" />
      <div className={classes.itemDescription}>{description}</div>
      <div className={classes.itemJob}>{job}</div>
    </div>
  )
}

export default function TestimonialCarousel(props) {
  const classes = useStyles();
  const { autoplay } = props;
  const [value, setValue] = useState(0)
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    let interval = null;
    if (autoplay !== undefined) {
      interval = setInterval(() => moveRight(), 3000);
    }
    return () => clearInterval(interval);
  });

  const moveLeft = () => {
    setValue((value - 1) < 0 ? 2 : value - 1);
  }

  const moveRight = () => {
    setValue((value + 1) === 3 ? 0 : value + 1);
  }

  const onSwipeMove = (position) => {
    setOffset(position.x)
  }

  const onSwipeStart = () => {
    setOffset(0);
  }

  const onSwipeEnd = () => {
    if (offset > 50) {
      moveRight();
    } else if (offset < -50) {
      moveLeft();
    }
  }

  return (
    <Swipe
      className={classes.container}
      onSwipeMove={onSwipeMove}
      onSwipeStart={onSwipeStart}
      onSwipeEnd={onSwipeEnd}
    >
      <div className={classes.carousel}>
        <Grid className={classes.btnArrowLeft} onClick={moveLeft}>
          <img src={ImgLeftArrow} className={classes.arrowImg} alt="arrow-left-img" />
        </Grid>
        <div className={classes.carouselItem}>
          <TestimonialItem
            image={testimonialArray[value].img}
            description={testimonialArray[value].desp}
            job={testimonialArray[value].job}
          />
          <div className={classes.indicatorContainer}>
            <div 
              className={
                value === 0 
                ? classes.indicatorDot 
                : classes.indicatorDot + " " + classes.indicatorOFF
              }
            />
            <div 
              className={
                value === 1 
                ? classes.indicatorDot 
                : classes.indicatorDot + " " + classes.indicatorOFF
              }
            />
            <div 
              className={
                value === 2 
                ? classes.indicatorDot 
                : classes.indicatorDot + " " + classes.indicatorOFF
              }
            />            
          </div>
        </div>
        <Grid className={classes.btnArrowRight} onClick={moveRight}>
          <img src={ImgRightArrow} className={classes.arrowImg} alt="arrow-right-img" />
        </Grid>
      </div>
    </Swipe>
  )
}

