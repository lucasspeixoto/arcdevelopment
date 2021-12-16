import React, { useState } from "react";

import { styled } from "@mui/material/styles";

import List from "@mui/material/List";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import MenuIcon from "@mui/icons-material/Menu";
import IconButton from "@mui/material/IconButton";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";

import { makeStyles } from "@mui/styles";

import { Link } from "react-router-dom";

import theme from "../../Theme";

const useStyles = makeStyles(() => ({
  swipeableDrawer: {
    "& .MuiPaper-root": {
      backgroundColor: theme.palette.common.blue,
      color: "#fff",
    },
  },
  listItem: {
    fontSize: "1.2rem",
    letterSpacing: ".1rem",
    opacity: 0.7,
    "&.Mui-selected": {
      opacity: 1,
      color: "#fff",
      fontWeight: "bold",
    },
  },
  listItemText: {
    color: "#fff",
    fontFamily: "Raleway",
    fontWeight: "bold",
    textTransform: "none",
    fontSize: "1.1rem",
    letterSpacing: ".1rem",
  },
  iconButton: {
    marginLeft: "auto",
    color: "#ddd",
    "&:hover": {
      backgroundColor: "transparent",
    },
  },
  menuIcon: {
    height: "35px",
    width: "35px",
  },
}));

//* <StyledListItemEstimate />
export const StyledListItemEstimate = styled(ListItem)(({ theme }) => ({
  fontSize: "1.2rem",
  letterSpacing: ".1rem",
  opacity: 0.7,
  "&:hover": {
    backgroundColor: theme.palette.common.orange,
    opacity: 1,
  },
  "&.Mui-selected": {
    backgroundColor: theme.palette.common.orange,
    opacity: 1,
    color: "#fff",
    fontWeight: "bold",
  },
}));

export const SideDrawerMenu = ({ value, setValue }) => {
  const iOS =
    typeof navigator !== "undefined" &&
    /iPad|iPhone|iPod/.test(navigator.userAgent);

  const [openDrawer, setOpenDrawer] = useState(false);

  const classes = useStyles();

  const routes = [
    { name: "Home", link: "/", activeItem: 0 },
    {
      name: "Services",
      link: "/services",
      activeItem: 1,
    },
    { name: "The Revolution", link: "/therevolution", activeItem: 2 },
    { name: "About Us", link: "/about", activeItem: 3 },
    { name: "Contact Us", link: "/contact", activeItem: 4 },
  ];
  return (
    <React.Fragment>
      <IconButton
        onClick={() => setOpenDrawer(!openDrawer)}
        className={classes.iconButton}
        disableRipple
      >
        <MenuIcon className={classes.menuIcon} />
      </IconButton>
      <SwipeableDrawer
        disableBackdropTransition={!iOS}
        disableDiscovery={iOS}
        open={openDrawer}
        onOpen={() => setOpenDrawer(true)}
        onClose={() => setOpenDrawer(false)}
        className={classes.swipeableDrawer}
      >
        <List disablePadding sx={{ marginTop: "4.2em" }}>
          {routes.map((route, index) => (
            <ListItem
              key={index}
              onClick={() => {
                setOpenDrawer(false);
                setValue(route.activeItem);
              }}
              divider
              button
              component={Link}
              to={route.link}
              selected={value === route.activeItem}
              className={classes.listItem}
            >
              <ListItemText disableTypography className={classes.listItemText}>
                {route.name}
              </ListItemText>
            </ListItem>
          ))}
          <StyledListItemEstimate
            onClick={() => {
              setOpenDrawer(false);
              setValue(5);
            }}
            divider
            button
            component={Link}
            to="/estimate"
            selected={value === 5}
          >
            <ListItemText disableTypography className={classes.listItemText}>
              Free Estimate
            </ListItemText>
          </StyledListItemEstimate>
        </List>
      </SwipeableDrawer>
    </React.Fragment>
  );
};
