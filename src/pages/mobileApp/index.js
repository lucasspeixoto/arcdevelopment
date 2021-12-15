import React from "react";
import { Link } from "react-router-dom";
import Lottie from "react-lottie";

import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import useMediaQuery from "@mui/material/useMediaQuery";
import IconButton from "@mui/material/IconButton";

import backArrow from "../../assets/backArrow.svg";
import forwardArrow from "../../assets/forwardArrow.svg";
import swiss from "../../assets/swissKnife.svg";
import access from "../../assets/extendAccess.svg";
import engagement from "../../assets/increaseEngagement.svg";

import integrationAnimation from "../../animations/integrationAnimation/data";

import { CallToAction } from "../../components/ui/CallToAction";
import theme from "./../../components/ui/Theme";
import { useStyles } from "./styles";
import { Paper } from "@mui/material";

const MobileApps = ({ setValue, setSelectedItem }) => {
  const classes = useStyles();
  const matchesMD = useMediaQuery(theme.breakpoints.down("md"));
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));

  const integrationOptions = {
    loop: true,
    autoplay: true,
    animationData: integrationAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <Grid container direction='column'>
      <Grid item container direction='column' className={classes.mainContainer}>
        {/*--Heading--*/}
        <Grid
          item
          container
          direction='row'
          justifyContent='center'
          alignItems='center'
          className={classes.headingContainer}
        >
          <Paper sx={{ display: { xs: "none", md: "block" } }}>
            <Grid item sx={{ backgroundColor: "transparent" }}>
              <IconButton
                component={Link}
                to='/websites'
                sx={{ backgroundColor: "transparent" }}
              >
                <img src={backArrow} alt='to Website Development' />
              </IconButton>
            </Grid>
          </Paper>
          <Grid item className={classes.heading}>
            <Typography variant='h2' paragraph>
              Android/iOS Development
            </Typography>
            <Typography variant='body1' paragraph>
              Mobile apps allow you to take your tools on the go.
            </Typography>
            <Typography variant='body1' paragraph>
              Wether you want an app for you customers, employees, or yourself,
              we can build cross-platform native solutions for any part of you
              business process. This opens you up to a whole new world of
              possibilities by taking advantage of phone features like the
              camera, GPS, push notifications and more.
            </Typography>
            <Typography variant='body1' paragraph>
              Convenience. Connection.
            </Typography>
          </Grid>
          <Paper sx={{ display: { xs: "none", md: "block" } }}>
            <Grid item>
              <IconButton component={Link} to='/mobileApps'>
                <img src={forwardArrow} alt='to iOS/Android App Development' />
              </IconButton>
            </Grid>
          </Paper>
        </Grid>

        {/*--Animation Row--*/}
        <Grid
          item
          container
          justifyContent='space-around'
          alignItems='center'
          direction={matchesSM ? "column" : "row"}
          className={classes.sectionContainer}
        >
          <Grid item className={classes.textContainer}>
            <Typography variant='h4' paragraph>
              Integration
            </Typography>
            <Typography variant='body1' paragraph>
              Our technology enables an innate interconnection between web and
              mobile applications, putting everything you need right in one
              convenient place.
            </Typography>
            <Typography variant='body1' paragraph>
              This allows you to extend your reach, reinvent interactins and
              develop a stronger relationship with your users than ever before.
            </Typography>
          </Grid>
          <Grid item className={classes.animation}>
            <Lottie options={integrationOptions} />
          </Grid>
          <Grid item className={classes.textContainer}>
            <Typography variant='h4' paragraph>
              Simultaneous Platform Support
            </Typography>
            <Typography variant='body1' paragraph>
              Our cutting-edge development process allows us to create apps for
              iPhone, Android and tablests – all at the same time.
            </Typography>
            <Typography variant='body1' paragraph>
              This significantly reduces costs and creates a more unified brand
              experience across all devices.
            </Typography>
          </Grid>
        </Grid>

        {/*--Icons--*/}
        <Grid
          item
          container
          justifyContent='center'
          alignItems={matchesMD ? "center" : undefined}
          direction={matchesMD ? "column" : "row"}
          className={classes.iconContainer}
        >
          <Grid item>
            <Grid container direction='column' alignItems='center'>
              <Grid item>
                <Typography variant='h4' gutterBottom>
                  Extend Functionality
                </Typography>
              </Grid>
              <Grid item>
                <img
                  src={swiss}
                  alt='swiss army knife'
                  className={classes.icon}
                />
              </Grid>
            </Grid>
          </Grid>

          <Grid item className={classes.iconWrapper}>
            <Grid container direction='column' alignItems='center'>
              <Grid item>
                <Typography variant='h4' gutterBottom>
                  Extend Access
                </Typography>
              </Grid>
              <Grid item style={{ marginTop: matchesMD ? 0 : "3rem" }}>
                <img
                  src={access}
                  alt='tear-one-off sign'
                  className={classes.icon2}
                />
              </Grid>
            </Grid>
          </Grid>

          <Grid item>
            <Grid container direction='column' alignItems='center'>
              <Grid item>
                <Typography variant='h4' gutterBottom>
                  Increase Engagement
                </Typography>
              </Grid>
              <Grid item>
                <img
                  src={engagement}
                  alt='app with notification'
                  className={classes.icon}
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      {/*--Call to Action--*/}
      <CallToAction setValue={setValue} setSelectedItem={setSelectedItem} />
    </Grid>
  );
};

export default MobileApps;
