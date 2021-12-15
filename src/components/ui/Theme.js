import { createTheme } from "@mui/material/styles";

const arcBlue = "#0B72B9";
const arcOrange = "#FFBA60";
const arcWhite = "#FFF";
const arcLight = "#FFBD67";
const arcGrey = "#333";

const theme = createTheme({
  palette: {
    common: {
      blue: arcBlue,
      orange: arcOrange,
      white: arcWhite,
      grey: arcGrey,
    },
    primary: {
      main: arcBlue,
      contrastText: arcWhite,
    },
    secondary: {
      main: arcOrange,
      light: arcLight,
    },
  },
  typography: {
    h2: {
      fontFamily: "Raleway",
      fontWeight: "700",
      fontSize: "2.5rem",
      color: arcBlue,
      lineHeight: 1.5,
    },
    h3: {
      fontFamily: "Pacifico",
      fontWeight: "700",
      fontSize: "2.5rem",
      color: arcBlue,
    },
    h4: {
      fontFamily: "Raleway",
      fontWeight: "700",
      fontSize: "1.75rem",
      color: arcBlue,
      lineHeight: 1.5,
      marginBottom: 10,
    },
    subtitle1: {
      fontWeight: "300",
      fontSize: "1.2rem",
      color: arcGrey,
    },
    subtitle2: {
      fontWeight: "300",
      fontSize: "1.25rem",
      color: arcWhite,
    },
    body1: {
      color: arcGrey,
      fontWeight: "300",
      fontSize: "1rem",
    },
    estimate: {
      marginRight: "10em",
    },
    learnButton: {
      fontFamily: "Roboto",
      fontWeight: "bold",
      textTransform: "none",
    },
  },
});

export default theme;
