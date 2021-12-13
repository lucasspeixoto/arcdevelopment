import React, { useState } from "react";

import { Link } from "react-router-dom";
import { Toolbar } from "@mui/material";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import useMediaQuery from "@mui/material/useMediaQuery";
import List from "@mui/material/List";

import logo from "../../../assets/logo.svg";
import {
  Div,
  StyledSwipeableDrawer,
  StyledListItem,
  StyledListItemText,
  StyledListItemEstimate,
  StyledDrawerIconButton,
  StyledMenuIcon,
  StyledAppBar,
  LogoButton,
  Img,
} from "./styles";

import { HeaderTabs } from "./components/HeaderTabs";

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


  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
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
            {matches ? (
              drawer
            ) : (
              <HeaderTabs
                value={value}
                setValue={setValue}
                selectedItem={selectedItem}
                setSelectedItem={setSelectedItem}
              />
            )}
          </Toolbar>
        </StyledAppBar>
      </ElevationScroll>
      <Div />
    </React.Fragment>
  );
};
