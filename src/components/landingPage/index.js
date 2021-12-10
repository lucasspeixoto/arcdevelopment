import React from "react";

import { Typography, useMediaQuery } from "@mui/material";

import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

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
import mobileAppsIcon from "../../assets/mobileIcon.svg";
import websiteIcon from "../../assets/website.svg";

export const LandingPage = () => {
  const classes = useStyles();

  const matchesServiceBlock = useMediaQuery("(max-width:920px)");

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

      {/* -------- Custom Software Development -------- */}
      <Grid
        item
        container
        direction='column'
        className={classes.serviceContainer}
      >
        <Grid
          container
          direction='row'
          justifyContent={matchesServiceBlock ? "center" : "flex-start"}
        >
          <Grid item sx={{ textAlign: matchesServiceBlock ? "center" : null }}>
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

      {/* -------- Android/iOs Block -------- */}
      <Grid
        item
        container
        direction='column'
        className={classes.serviceContainer}
      >
        <Grid
          container
          direction='row'
          justifyContent={matchesServiceBlock ? "center" : "flex-end"}
        >
          <Grid item sx={{ textAlign: matchesServiceBlock ? "center" : null }}>
            <Typography variant='h4'>Android/iOS Development</Typography>
            <Typography
              variant='subtitle1'
              className={classes.servicesSubtitle}
            >
              Extend Functionality. Extend Access. Increase Engagement.
            </Typography>
            <Typography variant='subtitle1'>
              Integrate your web experience or create a standalone App{" "}
              {matchesServiceBlock ? null : <br></br>}with either mobile
              platform
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
              alt='mobile phone icon'
              className={classes.icon}
              src={mobileAppsIcon}
            />
          </Grid>
        </Grid>
      </Grid>

      {/* -------- Web Site Development -------- */}
      <Grid
        item
        container
        direction='column'
        className={classes.serviceContainer}
      >
        <Grid
          container
          direction='row'
          justifyContent={matchesServiceBlock ? "center" : "flex-start"}
        >
          <Grid item sx={{ textAlign: matchesServiceBlock ? "center" : null }}>
            <Typography variant='h4'>WebSite Development</Typography>
            <Typography
              variant='subtitle1'
              className={classes.servicesSubtitle}
            >
              Reach more. Discover More. Sell More.
            </Typography>
            <Typography variant='subtitle1'>
              Optimized for search engines, built for speed.
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
              alt='website icon'
              className={classes.icon}
              src={websiteIcon}
            />
          </Grid>
        </Grid>
      </Grid>

      {/* -------- The Revolution Block -------- */}
      <Grid item>
        <Grid
          container
          alignItems='center'
          justifyContent='center'
          className={classes.revolutionContainer}
        >
          <Card className={classes.revolutionCard}>
            <CardContent>
              <Grid container direction='column' alignItems='center'>
                <Grid item>
                  <Typography variant='h3' gutterBottom>
                    The Revolution
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography variant='subtitle1'>
                    Visionary insights coupled with cutting-edge technology is a
                    recipe for revolution.
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
              </Grid>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Grid>
  );
};
