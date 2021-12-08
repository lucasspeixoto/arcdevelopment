import { makeStyles } from "@mui/styles";

import { styled } from "@mui/material/styles";
import theme from "./../Theme";
import { Grid } from "@mui/material";

export const useStyles = makeStyles(() => ({
  mainContainer: {
    position: "absolute",
  },
  link: {
    color: theme.palette.common.white,
    fontFamily: "Arial",
    fontSize: "1rem",
    fontWeight: "bold",
    textDecoration: "none",
  },
  gridItem: {
    margin: "3em",
  },
}));

export const SFooter = styled(`footer`)(({ theme }) => ({
  backgroundColor: theme.palette.common.blue,
  width: "100%",
  zIndex: 1302,
  position: "relative",
}));

export const Adornment = styled(`img`)(({ theme }) => ({
  width: "25rem",
  verticalAlign: "bottom",
  [theme.breakpoints.down("md")]: {
    width: "21rem",
  },
  [theme.breakpoints.down("xs")]: {
    width: "15rem",
  },
}));

export const SocialMediaGrid = styled((props) => <Grid {...props} />)(
  ({ theme }) => ({
    position: "absolute",
    marginTop: "-6em",
    right: "1.5em",
    [theme.breakpoints.down("xs")]: {
      right: "0.9em",
    },
  })
);

export const SocialLogo = styled(`img`)(({ theme }) => ({
  color: "white",
  height: "3rem",
  [theme.breakpoints.down("md")]: {
    width: "2.5rem",
  },
  [theme.breakpoints.down("xs")]: {
    width: "2rem",
  },
}));
