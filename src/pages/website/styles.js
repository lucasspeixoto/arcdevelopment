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
    margin: "2rem 0",
    [theme.breakpoints.down("sm")]: {
      margin: "1.5rem 0",
    },
  },
  textContainer: {
    maxWidth: "25rem",
    [theme.breakpoints.down("sm")]: {
      maxWidth: "40rem",
    },
  },
  textSpan: {
    fontWeight: "bold",
    fontStyle: "italic",
  },
  image: {
    width: "12rem",
    marginLeft: "1rem",
    [theme.breakpoints.down("sm")]: {
      marginLeft: 0,
      marginTop: "0.5rem",
    },
  },
}));
