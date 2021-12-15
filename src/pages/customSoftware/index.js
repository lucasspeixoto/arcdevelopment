import React from "react";
import { Link } from "react-router-dom";
import Lottie from "react-lottie";

import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import useMediaQuery from "@mui/material/useMediaQuery";
import IconButton from "@mui/material/IconButton";

import backArrow from "../../assets/backArrow.svg";
import forwardArrow from "../../assets/forwardArrow.svg";
import lightbulb from "../../assets/bulb.svg";
import cash from "../../assets/cash.svg";
import stopwatch from "../../assets/stopwatch.svg";
import documentsAnimation from "../../animations/documentsAnimation/data";
import scaleAnimation from "../../animations/scaleAnimation/data.json";
import root from "../../assets/root.svg";
import automationAnimation from "../../animations/automationAnimation/data";
import uxAnimation from "../../animations/uxAnimation/data";
import { CallToAction } from "../../components/ui/CallToAction";
import theme from "./../../components/ui/Theme";
import { useStyles } from "./styles";
import { Paper } from "@mui/material";

const CustomSoftware = ({ setValue, setSelectedItem }) => {
  const classes = useStyles();
  const matchesMD = useMediaQuery(theme.breakpoints.down("md"));
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));

  const documentsOptions = {
    loop: true,
    autoplay: true,
    animationData: documentsAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const scaleOptions = {
    loop: true,
    autoplay: true,
    animationData: scaleAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const automationOptions = {
    loop: true,
    autoplay: true,
    animationData: automationAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const uxOptions = {
    loop: true,
    autoplay: true,
    animationData: uxAnimation,
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
                onClick={() => setSelectedItem(3)}
              >
                <img src={backArrow} alt='to Website Development' />
              </IconButton>
            </Grid>
          </Paper>
          <Grid item className={classes.heading}>
            <Typography variant='h2' paragraph>
              Custom Software Development
            </Typography>
            <Typography variant='body1' paragraph>
              Wether we're replacing old software or inventing new solutions,
              Arc Development is here to help your business tackle technology.
            </Typography>
            <Typography variant='body1' paragraph>
              Using regular commercial software leaves you with a lot of stuff
              you don't need, without some of the stuff you do need, and
              ultimately controls the way you work. Without using any software
              at all you risk falling behind competitors and missing out on huge
              savings from increased efficiency.
            </Typography>
            <Typography variant='body1' paragraph>
              Our custom solutions are designed from the ground up with your
              needs, wants and goals at the core. This collaborative process
              produces finely tuned software that is much more effective at
              improving your workflow and reducing costs than generalized
              options.
            </Typography>
            <Typography variant='body1' paragraph>
              We create exactly what you want, exactly how you want it.
            </Typography>
          </Grid>
          <Paper sx={{ display: { xs: "none", md: "block" } }}>
            <Grid item>
              <IconButton
                component={Link}
                to='/mobileApps'
                onClick={() => setSelectedItem(2)}
              >
                <img src={forwardArrow} alt='to iOS/Android App Development' />
              </IconButton>
            </Grid>
          </Paper>
        </Grid>

        {/*--Icons--*/}
        <Grid
          item
          container
          justifyContent='center'
          alignItems='center'
          direction={matchesSM ? "column" : "row"}
          className={classes.iconContainer}
        >
          <Grid
            item
            container
            direction='column'
            alignItems='center'
            className={classes.iconWrapper}
          >
            <Grid item>
              <Typography variant='h4' gutterBottom>
                Save Energy
              </Typography>
            </Grid>
            <Grid item>
              <img src={lightbulb} alt='lightbulb' />
            </Grid>
          </Grid>
          <Grid
            item
            container
            direction='column'
            alignItems='center'
            className={classes.iconWrapper}
            style={{ margin: matchesSM ? "2rem 0" : undefined }}
          >
            <Grid item>
              <Typography variant='h4' gutterBottom>
                Save Money
              </Typography>
            </Grid>
            <Grid item>
              <img src={cash} alt='cash' />
            </Grid>
          </Grid>
          <Grid
            item
            container
            direction='column'
            alignItems='center'
            className={classes.iconWrapper}
          >
            <Grid item>
              <Typography variant='h4' gutterBottom>
                Save Time
              </Typography>
            </Grid>
            <Grid item>
              <img src={stopwatch} alt='stopwatch' />
            </Grid>
          </Grid>
        </Grid>

        {/*--Animation row 1--*/}
        <Grid
          item
          container
          justifyContent='space-around'
          alignItems={matchesMD ? "center" : undefined}
          direction={matchesMD ? "column" : "row"}
          className={classes.sectionContainer}
        >
          <Grid item style={{ marginBottom: matchesMD ? "4rem" : 0 }}>
            <Grid
              container
              direction={matchesSM ? "column" : "row"}
              alignItems='center'
              className={classes.animationContainer}
            >
              <Grid item className={classes.textContainer}>
                <Typography variant='h4' paragraph>
                  Digital Documents &amp; Data
                </Typography>
                <Typography variant='body1' paragraph>
                  Reduce Errors. Reduce Waste. Reduce Costs.
                </Typography>
                <Typography variant='body1' paragraph>
                  Billions are spent annually on the purchasing, printing and
                  distribution of paper. On top of the massive environmental
                  impact this has, it causes harm to your bottom line as well.
                </Typography>
                <Typography variant='body1' paragraph>
                  By utilizing digital forms and documents you can remove these
                  obsolete expenses, accelerate your communication and help the
                  Earth.
                </Typography>
              </Grid>
              <Grid
                item
                className={`${classes.animation} ${classes.animationMarginLeft}`}
              >
                <Lottie options={documentsOptions} />
              </Grid>
            </Grid>
          </Grid>
          <Grid item>
            <Grid
              container
              direction={matchesSM ? "column-reverse" : "row"}
              alignItems='center'
              className={classes.animationContainer}
            >
              <Grid
                item
                className={`${classes.animation} ${classes.animationMarginRight}`}
              >
                <Lottie options={scaleOptions} />
              </Grid>
              <Grid item className={classes.textContainer}>
                <Typography variant='h4' paragraph>
                  Scale
                </Typography>
                <Typography variant='body1' paragraph>
                  Wether you're a large brand, just getting started, or taking
                  off right now, our application architecture ensures pain-free
                  growth and reliabiilty.
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>

        {/*--Root-Cause Analysis--*/}
        <Grid
          item
          container
          direction='column'
          alignItems='center'
          className={classes.sectionContainer}
        >
          <Grid item>
            <img
              src={root}
              alt='tree with roots extending out'
              height={matchesSM ? "250rem" : "400rem"}
              width={matchesSM ? "250rem" : "400rem"}
            />
          </Grid>
          <Grid item className={classes.rootTextContainer}>
            <Typography variant='h4' paragraph>
              Root-Cause Analysis
            </Typography>
            <Typography variant='body1' paragraph>
              Many problems are merely symproms of larger, underlying issues.
            </Typography>
            <Typography variant='body1' paragraph>
              We can help you thoroughly examine all areas of your business to
              develop a holistic plan for the most effective implementation of
              technology.
            </Typography>
          </Grid>
        </Grid>

        {/*--Animation row 2--*/}
        <Grid
          item
          container
          alignItems={matchesMD ? "center" : undefined}
          direction={matchesMD ? "column" : "row"}
          justifyContent='space-around'
          className={classes.sectionContainer}
        >
          <Grid item style={{ marginBottom: matchesMD ? "4rem" : 0 }}>
            <Grid
              container
              direction={matchesSM ? "column" : "row"}
              alignItems='center'
              className={classes.animationContainer}
            >
              <Grid item className={classes.textContainer}>
                <Typography variant='h4' paragraph>
                  Automation
                </Typography>
                <Typography variant='body1' paragraph>
                  Why waste time when you don't have to?
                </Typography>
                <Typography variant='body1' paragraph>
                  We can help you identify processees with time or event based
                  actions which can now easily be automated.
                </Typography>
                <Typography variant='body1' paragraph>
                  Increasing efficiency increases profits, leaving you more time
                  to focus on your business, not busywork.
                </Typography>
              </Grid>
              <Grid
                item
                className={`${classes.animation} ${classes.animationMarginLeft}`}
              >
                <Lottie options={automationOptions} />
              </Grid>
            </Grid>
          </Grid>
          <Grid item>
            <Grid
              container
              direction={matchesSM ? "column-reverse" : "row"}
              alignItems='center'
              className={classes.animationContainer}
            >
              <Grid
                item
                className={`${classes.animation} ${classes.animationMarginRight}`}
                style={{ maxWidth: "8rem" }}
              >
                <Lottie options={uxOptions} />
              </Grid>
              <Grid item className={classes.textContainer}>
                <Typography variant='h4' paragraph>
                  UserExperience Design
                </Typography>
                <Typography variant='body1' paragraph>
                  A good design that isn't usable isn't a good design.
                </Typography>
                <Typography variant='body1' paragraph>
                  So why are so many pieces of software complicated, confusing
                  and frustrating?
                </Typography>
                <Typography variant='body1' paragraph>
                  By prioritizing users and the real ways they interact with
                  technology we're able to develop unique, personable
                  experiences that solve problems rather than create new ones.
                </Typography>
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

export default CustomSoftware;
