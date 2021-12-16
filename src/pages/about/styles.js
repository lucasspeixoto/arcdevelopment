import { makeStyles } from "@mui/styles";
import theme from "../../components/ui/Theme";

export const useStyles = makeStyles(() => ({
  sectionContainer: {
    padding: "3rem 4rem",
    [theme.breakpoints.down("sm")]: {
      padding: "2rem 2rem",
    },
    [theme.breakpoints.down("xs")]: {
      padding: "2rem 1rem",
    },
  },
  headingText: {
    maxWidth: "60rem",
    textAlign: "center",
    fontSize: "1.25rem",
    fontWeight: 600,
    fontStyle: "italic",
  },
  historyText: {
    maxWidth: "35rem",
    [theme.breakpoints.down("md")]: {
      maxWidth: "55rem",
    },
  },
  historyImage: {
    [theme.breakpoints.down("md")]: {
      maxWidth: "20rem",
    },
    [theme.breakpoints.down("xs")]: {
      maxWidth: "15rem",
    },
  },
  textAlignCenter: {
    textAlign: "center",
  },
  avatar: {
    width: "20rem",
    height: "20rem",
    [theme.breakpoints.down("xs")]: {
      width: "15rem",
      height: "15rem",
    },
  },
  teamLastRow: {
    margin: "3rem 0",
  },
  teamText: {
    margin: "0 1rem",
    [theme.breakpoints.down("md")]: {
      margin: 0,
    },
  },
  teamImage: {
    [theme.breakpoints.down("sm")]: {
      maxWidth: "20rem",
    },
    [theme.breakpoints.down("xs")]: {
      maxWidth: "15rem",
    },
  },
}));
