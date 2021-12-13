import React from "react";
import theme from "./Theme";

import { Button } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Link } from "react-router-dom";

const useStyles = makeStyles(() => ({
  estimate: {
    fontFamily: "Pacifico",
    fontSize: "1rem",
    textTransform: "none",
    color: "#5c5c5c",
    borderRadius: "50px",
    height: "40px",
    backgroundColor: theme.palette.common.orange,
    "&:hover": {
      backgroundColor: theme.palette.secondary.light,
    },
  },
}));

export const FreeEstimateButton = ({ text, style, className, changeTabValue }) => {
  const classes = useStyles();
  return (
    <Button
      component={Link}
      to='/estimate'
      variant='contained'
      className={`${className} ${classes.estimate}`}
      style={style}
      onClick={() => changeTabValue()}
    >
      {text}
    </Button>
  );
};
