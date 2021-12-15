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

    "& .MuiPaper-root": {
      boxShadow: "none",
    },
  },
  headingContainer: {
    marginBottom: "3rem",
    [theme.breakpoints.down("sm")]: {
      marginBottom: "2rem",
    },
    [theme.breakpoints.down("xs")]: {
      marginBottom: "1rem",
    },
  },
  heading: {
    maxWidth: "40rem",
    margin: "0 3rem",
    [theme.breakpoints.down("sm")]: {
      margin: 0,
    },
  },
  iconContainer: {
    margin: "7rem 0",
    [theme.breakpoints.down("md")]: {
      margin: "6rem 0",
    },
    [theme.breakpoints.down("sm")]: {
      margin: "4rem 0",
    },
    [theme.breakpoints.down("xs")]: {
      margin: "3rem 0",
    },
  },
  iconWrapper: {
    height: "100%",
    maxWidth: "22rem",
    [theme.breakpoints.down("md")]: {
      maxWidth: "16rem",
    },
  },
  animationContainer: {
    height: "100%",
  },
  textContainer: {
    maxWidth: "20rem",
    height: "100%",
    [theme.breakpoints.down("md")]: {
      maxWidth: "28rem",
    },
    [theme.breakpoints.down("sm")]: {
      maxWidth: "40rem",
    },
  },
  animation: {
    width: "100%",
    maxWidth: "14rem",
  },
  animationMarginLeft: {
    marginLeft: "1.5rem",
    [theme.breakpoints.down("sm")]: {
      marginLeft: 0,
    },
  },
  animationMarginRight: {
    marginRight: "1.5rem",
    [theme.breakpoints.down("sm")]: {
      marginLeft: 0,
    },
  },
  sectionContainer: {
    margin: "4rem 0",
    alignItems: "center",
    [theme.breakpoints.down("md")]: {
      margin: "3rem 0",
    },
    [theme.breakpoints.down("sm")]: {
      margin: "2rem 0",
    },
  },
  rootTextContainer: {
    maxWidth: "25rem",
    textAlign: "center",
    marginTop: "1rem",
    [theme.breakpoints.down("sm")]: {
      textAlign: "left",
      maxWidth: "40rem",
    },
  },
}));
