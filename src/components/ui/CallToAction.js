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
    "& .MuiTypography-h2": {
      fontFamily: "Raleway",
      fontWeight: "700",
      fontSize: "2.5rem",
      color: theme.palette.common.blue,
      lineHeight: 1.5,
    },
    "& .MuiTypography-subtitle2": {
      fontWeight: "300",
      fontSize: "1.25rem",
      color: theme.palette.common.white,
    },
  },
  estimateButton: {
    width: 145,
    [theme.breakpoints.down("md")]: {
      marginTop: "2rem",
    },
  },
}));

export const CallToAction = ({ setValue }) => {
  const classes = useStyles();
  const matchesMD = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <Grid
      container
      alignItems="center"
      className={classes.callToActionContainer}
      direction={matchesMD ? "column" : "row"}
      justifyContent={matchesMD ? "center" : "space-between"}
    >
      <Grid item>
        <Grid container direction="column">
          <Grid item>
            <Typography variant="h2" paragraph>
              Simple Software.
            </Typography>
            <Typography variant="h2" paragraph>
              Revolutionary Results.
            </Typography>

            <Typography variant="subtitle2" paragraph>
              Take advantage of the 21st century.
            </Typography>
          </Grid>
          <Grid item>
            <LearnMoreButton
              type="small"
              variant="outlined"
              marginRight={10}
              text="Learn More"
              width={15}
              height={15}
              fill={theme.palette.common.blue}
              color={theme.palette.common.blue}
              changeTabValue={() => {
                setValue(2);
              }}
            />
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        <FreeEstimateButton
          text="Free Estimate"
          className={classes.estimateButton}
        />
      </Grid>
    </Grid>
  );
};
