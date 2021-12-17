import { createTheme } from "@mui/material/styles";

const arcBlue = "#0B72B9";
const arcOrange = "#FFBD67";
const arcWhite = "#FFF";
const arcLight = "#FFDCAE";
const arcGrey = "#5c5c5c";
const arcRed = "#FE1A28";

const theme = createTheme({
  palette: {
    common: {
      blue: arcBlue,
      red: arcRed,
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
    tertiary: { 
      main: arcRed,
    }
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
  components: {
    MuiInputLabel: {
      styleOverrides: {
        root: {
          color: arcBlue,
          fontSize: "1rem",
        },
      },
    },
    MuiInput: {
      styleOverrides: {
        underline: {
          "&:before": {
            borderBottomColor: arcBlue,
          },
          "&:hover:not($disabled):not($focused):not($error):before": {
            borderBottomColor: arcBlue,
          },
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          "&:hover:not($disabled):not($focused):not($error) $notchedOutline": {
            borderWidth: "2px",
            borderColor: arcBlue,
          },
          "&$error $notchedOutline": {
            borderWidth: "2px",
          },
        },
        notchedOutline: {
          borderColor: arcBlue,
        },
      },
    },
    MuiFormHelperText: {
      styleOverrides: {
        root: {
          fontSize: ".6em",
        },
        contained: {
          marginLeft: 0,
          marginRight: 0,
        },
      },
    },
  },
});

export default theme;
