import { AppBar } from "@mui/material";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";

//* <AppBar />
export const StyledAppBar = styled(AppBar)(({ theme }) => ({
  zIndex: theme.zIndex.modal + 1,
  [theme.breakpoints.down("lg")]: {
    marginBottom: "2em",
  },
  [theme.breakpoints.down("xs")]: {
    marginBottom: "1.25em",
  },
}));

//* <LogoButton />
export const LogoButton = styled(Button)(() => ({
  padding: 0,
  "&:hover": {
    backgroundColor: "transparent",
  },
}));

//* <Img />
export const Img = styled(`img`)(({ theme }) => ({
  height: "4rem",
  textTransform: "none",
  [theme.breakpoints.down("md")]: {
    height: "4rem",
  },
  [theme.breakpoints.down("xs")]: {
    height: "3.5rem",
  },
}));

//* <Div />
export const Div = styled(`div`)(({ theme }) => ({
  height: "4.5rem",
  [theme.breakpoints.down("md")]: {
    height: "4rem",
  },
  [theme.breakpoints.down("xs")]: {
    height: "3.5rem",
  },
}));
