import { makeStyles } from "@mui/styles";
import theme from "../../components/ui/Theme";

export const useStyles = makeStyles(() => ({
  sectionContainer: {
    padding: "5rem 1rem 6rem",
    [theme.breakpoints.down("md")]: {
      padding: "2rem 1rem 0",
    },
    [theme.breakpoints.down("sm")]: {
      padding: "2rem 1rem 0",
    },
    [theme.breakpoints.down("xs")]: {
      padding: "2rem 0.5rem 0",
    },
  },
  animation: {
    maxWidth: "50rem",
    marginTop: "4rem",
    [theme.breakpoints.down("md")]: {
      maxWidth: "40rem",
      marginTop: "2rem",
    },
    [theme.breakpoints.down("sm")]: {
      maxWidth: "30rem",
      marginTop: 0,
    },
  },
  optionsContainer: {
    padding: "3rem 1rem 6rem",
    textAlign: "center",
    [theme.breakpoints.down("md")]: {
      padding: "2rem 1rem 5rem",
    },
    [theme.breakpoints.down("xs")]: {
      padding: "2rem 0.5rem 5rem",
    },
  },
  optionsHeading: {
    margin: "4rem 0 3rem",
    // minHeight so that it has space to rearrange at smaller screen sizes
    minHeight: "5rem",
    [theme.breakpoints.down("md")]: {
      margin: "0 0 2rem",
    },
  },
  optionContainer: {
    padding: " 0.1rem",
  },
  optionWrapper: {
    height: "15.5rem",
    [theme.breakpoints.down("sm")]: {
      height: "6rem",
    },
    [theme.breakpoints.down("xs")]: {
      height: "5rem",
    },
  },
  optionHeading: {
    maxWidth: "13rem",
    marginBottom: "1rem",
    [theme.breakpoints.down("sm")]: {
      marginBottom: 0,
    },
  },
  image: {
    height: "9rem",
    [theme.breakpoints.down("sm")]: {
      height: "4rem",
    },
    [theme.breakpoints.down("xs")]: {
      height: "3rem",
    },
  },
  imageButton: {
    border: `1px solid ${theme.palette.primary.main}`,
    borderRadius: 10,
    width: "14.5rem",
    [theme.breakpoints.down("sm")]: {
      width: "30rem",
    },
    [theme.breakpoints.down("xs")]: {
      width: "100%",
    },
  },
  activeImageButton: {
    width: "14.5rem",
    border: `1px solid ${theme.palette.primary.main}`,
    borderRadius: 10,
    backgroundColor: theme.palette.secondary.main,
    "&:hover": {
      backgroundColor: theme.palette.secondary.light,
    },
    "@media (hover:none)": {
      backgroundColor: `${theme.palette.secondary.main} !important`,
    },
    [theme.breakpoints.down("sm")]: {
      width: "30rem",
    },
    [theme.breakpoints.down("xs")]: {
      width: "100%",
    },
  },
  buttonContainer: {
    marginTop: "6rem",
    [theme.breakpoints.down("sm")]: {
      marginTop: "4rem",
    },
    [theme.breakpoints.down("xs")]: {
      marginTop: "2rem",
    },
  },
  estimateButton: {
    fontFamily: "Pacifico",
    fontSize: "1rem",
    textTransform: "none",
    color: theme.palette.common.grey,
    borderRadius: "50px",
    height: "40px",
    backgroundColor: theme.palette.common.orange,
    "&:hover": {
      backgroundColor: theme.palette.secondary.light,
    },
  },
}));
