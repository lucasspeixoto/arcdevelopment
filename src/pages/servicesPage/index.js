import React from "react";
import { useStyles } from "./styles";
import customSoftwareIcon from "../../assets/Custom Software Icon.svg";
import mobileAppsIcon from "../../assets/mobileIcon.svg";
import websiteIcon from "../../assets/website.svg";
import useMediaQuery from "@mui/material/useMediaQuery";
import { Grid, Typography } from "@mui/material";
import { LearnMoreButton } from "../../components/ui/LearnMoreButton";
import theme from "../../components/ui/Theme";

export const Services = ({ setValue, setSelectedItem }) => {
  const classes = useStyles();

  const matchesServiceBlock = useMediaQuery("(max-width:920px)");

  return (
    <Grid container direction='column' className={classes.mainContainer}>
      {/* -------- Title Block -------- */}
      <Grid
        item
        container
        direction='column'
        alignItems={matchesServiceBlock ? "center" : "left"}
        className={classes.serviceContainer}
      >
        <Typography variant='h2' gutterBottom>
          Services
        </Typography>
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
            <LearnMoreButton
              type='small'
              variant='outlined'
              marginRight={10}
              text='Learn More'
              route='/customsoftware'
              width={15}
              height={15}
              fill={theme.palette.common.blue}
              color={theme.palette.common.blue}
              changeTabValue={() => {
                setValue(1);
                setSelectedItem(1);
              }}
            />
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
            <LearnMoreButton
              type='small'
              variant='outlined'
              marginRight={10}
              text='Learn More'
              route='/mobileapps'
              width={15}
              height={15}
              fill={theme.palette.common.blue}
              color={theme.palette.common.blue}
              changeTabValue={() => {
                setValue(1);
                setSelectedItem(2);
              }}
            />
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
            <LearnMoreButton
              type='small'
              variant='outlined'
              marginRight={10}
              text='Learn More'
              route='/websites'
              width={15}
              height={15}
              fill={theme.palette.common.blue}
              color={theme.palette.common.blue}
              changeTabValue={() => {
                setValue(1);
                setSelectedItem(3);
              }}
            />
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
    </Grid>
  );
};
