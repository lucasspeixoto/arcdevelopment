import { makeStyles } from "@mui/styles";
import theme from "../../components/ui/Theme";

export const useStyles = makeStyles(() => ({
  mainContainer: {
    padding: "4rem 4rem 8rem",
    [theme.breakpoints.down("sm")]: {
      padding: "3rem 2rem 6rem",
    },
    [theme.breakpoints.down("xs")]: {
      padding: "2rem 1rem 4rem",
    },
    "& .MuiTypography-h2": {
      fontFamily: "Raleway",
      fontWeight: "700",
      fontSize: "2.5rem",
      color: theme.palette.common.blue,
      lineHeight: 1.5,
    },
    "& .MuiTypography-h3": {
      fontFamily: "Pacifico",
      fontWeight: "700",
      fontSize: "2.5rem",
      color: theme.palette.common.blue,
    },
    "& .MuiTypography-h4": {
      fontFamily: "Raleway",
      fontWeight: "700",
      fontSize: "1.75rem",
      color: theme.palette.common.blue,
      lineHeight: 1.5,
      marginBottom: 10,
    },
    "& .MuiTypography-subtitle1": {
      fontWeight: "300",
      fontSize: "1.2rem",
      color: theme.palette.common.grey,
    },
    "& .MuiTypography-subtitle2": {
      fontWeight: "300",
      fontSize: "1.25rem",
      color: theme.palette.common.white,
    },
    "& .MuiTypography-body1": {
      color: theme.palette.common.grey,
      fontWeight: "300",
      fontSize: "1rem",
    },
    "& .MuiPaper-root": {
      boxShadow: "none",
    },
  },
  headingContainer: {
    marginBottom: "5rem",
    [theme.breakpoints.down("sm")]: {
      marginBottom: "3rem",
    },
    [theme.breakpoints.down("xs")]: {
      marginBottom: "2rem",
    },
  },
  heading: {
    maxWidth: "40rem",
    margin: "0 3rem",
    [theme.breakpoints.down("sm")]: {
      margin: 0,
    },
  },
  sectionContainer: {
    margin: "3rem 0",

    [theme.breakpoints.down("sm")]: {
      margin: "2rem 0",
    },
  },
  textContainer: {
    maxWidth: "20rem",
    [theme.breakpoints.down("sm")]: {
      maxWidth: "40rem",
    },
  },
  animation: {
    maxWidth: "12rem",
  },

  iconContainer: {
    textAlign: "center",
    margin: "4rem 0",
    [theme.breakpoints.down("md")]: {
      margin: "3rem 0",
    },
    [theme.breakpoints.down("sm")]: {
      margin: "2rem 0",
    },
  },
  iconWrapper: {
    margin: "0 4rem",
    [theme.breakpoints.down("md")]: {
      margin: "3rem 0",
    },
  },
  icon: {
    maxWidth: "10rem",
  },
  icon2: {
    maxWidth: "20rem",
  },
}));
