import { createTheme } from "@mui/material/styles";

const arcBlue = "#0B72B9";
const arcOrange = "#FFBA60";
const arcWhite = "#FFF";

export default createTheme({
  palette: {
    common: {
      blue: arcBlue,
      orange: arcOrange,
      white: arcWhite,
    },
    primary: {
      main: arcBlue,
      contrastText: arcWhite,
    },
    secondary: {
      main: arcOrange,
    },
  },
  typography: {
    tabs: {
      marginLeft: "auto",
    },
    tab: {
      color: "#fff",
      fontFamily: "Raleway",
      fontWeight: "700",
      textTransform: "none",
      fontSize: ".85rem",
      letterSpacing: ".1rem",
    },
    estimate: {
      fontFamily: "Pacifico",
      fontSize: "1rem",
      textTransform: "none",
      color: "#fff",
    },
  },
});
