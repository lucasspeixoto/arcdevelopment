import React from "react";
import theme from "./Theme";

import { Button } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(() => ({
  estimate: {
    fontFamily: "Pacifico",
    fontSize: "1rem",
    textTransform: "none",
    color: "#5c5c5c",
    borderRadius: "50px",
    height: "45px",
    backgroundColor: theme.palette.common.orange,
    "&:hover": {
      backgroundColor: theme.palette.secondary.light,
    },
  },
}));

export const FreeEstimateButton = ({ text, style, className }) => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Button
        variant='contained'
        className={`${className} ${classes.estimate}`}
        style={style}
      >
        {text}
      </Button>
    </React.Fragment>
  );
};
