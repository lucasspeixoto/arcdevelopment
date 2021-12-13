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
