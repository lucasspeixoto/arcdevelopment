import React from "react";

import Grid from "@mui/material/Grid";

import { makeStyles } from "@mui/styles";
import theme from "../ui/Theme";
import Typography from "@mui/material/Typography";
import useMediaQuery from "@mui/material/useMediaQuery";
import { LearnMoreButton } from "./LearnMoreButton";

import background from "../../assets/background.jpg";
import mobileBackground from "../../assets/mobileBackground.jpg";
import { FreeEstimateButton } from "./FreeEstimateButton";

const useStyles = makeStyles(() => ({
  callToActionContainer: {
    minHeight: "100%",
    padding: "0 1rem",
    height: "40rem",
    backgroundImage: `url(${background})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    textAlign: "center",
    [theme.breakpoints.down("md")]: {
      backgroundImage: `url(${mobileBackground})`,
      height: "35rem",
      padding: "0 2rem",
    },
    [theme.breakpoints.down("xs")]: {
      padding: "0 1rem",
    },
  },
  estimateButton: {
    width: 145,
    [theme.breakpoints.down("md")]: {
      marginTop: "2rem",
    },
  },
}));

export const CallToAction = () => {
  const classes = useStyles();
  const matchesMD = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <Grid
      container
      alignItems='center'
      className={classes.callToActionContainer}
      direction={matchesMD ? "column" : "row"}
      justifyContent={matchesMD ? "center" : "space-between"}
    >
      <Grid item>
        <Grid container direction='column'>
          <Grid item>
            <Typography variant='h2'>
              Simple Software.
              <br />
              Revolutionary Results.
            </Typography>

            <Typography variant='subtitle2'>
              Take advantage of the 21st century.
            </Typography>
          </Grid>
          <Grid item>
            <LearnMoreButton
              type='small'
              variant='outlined'
              marginRight={10}
              text='Learn More'
              width={15}
              height={15}
              fill={theme.palette.common.blue}
              color={theme.palette.common.blue}
            />
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        <FreeEstimateButton
          variant='contained'
          text='Free Estimate'
          className={classes.estimateButton}
        />
      </Grid>
    </Grid>
  );
};
