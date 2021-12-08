import React from "react";

import { AppBar, Tabs, Tab } from "@mui/material";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import MenuIcon from "@mui/icons-material/Menu";
import IconButton from "@mui/material/IconButton";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";

//* <Div />
export const Div = styled(`div`)(({ theme }) => ({
  ...theme.mixins.toolbar,
  marginBottom: "1em",
}));

//* <Img />
export const Img = styled(`img`)(({ theme }) => ({
  height: "5em",
  [theme.breakpoints.down("lg")]: {
    height: "4.8em",
  },
  [theme.breakpoints.down("xs")]: {
    height: "4em",
  },
}));

//* <AppBar />
export const StyledAppBar = styled(AppBar)(({ theme }) => ({
  zIndex: theme.zIndex.modal + 1,
  marginBottom: "3em",
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

//* <StyledTabs />
export const StyledTabs = styled(Tabs)(({ theme }) => ({
  ...theme.typography.tabs,
  ".MuiTabs-indicator": {
    ...theme.typography.selectedTabs,
  },
}));

//* <StyledTab />
export const StyledTab = styled(Tab)(({ theme }) => ({
  ...theme.typography.tab,
}));

//* <EstimateButton />
export const EstimateButton = styled(Button)(({ theme }) => ({
  ...theme.typography.estimate,
}));

//* <StyledMenu />
export const StyledMenu = styled((props) => (
  <Menu
    elevation={0}
    keepMounted
    anchorOrigin={{
      vertical: "top",
      horizontal: "left",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "left",
    }}
    {...props}
  />
))(({ theme }) => ({
  "& .MuiPaper-root": {
    ...theme.typography.menu,
  },
  "& .Mui-selected": {
    ...theme.typography.selectedMenu,
  },
}));

//* <StyledMenuItem />
export const StyledMenuItem = styled(MenuItem)(({ theme }) => ({
  ...theme.typography.menuItem,
}));

//* <StyledSwipeableDrawer />
export const StyledSwipeableDrawer = styled(SwipeableDrawer)(({ theme }) => ({
  "& .MuiPaper-root": {
    ...theme.typography.drawer,
  },
}));

//* <StyledDrawerIconButton />
export const StyledDrawerIconButton = styled(IconButton)(({ theme }) => ({
  ...theme.typography.drawerIconButton,
}));

//* <StyledMenuIcon />
export const StyledMenuIcon = styled(MenuIcon)(({ theme }) => ({
  ...theme.typography.drawerMenuIcon,
}));

//* <StyledListItem />
export const StyledListItem = styled(ListItem)(({ theme, props }) => ({
  ...theme.typography.listItem,
  "&.Mui-selected": {
    ...theme.typography.selectedListItem,
  },
}));

//* <StyledListItemEstimate />
export const StyledListItemEstimate = styled(ListItem)(({ theme }) => ({
  ...theme.typography.listItemEstimate,
  "&.Mui-selected": {
    ...theme.typography.selectedListItemEstimate,
  },
}));

//* <StyledListItemEstimate />
export const StyledListItemText = styled(ListItemText)(({ theme }) => ({
  ...theme.typography.listItemText,
}));
