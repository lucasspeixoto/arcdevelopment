import { makeStyles } from "@mui/styles";
import theme from "../../components/ui/Theme";

export const useStyles = makeStyles(() => ({
  mainContainer: {
    marginTop: ".7em",
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

  icon: {
    width: "10rem",
    marginLeft: "1em",
    [theme.breakpoints.down("sm")]: {
      marginLeft: 0,
    },
    [theme.breakpoints.down("xs")]: {
      width: "7rem",
    },
  },
  serviceContainer: {
    margin: "1rem 0",
    padding: "0 2rem",
    [theme.breakpoints.down("sm")]: {
      margin: "1rem 0",
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
}));
