import { Button } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";
import { ButtonArrow } from "./ButtonArrow";
import theme from "./Theme";

const useStyles = makeStyles(() => ({
  small: {
    ...theme.typography.learnButton,
    fontSize: "0.9rem",
    borderRadius: 50,
    borderWidth: 2,
    height: 40,
    margin: "1rem 0",
  },
  big: {
    ...theme.typography.learnButton,
    fontSize: "0.9rem",
    borderRadius: 50,
    borderWidth: 2,
    height: 45,
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
}) => {
  const classes = useStyles();
  const className = type === "small" ? classes.small : classes.big;

  return (
    <React.Fragment>
      <Button
        variant={variant}
        className={className}
        style={{ color: color, borderColor: color }}
      >
        <span style={{ marginRight: marginRight }}>{text}</span>
        <ButtonArrow width={width} height={height} fill={fill}></ButtonArrow>
      </Button>
    </React.Fragment>
  );
};
