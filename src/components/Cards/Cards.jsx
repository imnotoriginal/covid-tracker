import React from "react";
import { Card, CardContent, Typography, Grid } from "@material-ui/core";
import CountUp from "react-countup";
import classes from "classnames";
import styles from "./Cards.module.css";

const Cards = ({ lastUpdate, ...data }) => {
  const date = new Date(lastUpdate).toDateString();
  const cards = [
    {
      prop: "confirmed",
      name: "Infected",
      description: "Number of active cases of COVID-19",
    },
    {
      prop: "recovered",
      name: "Recovered",
      description: "Number of recoveries from COVID-19",
    },
    {
      prop: "deaths",
      name: "Deaths",
      description: "Number of deaths cased by COVID-19",
    },
  ];

  return (
    <div className={styles.container}>
      <Grid container justify="center" spacing={3}>
        {cards.map(({ prop, name, description }, index) => (
          <Grid key={index} item xs={12} sm={8} md={4}>
            <Card className={classes(styles.card, styles[name.toLowerCase()])}>
              <CardContent>
                <Typography color="textSecondary" gutterBottom>
                  {name}
                </Typography>
                <Typography variant="h5">
                  <CountUp
                    start={0}
                    end={data[prop].value}
                    duration={2.5}
                    separator="'"
                  />
                </Typography>
                <Typography color="textSecondary">{date}</Typography>
                <Typography variant="body2">{description}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Cards;
