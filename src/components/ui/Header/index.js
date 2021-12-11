import React, { useState } from "react";

import { Link } from "react-router-dom";
import { Toolbar } from "@mui/material";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import useMediaQuery from "@mui/material/useMediaQuery";
import List from "@mui/material/List";

import logo from "../../../assets/logo.svg";
import {
  Div,
  EstimateButton,
  StyledMenu,
  StyledMenuItem,
  StyledSwipeableDrawer,
  StyledListItem,
  StyledListItemText,
  StyledListItemEstimate,
  StyledDrawerIconButton,
  StyledMenuIcon,
  StyledAppBar,
  LogoButton,
  Img,
  StyledTab,
  StyledTabs,
} from "./styles";
import { menuOptions } from "../../../helpers/utils";

function ElevationScroll({ children }) {
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

export const Header = ({ value, setValue, selectedItem, setSelectedItem }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const matches = useMediaQuery("(max-width:1090px)");

  const iOS =
    typeof navigator !== "undefined" &&
    /iPad|iPhone|iPod/.test(navigator.userAgent);

  const [openDrawer, setOpenDrawer] = useState(false);

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

  const tabs = (
    <React.Fragment>
      <StyledTabs
        value={value}
        onChange={handleChange}
        textColor='inherit'
        indicatorColor='secondary'
      >
        {routes.map((route, index) => (
          <StyledTab
            key={index}
            aria-controls={route.ariaControls}
            aria-haspopup={route.ariaHaspopup}
            aria-expanded={route.ariaExpanded}
            onMouseOver={route.onMouseOver}
            label={route.name}
            component={Link}
            to={route.link}
          />
        ))}
      </StyledTabs>
      <EstimateButton
        variant='contained'
        color='secondary'
        component={Link}
        to='/estimate'
      >
        Free Estimate
      </EstimateButton>
      <StyledMenu
        id='simple-menu'
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          onMouseLeave: handleClose,
        }}
        keepMounted
      >
        {menuOptions.map((option, index) => (
          <StyledMenuItem
            key={index}
            component={Link}
            to={option.Link}
            onClick={(event) => {
              handleMenuItemClick(event, index);
              setValue(1);
              handleClose();
            }}
            selected={index === selectedItem && value === 1}
          >
            {option.name}
          </StyledMenuItem>
        ))}
      </StyledMenu>
    </React.Fragment>
  );

  const drawer = (
    <React.Fragment>
      <StyledSwipeableDrawer
        disableBackdropTransition={!iOS}
        disableDiscovery={iOS}
        open={openDrawer}
        onOpen={() => setOpenDrawer(true)}
        onClose={() => setOpenDrawer(false)}
      >
        <List disablePadding sx={{ marginTop: "4.2em" }}>
          {routes.map((route, index) => (
            <StyledListItem
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
            >
              <StyledListItemText disableTypography>
                {route.name}
              </StyledListItemText>
            </StyledListItem>
          ))}
          <StyledListItemEstimate
            onClick={() => {
              setOpenDrawer(false);
              setValue(5);
            }}
            divider
            button
            component={Link}
            to='/estimate'
            selected={value === 5}
          >
            <StyledListItemText disableTypography>
              Free Estimate
            </StyledListItemText>
          </StyledListItemEstimate>
        </List>
      </StyledSwipeableDrawer>
      <StyledDrawerIconButton
        onClick={() => setOpenDrawer(!openDrawer)}
        disableRipple
      >
        <StyledMenuIcon />
      </StyledDrawerIconButton>
    </React.Fragment>
  );

  return (
    <React.Fragment>
      <ElevationScroll>
        <StyledAppBar position='fixed'>
          <Toolbar disableGutters>
            <LogoButton
              component={Link}
              to='/'
              disableRipple
              onClick={() => setValue(0)}
            >
              <Img src={logo} alt='company logo' />
            </LogoButton>
            {matches ? drawer : tabs}
          </Toolbar>
        </StyledAppBar>
      </ElevationScroll>
      <Div />
    </React.Fragment>
  );
};
