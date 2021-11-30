import { createTheme } from "@mui/material/styles";

const arcBlue = "#0B72B9";
const arcOrange = "#FFBA60";

export default createTheme({
  palette: {
    common: {
      blue: arcBlue,
      orange: arcOrange,
    },
    primary: {
      main: arcBlue,
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
      color: "white",
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
      color: "white",
    },
  },
});
