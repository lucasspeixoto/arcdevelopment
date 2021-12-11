import { makeStyles } from "@mui/styles";
import theme from "../ui/Theme";

import revolutionBackground from "../../assets/repeatingBackground.svg";
import infoBackground from "../../assets/infoBackground.svg";

export const useStyles = makeStyles(() => ({
  mainContainer: {
    marginTop: "3em",
   
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
  },
  animation: {
    marginLeft: "5%",
    marginTop: "2rem",
    maxWidth: "50rem",
    minWidth: "22rem",
    width: "100%",

    [theme.breakpoints.down("sm")]: {
      maxWidth: "30rem",
    },
    [theme.breakpoints.down("xs")]: {
      marginLeft: 0,
    },
  },
  learnButton: {
    ...theme.typography.learnButton,
    fontSize: "0.9rem",
    borderRadius: 50,
    borderWidth: 2,
    height: 40,
    margin: "1rem 0",
  },
  buttonsContainer: {
    marginTop: "1em",
    alignItems: "center",
  },
  heroTextContainer: {
    minWidth: "22rem",
    [theme.breakpoints.down("xs")]: {
      padding: "0 0.5rem",
    },
  },
  heroEstimateButton: {
    width: 145,
    marginRight: "3rem",
    [theme.breakpoints.down("md")]: {
      marginRight: "1.5rem",
    },
  },
  celebration: {
    fontFamily: "Pacifico",
    color: theme.palette.common.orange,
  },

  icon: {
    width: "12rem",
    marginLeft: "2em",
    [theme.breakpoints.down("xs")]: {
      marginLeft: 0,
      width: "7rem",
    },
  },
  serviceContainer: {
    margin: "2rem 0",
    padding: "0 4rem",
    [theme.breakpoints.down("sm")]: {
      margin: "4rem 0",
    },
    [theme.breakpoints.down("xs")]: {
      padding: "0 1.5rem",
      margin: "5rem 0",
    },
  },
  servicesItemContainer: {
    marginBottom: "6rem",
    [theme.breakpoints.down("sm")]: {
      marginBottom: "5rem",
    },
    [theme.breakpoints.down("xs")]: {
      marginBottom: "4rem",
    },
  },
  serviceHeader: {
    marginBottom: ".5rem",
  },
  servicesSubtitle: {
    marginBottom: ".5em",
  },
  mobileContainer: {
    margin: "10rem 0",
    padding: "0 2rem",
    [theme.breakpoints.down("sm")]: {
      margin: "8rem 0",
    },
    [theme.breakpoints.down("xs")]: {
      padding: "0 1.5rem",
      margin: "6rem 0",
    },
  },
  revolutionContainer: {
    backgroundImage: `url(${revolutionBackground})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    marginTop: "8em",
    height: "70rem",
    textAlign: "center",
    [theme.breakpoints.down("md")]: {
      height: "50rem",
    },
    [theme.breakpoints.down("xs")]: {
      height: "40rem",
    },
    width: "100%",
  },
  revolutionCard: {
    boxShadow: theme.shadows[10],
    backgroundColor: "rgba(255,255,255,0.8)",
    padding: "8rem 10rem",
    [theme.breakpoints.down("md")]: {
      padding: "6rem 2rem",
    },
    [theme.breakpoints.down("xs")]: {
      padding: "3rem 0.5rem",
    },
  },
  informationContainer: {
    padding: "0 .5rem",
    height: "50rem",
    backgroundImage: `url(${infoBackground})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    textAlign: "center",
    [theme.breakpoints.down("md")]: {
      height: "40rem",
    },
    [theme.breakpoints.down("xs")]: {
      height: "30rem",
      padding: "0 2rem",
    },
  },
}));

