import React, { useState } from "react";

import Lottie from "react-lottie";
import { cloneDeep } from "lodash";

import { useStyles } from "./styles";
import theme from "../../components/ui/Theme";

import estimateAnimation from "../../animations/estimateAnimation/data.json";
import {
  Button,
  Grid,
  IconButton,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { defaultQuestions, softwareQuestions, websiteQuestions } from "./utils";

import backArrow from "../../assets/backArrow.svg";
import forwardArrow from "../../assets/forwardArrow.svg";
import backArrowDisabled from "../../assets/backArrowDisabled.svg";
import forwardArrowDisabled from "../../assets/forwardArrowDisabled.svg";
import { EstimateModal } from "./EstimateModal";

export const Estimate = () => {
  const classes = useStyles();
  const matchesMD = useMediaQuery(theme.breakpoints.down("md"));
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: estimateAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const [questions, setQuestions] = useState(defaultQuestions);
  const [openEstimate, setOpenEstimate] = useState(false);

  const [totalCost, setTotalCost] = useState(0);

  const [service, setService] = useState("");
  const [platforms, setPlatforms] = useState([]);
  const [features, setFeatures] = useState([]);
  const [customFeatures, setCustomFeatures] = useState([]);
  const [users, setUsers] = useState("");
  const [category, setCategory] = useState("");

  const onImageClick = (questionIndex, optionIndex) => {
    const newQuestions = cloneDeep(questions);

    const activeQuestion = newQuestions[questionIndex];
    const selectedOption = activeQuestion.options[optionIndex];
    const previouslySelected = activeQuestion.options.filter(
      (option) => option.selected
    );

    //* Check if multiple options can be selected at the same time
    if (activeQuestion.multiSelection) {
      selectedOption.selected = !selectedOption.selected;
    } else {
      if (previouslySelected[0]) {
        previouslySelected[0].selected = false;
      }
      selectedOption.selected = true;
    }

    //* Redirect to the right question set when one of the defaultQuestions is selected
    switch (selectedOption.type) {
      case "software":
        setQuestions(softwareQuestions);
        setService(selectedOption.title);
        break;
      case "website":
        setQuestions(websiteQuestions);
        setService(selectedOption.title);
        break;
      default:
        setQuestions(newQuestions);
    }
  };

  const saveSelectedOptions = () => {
    //* Array with all selected options. Eliminated any empty arrays resulting from non-selected options
    const selections = questions
      .map((question) => question.options.filter((option) => option.selected))
      .filter((question) => question.length > 0);

    let selectedPlatforms = [];
    selections.map((selection) =>
      selection
        .filter((selection) => selection.type === "platforms")
        .map((question) => selectedPlatforms.push(question.title))
    );

    let selectedFeatures = [];
    selections.map((selection) =>
      selection
        .filter((selection) => selection.type === "features")
        .map((question) => selectedFeatures.push(question.title))
    );

    let selectedCustomFeatures = [];
    selections.map((selection) =>
      selection
        .filter((selection) => selection.type === "customFeatures")
        .map((question) => selectedCustomFeatures.push(question.title))
    );

    let selectedCategory = [];
    selections.map((selection) =>
      selection
        .filter((selection) => selection.type === "category")
        .map((question) => selectedCategory.push(question.title))
    );

    setPlatforms(selectedPlatforms);
    setFeatures(selectedFeatures);
    setCustomFeatures(selectedCustomFeatures);
    setCategory(selectedCategory);
  };

  const nextQuestion = () => {
    const newQuestions = cloneDeep(questions);
    const activeQuestion = newQuestions.filter(
      (question) => question.active
    )[0];
    const activeIndex = activeQuestion.id;
    const nextIndex = activeIndex + 1;

    newQuestions[activeIndex] = { ...activeQuestion, active: false };
    newQuestions[nextIndex] = { ...newQuestions[nextIndex], active: true };

    setQuestions(newQuestions);
  };

  const previousQuestion = () => {
    const newQuestions = cloneDeep(questions);
    const activeQuestion = newQuestions.filter(
      (question) => question.active
    )[0];
    const activeIndex = activeQuestion.id;
    const nextIndex = activeIndex - 1;

    newQuestions[activeIndex] = { ...activeQuestion, active: false };
    newQuestions[nextIndex] = { ...newQuestions[nextIndex], active: true };

    setQuestions(newQuestions);
  };

  const disableNavigationPrevious = () => {
    const activeQuestion = questions.filter((question) => question.active)[0];

    if (activeQuestion.id === 0) {
      return true;
    } else {
      return false;
    }
  };

  const disableNavigationNext = () => {
    const activeQuestion = questions.filter((question) => question.active)[0];

    if (activeQuestion.id === questions.length - 1) {
      return true;
    } else {
      return false;
    }
  };

  const disableEstimateButton = () => {
    let disabled = false;

    //* EmptySelections will always consist of at least 1 item in the array, because of the first services question
    const selections = questions.map((question) =>
      question.options
        .filter((option) => option.selected)
        .map((option) => option.type)
    );

    const emptySelections = selections.filter(
      (selection) => selection.length === 0
    );

    const features = selections
      .map((selection) =>
        selection.filter((selection) => selection === "features")
      )
      .filter((selection) => selection.length > 0);

    if (questions.length === 1) {
      //* Default questions
      disabled = true;
    } else if (questions.length === 2) {
      //* Website questions
      if (emptySelections.length === 2) disabled = true;
    } else {
      //* Software questions
      if (features.length === 0) {
        disabled = true;
      } else if (emptySelections.length > 2 && features.length === 1) {
        disabled = true;
      } else if (emptySelections.length > 1 && features.length === 2) {
        disabled = true;
      }
    }
    return disabled;
  };

  const calculateCost = () => {
    let cost = 0;

    const selections = questions
      .map((question) => question.options.filter((option) => option.selected))
      .filter((question) => question.length > 0);

    selections.map((selection) =>
      selection.map((option) => (cost += option.cost))
    );

    //* Only runs if the current questions are the websiteQuestions
    if (questions.length > 2) {
      const multiplier = questions[5].options.filter(
        (option) => option.selected
      )[0];

      //* The multiplier was added to the cost previously. Now it has to be substracted and multiplied
      cost -= multiplier.cost;
      cost *= multiplier.cost;

      //* Get the number of users to show it in the EstimateModal
      setUsers(multiplier.title);
    }
    setTotalCost(cost);
  };

  return (
    <Grid container direction={matchesMD ? "column" : "row"}>
      {/* Animation */}
      <Grid
        item
        container
        direction='column'
        alignItems={matchesMD ? "center" : undefined}
        lg={5}
        className={classes.sectionContainer}
      >
        <Grid
          item
          container
          style={{ marginTop: matchesMD ? "2rem" : ".5rem" }}
        >
          <Typography variant='h2'>Estimate</Typography>
        </Grid>
        <Grid item className={classes.animation}>
          <Lottie options={defaultOptions} />
        </Grid>
      </Grid>

      {/* Cards */}
      <Grid
        item
        container
        direction='column'
        lg={7}
        className={classes.optionsContainer}
      >
        {questions
          .filter((question) => question.active)
          .map((question, index) => (
            <Grid item container direction='column' key={index}>
              <Grid item className={classes.optionsHeading}>
                <Typography variant='h4' gutterBottom>
                  {question.title}
                </Typography>
                <Typography variant='h6'>{question.subtitle}</Typography>
              </Grid>
              <Grid item container direction={matchesSM ? "column" : "row"}>
                {question.options.map((option, index) => (
                  <Grid key={index} item md className={classes.optionContainer}>
                    <IconButton
                      disableRipple
                      className={
                        option.selected
                          ? classes.activeImageButton
                          : classes.imageButton
                      }
                      onClick={() => onImageClick(question.id, option.id)}
                    >
                      <Grid
                        item
                        container
                        direction={matchesSM ? "row-reverse" : "column"}
                        justifyContent={matchesSM ? "space-evenly" : undefined}
                        alignItems='center'
                        className={classes.optionWrapper}
                      >
                        <Grid
                          item
                          container
                          direction='column'
                          xs={10}
                          md='auto'
                          justifyContent='center'
                          className={classes.optionHeading}
                        >
                          <Grid item>
                            <Typography
                              variant='h6'
                              style={{ fontWeight: 600, lineHeight: 1.7 }}
                            >
                              {option.title}
                            </Typography>
                          </Grid>
                          <Grid item>
                            <Typography variant='body1'>
                              {option.subtitle}
                            </Typography>
                          </Grid>
                        </Grid>
                        <Grid
                          item
                          container
                          xs={2}
                          md='auto'
                          justifyContent='center'
                        >
                          <img
                            src={option.icon}
                            alt={option.iconAlt}
                            className={classes.image}
                          />
                        </Grid>
                      </Grid>
                    </IconButton>
                  </Grid>
                ))}
              </Grid>
            </Grid>
          ))}
        <Grid
          item
          container
          alignItems='center'
          justifyContent='space-evenly'
          className={classes.buttonContainer}
        >
          <Grid item>
            <IconButton
              onClick={previousQuestion}
              disabled={disableNavigationPrevious()}
            >
              <img
                src={
                  disableNavigationPrevious() ? backArrowDisabled : backArrow
                }
                alt='previous question'
              />
            </IconButton>
          </Grid>
          <Grid item>
            <Button
              className={classes.estimateButton}
              variant='contained'
              disabled={disableEstimateButton()}
              onClick={() => {
                setOpenEstimate(true);
                calculateCost();
                saveSelectedOptions();
              }}
            >
              Get Estimate
            </Button>
          </Grid>
          <Grid item>
            <IconButton
              onClick={nextQuestion}
              disabled={disableNavigationNext()}
            >
              <img
                src={
                  disableNavigationNext() ? forwardArrowDisabled : forwardArrow
                }
                alt='next question'
              />
            </IconButton>
          </Grid>
        </Grid>
      </Grid>

      {/*--Estimate Modal--*/}
      <EstimateModal
        open={openEstimate}
        onClose={() => setOpenEstimate(false)}
        totalCost={totalCost}
        service={service}
        platforms={platforms}
        features={features}
        customFeatures={customFeatures}
        users={users}
        category={category}
        resetValues={() => setQuestions(defaultQuestions)}
      />
    </Grid>
  );
};
