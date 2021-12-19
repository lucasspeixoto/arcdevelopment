import { makeStyles } from "@mui/styles";
import theme from "../../../components/ui/Theme";



export const useStyles = makeStyles(() => ({
  closeButton: {
    position: "absolute",
    top: 10,
    right: 10,
    "&:hover": {
      backgroundColor: "transparent",
    },
  },
  modalHeader: {
    padding: "1rem 1.5rem",
    textAlign: "center",
  },
  columnContainer: {
    margin: "0 3rem",
    [theme.breakpoints.down("md")]: {
      margin: "0",
    },
  },
  sectionContainer: {
    margin: "1.5rem 0",
  },
  totalCost: {
    color: theme.palette.secondary.main,
    fontFamily: "Raleway",
    fontWeight: 700,
    fontSize: "1.5rem",
  },
  estimateButton: {
    ...theme.typography.estimate,
    marginTop: "5rem",
    borderRadius: "50px",
    height: "45px",
    backgroundColor: theme.palette.secondary.main,
    "&:hover": {
      backgroundColor: theme.palette.secondary.light,
    },
    [theme.breakpoints.down("md")]: {
      margin: "2rem 0",
    },
  },
  sendIcon: {
    color: "#5c5c5c",
    marginLeft: "0.5em",
    fontSize: "1.2rem",
  },
}));