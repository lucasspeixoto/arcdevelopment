import React, { useState } from "react";

import { Tabs, Tab } from "@mui/material";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

import { makeStyles } from "@mui/styles";
//import { styled } from "@mui/material/styles";

import { Link } from "react-router-dom";

import { FreeEstimateButton } from "../../FreeEstimateButton";
import { menuOptions } from "../../../../helpers/utils";
import theme from "../../Theme";

const useStyles = makeStyles(() => ({
  tabs: {
    height: "1em",
    alighItems: "bottom",
    marginLeft: "auto",
    textColor: theme.palette.common.white,
    fontSize: "4rem",
    "& .MuiTabs-indicator": {
      height: 4,
      margintRight: "1em",
      transitionDuration: 200,
      transitionTimingFunction: "ease",
      borderRadius: "8px",
    },
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
    zIndex: "1302",
    "& .MuiPaper-root": {
      backgroundColor: theme.palette.common.blue,
      color: theme.palette.common.white,
    },
    "& .Mui-selected": {
      opacity: 1,
      color: theme.palette.common.white,
      fontWeight: "700",
    },
  },
  menuItem: {
    fontFamily: "Raleway",
    fontWeight: "700",
    fontSize: "1.0rem",
    letterSpacing: ".1rem",
    color: theme.palette.common.white,
    opacity: 0.7,
    "&:hover": {
      opacity: 1,
    },
  },
}));

//* <StyledMenu />
/* export const StyledMenu = styled((props) => (
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
    backgroundColor: theme.palette.common.blue,
    color: "#fff",
  },
  "& .Mui-selected": {
    opacity: 1,
    color: "#fff",
    fontWeight: "bold",
  },
})); */

export const HeaderTabs = ({
  value,
  setValue,
  selectedItem,
  setSelectedItem,
}) => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleChange = (e, value) => {
    setValue(value);
  };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleMenuItemClick = (event, index) => {
    setAnchorEl(null);
    setSelectedItem(index);
  };

  const routes = [
    { name: "Home", link: "/", activeItem: 0 },
    {
      name: "Services",
      link: "/services",
      activeItem: 1,
      ariaControls: anchorEl ? "simple-menu" : undefined,
      ariaHaspopup: anchorEl ? "true" : undefined,
      ariaExpanded: open ? "true" : undefined,
      onMouseOver: handleClick,
    },
    { name: "The Revolution", link: "/therevolution", activeItem: 2 },
    { name: "About Us", link: "/about", activeItem: 3 },
    { name: "Contact Us", link: "/contact", activeItem: 4 },
  ];

  return (
    <React.Fragment>
      <Tabs
        value={value}
        onChange={handleChange}
        textColor='inherit'
        indicatorColor='secondary'
        className={classes.tabs}
      >
        {routes.map((route, index) => (
          <Tab
            key={index}
            aria-controls={route.ariaControls}
            aria-haspopup={route.ariaHaspopup}
            aria-expanded={route.ariaExpanded}
            onMouseOver={route.onMouseOver}
            label={route.name}
            component={Link}
            to={route.link}
            className={classes.tab}
          />
        ))}
        <FreeEstimateButton
          text='Free Estimate'
          changeTabValue={() => {
            setValue(5);
          }}
          style={{ marginTop: ".7em", marginRight: ".2em" }}
        />
      </Tabs>

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
        id='simple-menu'
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          onMouseLeave: handleClose,
        }}
        className={classes.menu}
      >
        {menuOptions.map((option, index) => (
          <MenuItem
            key={index}
            component={Link}
            to={option.Link}
            onClick={(event) => {
              handleMenuItemClick(event, index);
              setValue(1);
              handleClose();
            }}
            selected={index === selectedItem && value === 1}
            className={classes.menuItem}
          >
            {option.name}
          </MenuItem>
        ))}
      </Menu>
    </React.Fragment>
  );
};
