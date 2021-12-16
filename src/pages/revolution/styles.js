import { makeStyles } from "@mui/styles";
import theme from "../../components/ui/Theme";

export const useStyles = makeStyles(() => ({
  image: {
    maxWidth: "36rem",
    marginRight: "1rem",

    [theme.breakpoints.down("md")]: {
      marginRight: 0,
      marginTop: "1rem",
    },
    [theme.breakpoints.down("sm")]: {
      maxWidth: "30rem",
    },
    [theme.breakpoints.down("xs")]: {
      maxWidth: "20rem",
    },
  },

  sectionContainer: {
    padding: "3rem 4rem",
    [theme.breakpoints.down("sm")]: {
      padding: "2rem 2rem",
    },
    [theme.breakpoints.down("xs")]: {
      padding: "2rem 1rem",
    },
  },
  processSection: {
    padding: "3rem 4rem",
    height: "45rem",
    [theme.breakpoints.down("md")]: {
      height: "50rem",
    },
    [theme.breakpoints.down("sm")]: {
      padding: "2rem 2rem",
      height: "50rem",
    },
    [theme.breakpoints.down("xs")]: {
      padding: "2rem 1rem",
      height: "60rem",
    },
  },
  textContainer: {
    maxWidth: "35rem",
    [theme.breakpoints.down("md")]: {
      maxWidth: "45rem",
    },
  },
  imageContainer: {
    textAlign: "center",
    alignSelf: "center",
  },
  imageProcess: {
    maxHeight: "25rem",
    maxWidth: "40rem",
    [theme.breakpoints.down("md")]: {
      maxHeight: "15rem",
      maxWidth: "25rem",
    },
    [theme.breakpoints.down("sm")]: {
      maxHeight: "10rem",
      maxWidth: "15rem",
    },
  },
  text: {
    color: "#fff",
  },
}));
