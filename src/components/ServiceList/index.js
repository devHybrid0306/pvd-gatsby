import React, { useState } from "react";
import {
  Grid,
  ExpansionPanel,
  ExpansionPanelDetails,
  ExpansionPanelSummary,
} from "@material-ui/core";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import { makeStyles } from "@material-ui/core/styles";

import ImgService from './../../assets/images/service.svg';

import styles from "./styles.js";

const useStyles = makeStyles(styles);

export default function ServiceList(props) {
  const classes = useStyles();
  const { data } = props;

  const [index, setIndex] = useState(0);
  const [expanded, setExpanded] = React.useState('panel1');

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <div className={classes.container}>
      <Grid container className={classes.list}>
        <Grid item xs={12} sm={5}>
          {data.map((item) => {
            return (
              <button
                className={
                  index === item.index - 1
                    ? classes.listItem + " " + classes.listItemClick
                    : classes.listItem
                }
                onClick={() => setIndex(item.index - 1)}
                key={item.index}
              >
                <img
                  className={classes.listItemImg}
                  src={ImgService}
                  alt="service-item-img"
                />
                <div
                  className={
                    index === item.index - 1
                      ? classes.listItemText + " " + classes.listItemClickText
                      : classes.listItemText
                  }
                >
                  {item.title}
                </div>
              </button>
            )
          })}
        </Grid>
        <Grid item xs={12} sm={7} className={classes.content}>
          <div className={classes.contentTitle}>{data[index].title}</div>
          <div className={classes.contentSubTitle}>{data[index].subtitle}</div>
          <div className={classes.contentDescription}>{data[index].desp}</div>
        </Grid>
      </Grid>
      <Grid container className={classes.mobileList}>
        {data.map((item) => {
          return (
            <ExpansionPanel
              key={item.index}
              expanded={expanded === 'panel' + item.index}
              className={classes.listPanel}
              onChange={handleChange('panel' + item.index)}
            >
              <ExpansionPanelSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
                className={
                  expanded === 'panel' + item.index
                    ? classes.listItem + " " + classes.listItemClick
                    : classes.listItem
                }
              >
                <img
                  className={classes.listItemImg}
                  src={ImgService}
                  alt="service-item-img"
                />
                <div
                  className={
                    expanded === 'panel' + item.index
                      ? classes.listItemText + " " + classes.listItemClickText
                      : classes.listItemText
                  }
                >
                  {item.title}
                </div>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails className={classes.content}>
                <div className={classes.contentTitle}>{item.title}</div>
                <div className={classes.contentSubTitle}>{item.subtitle}</div>
                <div className={classes.contentDescription}>{item.desp}</div>
              </ExpansionPanelDetails>
            </ExpansionPanel>
          )
        })
        }
      </Grid>
    </div>
  );
}
