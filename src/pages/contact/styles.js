import { makeStyles } from "@mui/styles";
import theme from "../../components/ui/Theme";

import background from "../../assets/background.jpg";

export const useStyles = makeStyles(() => ({
  mainContainer: {
    padding: "4rem 4rem 2rem",
    [theme.breakpoints.down("md")]: {
      padding: "3rem 1rem 3rem",
    },
    [theme.breakpoints.down("xs")]: {
      padding: "3rem .5rem 3rem",
    },
  },
  titleContainer: {
    margin: "0.6rem 0 0.2rem 0",
  },
  contactsContainer: {
    margin: "0.2rem 0",
  },
  sectionContainer: {
    margin: "1.0rem 0",
  },
  buttonContainer: {
    margin: "0.1rem 0",
  },
  icon: {
    verticalAlign: "bottom",
    marginRight: "0.5rem",
    color: theme.palette.primary.main,
  },
  link: {
    textDecoration: "none",
    color: "inherit",
    "&:hover": {
      color: theme.palette.primary.light,
      textDecoration: "underline",
    },
    [theme.breakpoints.down("md")]: {
      textDecoration: "underline",
    },
  },
  containedButton: {
    width: 145,
    height: 45,
    borderRadius: 50,
    backgroundColor: theme.palette.common.orange,
    color: theme.palette.common.grey,
    fontFamily: "Pacifico",
    textTransform: "none",
    fontSize: "1rem",
    "&:hover": {
      backgroundColor: theme.palette.secondary.light,
    },

    "& .MuiButton-endIcon": {
      color: "#fff",
      marginLeft: 20,
    },
  },
  background: {
    backgroundImage: `url(${background})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    height: "60rem",
  },
}));
