import React from "react";
import { Link } from "react-router-dom";

import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import useMediaQuery from "@mui/material/useMediaQuery";
import IconButton from "@mui/material/IconButton";

import backArrow from "../../assets/backArrow.svg";
import forwardArrow from "../../assets/forwardArrow.svg";
import analytics from "../../assets/analytics.svg";
import ecommerce from "../../assets/ecommerce.svg";
import outreach from "../../assets/outreach.svg";
import seo from "../../assets/seo.svg";


import { CallToAction } from "../../components/ui/CallToAction";
import theme from "./../../components/ui/Theme";
import { useStyles } from "./styles";
import { Paper } from "@mui/material";

const Websites = ({ setValue, setSelectedItem }) => {
  const classes = useStyles();

  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));

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
                to='/mobileapps'
                sx={{ backgroundColor: "transparent" }}
                onClick={() => setSelectedItem(2)}
              >
                <img src={backArrow} alt='to Mobile Apps Development' />
              </IconButton>
            </Grid>
          </Paper>
          <Grid item className={classes.heading}>
            <Typography variant='h2' paragraph>
              Website Development
            </Typography>
            <Typography variant='body1' paragraph>
              Having a website is a necessity in today's world. They give you
              one central, public location to let people know who you are, what
              you do and why you're the best at it.
            </Typography>
            <Typography variant='body1' paragraph>
              From simply having you hours posted to having a full-fledged
              online store, making yourself as accessible as possible to users
              online drives growth and enables you to reach new customers.
            </Typography>
          </Grid>
          <Paper sx={{ display: { xs: "none", md: "block" } }}>
            <Grid item>
              <IconButton
                component={Link}
                to='/customsoftware'
                onClick={() => setSelectedItem(1)}
              >
                <img src={forwardArrow} alt='to Custom Software Development' />
              </IconButton>
            </Grid>
          </Paper>
        </Grid>

        {/*--Text row 1--*/}
        <Grid
          item
          container
          alignItems='center'
          direction={matchesSM ? "column" : "row"}
          justifyContent={matchesSM ? "center" : "flex-start"}
          className={classes.sectionContainer}
        >
          <Grid item className={classes.textContainer}>
            <Typography variant='h4' paragraph>
              Analytics
            </Typography>
            <Typography variant='body1' paragraph>
              Knowledge is power, and data is 21st century gold.
            </Typography>
            <Typography variant='body1' paragraph>
              Analyzing data can reveal hidden patterns and trends in your
              business, empowering you to make smarter decisions with measurable
              effects.
            </Typography>
          </Grid>
          <Grid item>
            <img
              className={classes.image}
              src={analytics}
              alt="graph with magnifying glass revealing 1's and 0's"
            />
          </Grid>
        </Grid>

        {/*--Text row 2--*/}
        <Grid
          item
          container
          direction={matchesSM ? "column" : "row"}
          justifyContent={matchesSM ? "center" : "flex-end"}
          alignItems='center'
          className={classes.sectionContainer}
        >
          <Grid item className={classes.textContainer}>
            <Typography variant='h4' paragraph>
              E-Commerce
            </Typography>
            <Typography variant='body1' paragraph>
              It's no secret that people like to shop online.
            </Typography>
            <Typography variant='body1' paragraph>
              In 2017, over{" "}
              <span className={classes.textSpan}>$2.3 trillion</span> were spent
              on e-commerce stores, and it's time for your slice of that pie.
            </Typography>
          </Grid>
          <Grid item>
            <img
              className={classes.image}
              src={ecommerce}
              alt='world outline made of dollar signs'
            />
          </Grid>
        </Grid>

        {/*--Text row 3--*/}
        <Grid
          item
          container
          direction={matchesSM ? "column" : "row"}
          alignItems='center'
          justifyContent={matchesSM ? "center" : "flex-start"}
          className={classes.sectionContainer}
        >
          <Grid item className={classes.textContainer}>
            <Typography variant='h4' paragraph>
              Outreach
            </Typography>
            <Typography variant='body1' paragraph>
              Draw people in with a dazzling website.
            </Typography>
            <Typography variant='body1' paragraph>
              Showing off your products online is a great way to help customers
              decide what's right for them before visiting in person.
            </Typography>
          </Grid>
          <Grid item>
            <img className={classes.image} src={outreach} alt='megaphone' />
          </Grid>
        </Grid>

        {/*--Text row 4--*/}
        <Grid
          item
          container
          direction={matchesSM ? "column" : "row"}
          justifyContent={matchesSM ? "center" : "flex-end"}
          alignItems='center'
          className={classes.sectionContainer}
        >
          <Grid item className={classes.textContainer}>
            <Typography variant='h4' paragraph>
              Search Engine Optimization
            </Typography>
            <Typography variant='body1' paragraph>
              How often have you been to the second page of Google results?
            </Typography>
            <Typography variant='body1' paragraph>
              If you are like us, probably never.
            </Typography>
          </Grid>
          <Grid item>
            <img
              className={classes.image}
              src={seo}
              alt="website standing on winner's podium"
            />
          </Grid>
        </Grid>
      </Grid>

      {/*--Call to Action--*/}
      <CallToAction setValue={setValue} setSelectedItem={setSelectedItem} />
    </Grid>
  );
};

export default Websites;
