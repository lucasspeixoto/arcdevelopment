import React from "react";
import { Grid, Typography, useMediaQuery } from "@mui/material";

import Lottie from "react-lottie";

import landinganimation from "../../animations/landinganimation/data";

import {
  EstimateButton,
  LearnButton,
  LearnButtonHero,
  useStyles,
} from "./styles";

import { ButtonArrow } from "./../ui/ButtonArrow";
import theme from "./../ui/Theme";

import customSoftwareIcon from "../../assets/Custom Software Icon.svg";

export const LandingPage = () => {
  const classes = useStyles();

  const matchesServiceBlock = useMediaQuery("(max-width:680px)");

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: landinganimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <Grid container direction='column' className={classes.mainContainer}>
      {/* -------- Hero Block -------- */}
      <Grid
        container
        justifyContent='flex-end'
        alignItems='center'
        direction='row'
      >
        <Grid sm item className={classes.heroTextContainer}>
          <Typography variant='h2' align='center'>
            Bringing West Coast Technology
            <br />
            to the Midwest
          </Typography>
          <Grid
            container
            justifyContent='center'
            gap={1}
            className={classes.buttonsContainer}
          >
            <Grid item>
              <EstimateButton variant='contained'>Free Estimate</EstimateButton>
            </Grid>
            <Grid item>
              <LearnButtonHero variant='outlined'>
                <span style={{ marginRight: 10 }}>Learn More</span>
                <ButtonArrow
                  width={15}
                  height={15}
                  fill={theme.palette.common.blue}
                ></ButtonArrow>
              </LearnButtonHero>
            </Grid>
          </Grid>
        </Grid>
        <Grid sm item className={classes.animation}>
          <Lottie
            options={defaultOptions}
            height={"100%"}
            width={"100%"}
          ></Lottie>
        </Grid>
      </Grid>

      {/* -------- Services Block -------- */}
      <Grid item>
        <Grid
          container
          direction='row'
          justifyContent={matchesServiceBlock ? "center" : undefined}
        >
          <Grid
            item
            sx={{
              marginLeft: matchesServiceBlock ? "1em" : "4em",
              textAlign: "center",
            }}
          >
            <Typography variant='h4'>Custom Software Development</Typography>
            <Typography
              variant='subtitle1'
              className={classes.servicesSubtitle}
            >
              Save Time. Save Energy. Save Money
            </Typography>
            <Typography variant='subtitle1'>
              Complete digital solutions, from investigation to{" "}
              <span className={classes.celebration}>celebration</span>
            </Typography>
            <LearnButton variant='outlined'>
              <span style={{ marginRight: 10 }}>Learn More</span>
              <ButtonArrow
                width={15}
                height={15}
                fill={theme.palette.common.blue}
              ></ButtonArrow>
            </LearnButton>
          </Grid>
          <Grid item>
            <img
              alt='custom software icon'
              className={classes.icon}
              src={customSoftwareIcon}
            />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};
