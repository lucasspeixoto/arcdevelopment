import { makeStyles } from "@mui/styles";
import theme from "../ui/Theme";

import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";

import revolutionBackground from "../../assets/repeatingBackground.svg";

export const useStyles = makeStyles(() => ({
  mainContainer: {
    marginTop: "3em",
    [theme.breakpoints.down("md")]: {
      marginTop: "2em",
    },
    [theme.breakpoints.down("xs")]: {
      marginTop: "1em",
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
  },
  animation: {
    maxWidth: "50em",
    minWidth: "21em",
    marginTop: "2em",
    marginLeft: "10%",
    [theme.breakpoints.down("sm")]: {
      maxWidth: "30rem",
    },
    [theme.breakpoints.down("xs")]: {
      marginLeft: 0,
    },
  },
  buttonsContainer: {
    marginTop: "1em",
    alignItems: "center",
  },
  heroTextContainer: {
    minWidth: "21.5em",
    marginLeft: "1em",
    [theme.breakpoints.down("xs")]: {
      marginLeft: 0,
    },
  },
  celebration: {
    fontFamily: "Pacifico",
    color: theme.palette.common.orange,
  },

  icon: {
    width: "15rem",
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
    marginTop: '8em',
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
}));

//* <EstimateButton />
export const EstimateButton = styled(Button)(({ theme }) => ({
  ...theme.typography.estimate,
}));

//* <LearnButtonHero />
export const LearnButtonHero = styled(Button)(({ theme }) => ({
  ...theme.typography.learnButton,
  fontSize: "0.9rem",
  borderRadius: 50,
  borderWidth: 2,
  height: 45,
  width: 145,
}));

//* <LearnButton />
export const LearnButton = styled(Button)(({ theme }) => ({
  ...theme.typography.learnButton,
  fontSize: "0.9rem",
  borderRadius: 50,
  borderWidth: 2,
  height: 40,
  margin: "1rem 0",
}));
