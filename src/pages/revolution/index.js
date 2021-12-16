import React from "react";

import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import useMediaQuery from "@mui/material/useMediaQuery";

import vision from "../../assets/vision.svg";
import technologyAnimation from "../../animations/technologyAnimation/data.json";
import consultation from "../../assets/consultationIcon.svg";
import mockup from "../../assets/mockupIcon.svg";
import review from "../../assets/reviewIcon.svg";
import design from "../../assets/designIcon.svg";
import build from "../../assets/buildIcon.svg";
import launch from "../../assets/launchIcon.svg";
import maintain from "../../assets/maintainIcon.svg";
import iterate from "../../assets/iterateIcon.svg";

import { CallToAction } from "../../components/ui/CallToAction";
import { useStyles } from "./styles";
import theme from "../../components/ui/Theme";
import Lottie from "react-lottie";
import {
  BuildParagraphs,
  ConsulationParagraphs,
  DesignParagraphs,
  IterateParagraphs,
  LaunchParagraphs,
  MaintainParagraphs,
  MockupParagraphs,
  ReviewParagraphs,
  ReviewParagraphs_,
  TechnologyParagraphs,
  VisionParagrahphs,
} from "./utils";

export const Revolution = () => {
  const classes = useStyles();

  const matchesMD = useMediaQuery(theme.breakpoints.down("md"));

  const technologyOptions = {
    loop: true,
    autoplay: false,
    animationData: technologyAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const visionImage = (
    <Grid item lg style={{ textAlign: "center" }}>
      <img
        src={vision}
        alt='mountain through binoculars'
        className={classes.image}
      />
    </Grid>
  );
  return (
    <Grid container direction='column'>
      <Typography
        variant='h2'
        className={classes.sectionContainer}
        style={{ fontFamily: "pacifico", fontWeight: 500 }}
      >
        The Revolution
      </Typography>

      {/*--Vision--*/}
      <Grid
        item
        container
        alignItems='center'
        justifyContent={matchesMD ? "center" : undefined}
        className={classes.sectionContainer}
      >
        {matchesMD ? null : visionImage}
        <Grid item className={classes.textContainer} lg>
          <Typography variant='h4' paragraph>
            Vision
          </Typography>
          {VisionParagrahphs.map((paragraph, index) => (
            <Typography key={index} variant='body1' paragraph>
              {paragraph}
            </Typography>
          ))}
        </Grid>
        {matchesMD ? visionImage : null}
      </Grid>

      {/*--Technology--*/}
      <Grid
        item
        container
        alignItems='center'
        justifyContent={matchesMD ? "center" : undefined}
        className={classes.sectionContainer}
      >
        <Grid item lg className={classes.textContainer}>
          <Typography variant='h4' paragraph>
            Technology
          </Typography>
          {TechnologyParagraphs.map((paragraph, index) => (
            <Typography key={index} variant='body1' paragraph>
              {paragraph}
            </Typography>
          ))}
        </Grid>
        <Grid item lg>
          <Lottie options={technologyOptions} style={{ maxWidth: "20rem" }} />
        </Grid>
      </Grid>

      {/*--Process--*/}
      <Grid item container justifyContent='center'>
        <Grid item className={classes.sectionContainer}>
          <Typography variant='h4' paragraph>
            Process
          </Typography>
        </Grid>

        {/*--Consultation--*/}
        <Grid
          item
          container
          direction={matchesMD ? "column" : "row"}
          alignItems={matchesMD ? "center" : undefined}
          justifyContent={matchesMD ? "space-around" : undefined}
          className={classes.processSection}
          style={{ backgroundColor: "#a2a2a1" }}
        >
          <Grid item lg className={classes.textContainer}>
            <Typography variant='h4' paragraph style={{ color: "#000" }}>
              Consultation
            </Typography>
            {ConsulationParagraphs.map((paragraph, index) => (
              <Typography
                key={index}
                variant='body1'
                paragraph
                className={classes.text}
              >
                {paragraph}
              </Typography>
            ))}
          </Grid>
          <Grid item lg className={classes.imageContainer}>
            <img
              src={consultation}
              alt='handshake'
              className={classes.imageProcess}
            />
          </Grid>
        </Grid>

        {/*--Mockup--*/}
        <Grid
          item
          container
          direction={matchesMD ? "column" : "row"}
          alignItems={matchesMD ? "center" : undefined}
          justifyContent={matchesMD ? "space-around" : undefined}
          className={classes.processSection}
          style={{ backgroundColor: "#ff7373" }}
        >
          <Grid item lg className={classes.textContainer}>
            <Typography variant='h4' paragraph style={{ color: "#000" }}>
              Mockup
            </Typography>
            {MockupParagraphs.map((paragraph, index) => (
              <Typography
                key={index}
                variant='body1'
                paragraph
                className={classes.text}
              >
                {paragraph}
              </Typography>
            ))}
          </Grid>
          <Grid item lg className={classes.imageContainer}>
            <img
              src={mockup}
              alt='basic website design outline'
              className={classes.imageProcess}
            />
          </Grid>
        </Grid>

        {/*--Review--*/}
        <Grid
          item
          container
          direction={matchesMD ? "column" : "row"}
          alignItems={matchesMD ? "center" : undefined}
          justifyContent={matchesMD ? "space-around" : undefined}
          className={classes.processSection}
          style={{ backgroundColor: "#2d903a" }}
        >
          <Grid item lg className={classes.textContainer}>
            <Typography variant='h4' paragraph style={{ color: "#000" }}>
              Review
            </Typography>
            {ReviewParagraphs.map((paragraph, index) => (
              <Typography
                key={index}
                variant='body1'
                paragraph
                className={classes.text}
              >
                {paragraph}
              </Typography>
            ))}
          </Grid>
          <Grid item lg className={classes.imageContainer}>
            <img
              src={review}
              alt='magnifying glass'
              className={classes.imageProcess}
            />
          </Grid>
        </Grid>

        {/*--Design--*/}
        <Grid
          item
          container
          direction={matchesMD ? "column" : "row"}
          alignItems={matchesMD ? "center" : undefined}
          justifyContent={matchesMD ? "space-around" : undefined}
          className={classes.processSection}
          style={{ backgroundColor: "#a67c52" }}
        >
          <Grid item lg className={classes.textContainer}>
            <Typography variant='h4' paragraph style={{ color: "#000" }}>
              Design
            </Typography>
            {DesignParagraphs.map((paragraph, index) => (
              <Typography
                key={index}
                variant='body1'
                paragraph
                className={classes.text}
              >
                {paragraph}
              </Typography>
            ))}
          </Grid>
          <Grid item lg className={classes.imageContainer}>
            <img
              src={design}
              alt='handshake'
              className={classes.imageProcess}
            />
          </Grid>
        </Grid>

        {/*--Review--*/}
        <Grid
          item
          container
          direction={matchesMD ? "column" : "row"}
          className={classes.processSection}
          alignItems={matchesMD ? "center" : undefined}
          justifyContent={matchesMD ? "space-around" : undefined}
          style={{ backgroundColor: "#2d903a" }}
        >
          <Grid item lg className={classes.textContainer}>
            <Typography variant='h4' paragraph style={{ color: "#000" }}>
              Review
            </Typography>
            {ReviewParagraphs_.map((paragraph, index) => (
              <Typography
                key={index}
                variant='body1'
                paragraph
                className={classes.text}
              >
                {paragraph}
              </Typography>
            ))}
          </Grid>
          <Grid item lg className={classes.imageContainer}>
            <img
              src={review}
              alt='magnifying glass'
              className={classes.imageProcess}
            />
          </Grid>
        </Grid>

        {/*--Build--*/}
        <Grid
          item
          container
          direction={matchesMD ? "column" : "row"}
          alignItems={matchesMD ? "center" : undefined}
          justifyContent={matchesMD ? "space-around" : undefined}
          className={classes.processSection}
          style={{ backgroundColor: "#df9b30" }}
        >
          <Grid item lg className={classes.textContainer}>
            <Typography variant='h4' paragraph style={{ color: "#000" }}>
              Build
            </Typography>
            {BuildParagraphs.map((paragraph, index) => (
              <Typography
                key={index}
                variant='body1'
                paragraph
                className={classes.text}
              >
                {paragraph}
              </Typography>
            ))}
          </Grid>
          <Grid item lg className={classes.imageContainer}>
            <img src={build} alt='handshake' className={classes.imageProcess} />
          </Grid>
        </Grid>

        {/*--Launch--*/}
        <Grid
          item
          container
          direction={matchesMD ? "column" : "row"}
          alignItems={matchesMD ? "center" : undefined}
          justifyContent={matchesMD ? "space-around" : undefined}
          className={classes.processSection}
          style={{ backgroundColor: "#c1272d" }}
        >
          <Grid item lg className={classes.textContainer}>
            <Typography variant='h4' paragraph style={{ color: "#000" }}>
              Launch
            </Typography>
            {LaunchParagraphs.map((paragraph, index) => (
              <Typography
                key={index}
                variant='body1'
                paragraph
                className={classes.text}
              >
                {paragraph}
              </Typography>
            ))}
          </Grid>
          <Grid item lg className={classes.imageContainer}>
            <img
              src={launch}
              alt='handshake'
              className={classes.imageProcess}
            />
          </Grid>
        </Grid>

        {/*--Maintain--*/}
        <Grid
          item
          container
          direction={matchesMD ? "column" : "row"}
          alignItems={matchesMD ? "center" : undefined}
          justifyContent={matchesMD ? "space-around" : undefined}
          className={classes.processSection}
          style={{ backgroundColor: "#8e45ce" }}
        >
          <Grid item lg className={classes.textContainer}>
            <Typography variant='h4' paragraph style={{ color: "#000" }}>
              Maintain
            </Typography>
            {MaintainParagraphs.map((paragraph, index) => (
              <Typography
                key={index}
                variant='body1'
                paragraph
                className={classes.text}
              >
                {paragraph}
              </Typography>
            ))}
          </Grid>
          <Grid item lg className={classes.imageContainer}>
            <img
              src={maintain}
              alt='handshake'
              className={classes.imageProcess}
            />
          </Grid>
        </Grid>

        {/*--Iterate--*/}
        <Grid
          item
          container
          direction={matchesMD ? "column" : "row"}
          alignItems={matchesMD ? "center" : undefined}
          justifyContent={matchesMD ? "space-around" : undefined}
          className={classes.processSection}
          style={{ backgroundColor: "#269acb" }}
        >
          <Grid item lg className={classes.textContainer}>
            <Typography variant='h4' paragraph style={{ color: "#000" }}>
              Iterate
            </Typography>
            {IterateParagraphs.map((paragraph, index) => (
              <Typography
                key={index}
                variant='body1'
                paragraph
                className={classes.text}
              >
                {paragraph}
              </Typography>
            ))}
          </Grid>
          <Grid item lg className={classes.imageContainer}>
            <img
              src={iterate}
              alt='handshake'
              className={classes.imageProcess}
            />
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        <CallToAction />
      </Grid>
    </Grid>
  );
};
