import { createTheme } from "@mui/material/styles";

const arcBlue = "#0B72B9";
const arcOrange = "#FF9916";
const arcWhite = "#FFF";
const arcLight = "#FFBD67";
const arcGrey = "#444";

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
    tabs: {
      height: "1em",
      alighItems: "bottom",
      marginLeft: "auto",
      textColor: arcWhite,
      fontSize: "4rem",
    },
    selectedTabs: {
      height: 4,
      margintRight: "1em",
      transitionDuration: 200,
      transitionTimingFunction: "ease",
      borderRadius: "8px",
    },
    estimate: {
      marginRight: "10em",
    },
    tab: {
      color: "#fff",
      fontFamily: "Raleway",
      fontWeight: "700",
      textTransform: "none",
      fontSize: "1rem",
      letterSpacing: ".1rem",
      minWidth: 10,
      marginTop: ".5em",
      marginLeft: "20px",
    },
    menu: {
      backgroundColor: arcBlue,
      color: "#fff",
    },
    selectedMenu: {
      opacity: 1,
      color: "#fff",
      fontWeight: "bold",
    },

    menuItem: {
      fontSize: "1.0rem",
      letterSpacing: ".1rem",
      opacity: 0.7,
      "&:hover": {
        opacity: 1,
      },
    },
    drawer: {
      backgroundColor: arcBlue,
      color: "#fff",
    },
    drawerIconButton: {
      marginLeft: "auto",
      color: "#ddd",
      "&:hover": {
        backgroundColor: "transparent",
      },
    },
    drawerMenuIcon: {
      height: "35px",
      width: "35px",
    },
    listItem: {
      fontSize: "1.2rem",
      letterSpacing: ".1rem",
      opacity: 0.7,
    },
    selectedListItem: {
      opacity: 1,
      color: "#fff",
      fontWeight: "bold",
    },
    listItemEstimate: {
      fontSize: "1.2rem",
      letterSpacing: ".1rem",
      opacity: 0.7,
      "&:hover": {
        backgroundColor: arcOrange,
        opacity: 1,
      },
    },
    selectedListItemEstimate: {
      backgroundColor: arcOrange,
      opacity: 1,
      color: "#fff",
      fontWeight: "bold",
    },

    listItemText: {
      color: "#fff",
      fontFamily: "Raleway",
      fontWeight: "bold",
      textTransform: "none",
      fontSize: "1.1rem",
      letterSpacing: ".1rem",
    },
    learnButton: {
      fontFamily: "Roboto",
      fontWeight: "bold",
      textTransform: "none",
    },
  },
});

export default theme;
