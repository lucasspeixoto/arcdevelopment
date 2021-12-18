import React from "react";

import Typography from "@mui/material/Typography";
import useMediaQuery from "@mui/material/useMediaQuery";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

import Lottie from "react-lottie";

import landinganimation from "../../animations/landinganimation/data";

import { useStyles } from "./styles";

import customSoftwareIcon from "../../assets/Custom Software Icon.svg";
import mobileAppsIcon from "../../assets/mobileIcon.svg";
import websiteIcon from "../../assets/website.svg";
import { FreeEstimateButton } from "../../components/ui/FreeEstimateButton";
import { LearnMoreButton } from "./../../components/ui/LearnMoreButton";

import { CallToAction } from "./../../components/ui/CallToAction";
import theme from "../../components/ui/Theme";

export const LandingPage = ({ setValue, setSelectedItem }) => {
  const classes = useStyles();

  const matchesServiceBlock = useMediaQuery("(max-width:920px)");
  const matchesInformationBlock = useMediaQuery("(max-width:630px)");

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: landinganimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <Grid container direction="column" className={classes.mainContainer}>
      {/* -------- Hero Block -------- */}
      <Grid
        item
        container
        justifyContent="flex-end"
        alignItems="center"
        direction="row"
      >
        <Grid item sm className={classes.heroTextContainer}>
          <Typography variant="h2" align="center">
            Bringing West Coast Technology
            <br />
            to the Midwest
          </Typography>
          <Grid
            container
            justifyContent="center"
            gap={1}
            className={classes.buttonsContainer}
          >
            <Grid item>
              <FreeEstimateButton
                variant="contained"
                text="Free Estimate"
                className={classes.heroEstimateButton}
              />
            </Grid>
            <Grid item>
              <LearnMoreButton
                type="big"
                variant="outlined"
                marginRight={10}
                text="Learn More"
                route="/therevolution"
                width={15}
                height={15}
                fill={theme.palette.common.blue}
                color={theme.palette.common.blue}
                changeTabValue={() => setValue(2)}
              ></LearnMoreButton>
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
        direction="column"
        className={classes.serviceContainer}
      >
        <Grid
          container
          direction="row"
          justifyContent={matchesServiceBlock ? "center" : "flex-start"}
        >
          <Grid item sx={{ textAlign: matchesServiceBlock ? "center" : null }}>
            <Typography variant="h4">Custom Software Development</Typography>
            <Typography
              variant="subtitle1"
              className={classes.servicesSubtitle}
            >
              Save Time. Save Energy. Save Money
            </Typography>
            <Typography variant="subtitle1">
              Complete digital solutions, from investigation to{" "}
              <span className={classes.celebration}>celebration</span>
            </Typography>
            <LearnMoreButton
              type="small"
              variant="outlined"
              marginRight={10}
              text="Learn More"
              route="/customsoftware"
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
              alt="custom software icon"
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
        direction="column"
        className={classes.serviceContainer}
      >
        <Grid
          container
          direction="row"
          justifyContent={matchesServiceBlock ? "center" : "flex-end"}
        >
          <Grid item sx={{ textAlign: matchesServiceBlock ? "center" : null }}>
            <Typography variant="h4">Android/iOS Development</Typography>
            <Typography
              variant="subtitle1"
              className={classes.servicesSubtitle}
            >
              Extend Functionality. Extend Access. Increase Engagement.
            </Typography>
            <Typography variant="subtitle1">
              Integrate your web experience or create a standalone App{" "}
              {matchesServiceBlock ? null : <br></br>}with either mobile
              platform
            </Typography>
            <LearnMoreButton
              type="small"
              variant="outlined"
              marginRight={10}
              text="Learn More"
              route="/mobileapps"
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
              alt="mobile phone icon"
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
        direction="column"
        className={classes.serviceContainer}
      >
        <Grid
          container
          direction="row"
          justifyContent={matchesServiceBlock ? "center" : "flex-start"}
        >
          <Grid item sx={{ textAlign: matchesServiceBlock ? "center" : null }}>
            <Typography variant="h4">WebSite Development</Typography>
            <Typography
              variant="subtitle1"
              className={classes.servicesSubtitle}
            >
              Reach more. Discover More. Sell More.
            </Typography>
            <Typography variant="subtitle1">
              Optimized for search engines, built for speed.
            </Typography>
            <LearnMoreButton
              type="small"
              variant="outlined"
              marginRight={10}
              text="Learn More"
              route="/websites"
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
              alt="website icon"
              className={classes.icon}
              src={websiteIcon}
            />
          </Grid>
        </Grid>
      </Grid>

      {/* -------- The Revolution Block -------- */}
      <Grid
        container
        alignItems="center"
        justifyContent="center"
        className={classes.revolutionContainer}
      >
        <Card className={classes.revolutionCard}>
          <CardContent>
            <Grid container direction="column" alignItems="center">
              <Grid item>
                <Typography variant="h3" gutterBottom>
                  The Revolution
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant="subtitle1">
                  Visionary insights coupled with cutting-edge technology is a
                  recipe for revolution.
                </Typography>
                <LearnMoreButton
                  type="small"
                  variant="outlined"
                  marginRight={10}
                  text="Learn More"
                  route="/therevolution"
                  width={15}
                  height={15}
                  fill={theme.palette.common.blue}
                  color={theme.palette.common.blue}
                  changeTabValue={() => setValue(2)}
                />
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Grid>

      {/* -------- The Information Block -------- */}
      <Grid
        item
        container
        direction={matchesInformationBlock ? "column" : "row"}
        alignItems="center"
        className={classes.informationContainer}
        justifyContent={
          matchesInformationBlock ? "space-evenly" : "space-between"
        }
      >
        {/* About Us */}
        <Grid item style={{ marginLeft: matchesInformationBlock ? 0 : "2em" }}>
          <Grid container direction="column">
            <Grid item>
              <Typography
                variant="h2"
                style={{ color: theme.palette.common.white }}
              >
                About us
              </Typography>
            </Grid>
          </Grid>
          <Grid item>
            <Typography variant="subtitle2">Let's ger personal.</Typography>
          </Grid>
          <Grid item>
            <LearnMoreButton
              type="small"
              variant="outlined"
              marginRight={10}
              text="Learn More"
              route="/about"
              width={15}
              height={15}
              fill={theme.palette.common.white}
              color={theme.palette.common.white}
              changeTabValue={() => setValue(3)}
            />
          </Grid>
        </Grid>
        {/* Contact Us */}
        <Grid item style={{ marginRight: matchesInformationBlock ? 0 : "2em" }}>
          <Grid container direction="column">
            <Grid item>
              <Typography
                variant="h2"
                style={{ color: theme.palette.common.white }}
              >
                Contact Us
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="subtitle2">Say Hello!</Typography>
            </Grid>
            <Grid item>
              <LearnMoreButton
                type="small"
                variant="outlined"
                marginRight={10}
                text="Learn More"
                route="/contact"
                width={15}
                height={15}
                fill={theme.palette.common.white}
                color={theme.palette.common.white}
                changeTabValue={() => setValue(4)}
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      {/* -------- The Call to Action -------- */}
      <CallToAction setValue={setValue} setSelectedItem={setSelectedItem} />
    </Grid>
  );
};
