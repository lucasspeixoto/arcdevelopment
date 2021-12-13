import { Button } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";
import { Link } from "react-router-dom";
import { ButtonArrow } from "./ButtonArrow";
import theme from "./Theme";

const useStyles = makeStyles(() => ({
  small: {
    ...theme.typography.learnButton,
    fontSize: "0.9rem",
    borderRadius: 50,
    borderWidth: 2,
    height: "40px",
    margin: "1rem 0",
  },
  big: {
    ...theme.typography.learnButton,
    fontSize: "0.9rem",
    borderRadius: 50,
    borderWidth: 2,
    height: "45px",
    width: 145,
  },
}));

export const LearnMoreButton = ({
  type,
  variant,
  marginRight,
  text,
  width,
  height,
  fill,
  color,
  changeTabValue,
  route

}) => {
  const classes = useStyles();
  const className = type === "small" ? classes.small : classes.big;

  return (
    <Button
      component={Link}
      to={route ? route : '/therevolution'}
      variant={variant}
      className={className}
      style={{ color: color, borderColor: color }}
      onClick={changeTabValue}
    >
      <span style={{ marginRight: marginRight }}>{text}</span>
      <ButtonArrow width={width} height={height} fill={fill}></ButtonArrow>
    </Button>
  );
};
