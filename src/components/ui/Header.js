import React, { useState, useEffect } from "react";

import { Link } from "react-router-dom";

import { AppBar, Toolbar, Tabs, Tab } from "@mui/material";
import { styled } from "@mui/system";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import Button from "@mui/material/Button";

import logo from "../../assets/logo.svg";

function ElevationScroll({ children }) {
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

const Div = styled(`div`)(({ theme }) => ({
  ...theme.mixins.toolbar,
  marginBottom: "1em",
}));

const Img = styled("img")(() => ({
  height: "5em",
  widht: "28px",
}));

const StyledTabs = styled(Tabs)(({ theme }) => ({
  ...theme.typography.tabs,
  textColor: theme.palette.primary.contrastText,
  fontSize: "4rem",
}));

const StyledTab = styled(Tab)(({ theme }) => ({
  ...theme.typography.tab,
  minWidth: 10,
  marginLeft: "25px",
}));

const StyledButton = styled(Button)(({ theme }) => ({
  ...theme.typography.estimate,
  borderRadius: "50px",
  marginLeft: "50px",
  marginRight: "15px",
  height: "45px",
}));

const LogoButton = styled(Button)(() => ({
  padding: 0,
  "&:hover": {
    backgroundColor: "transparent",
  },
}));

export const Header = () => {
  const [value, setValue] = useState(0);

  useEffect(() => {
    const path = window.location.pathname;

    if (path === "/" && value !== 0) {
      setValue(0);
    } else if (path === "/services" && value !== 1) {
      setValue(1);
    } else if (path === "/therevolution" && value !== 2) {
      setValue(2);
    } else if (path === "/about" && value !== 3) {
      setValue(3);
    } else if (path === "/contact" && value !== 4) {
      setValue(4);
    } else if (path === "/estimate" && value !== 5) {
      setValue(5);
    }
  }, [value]);

  const handleChange = (e, value) => {
    setValue(value);
  };

  return (
    <React.Fragment>
      <ElevationScroll>
        <AppBar position='fixed'>
          <Toolbar disableGutters>
            <LogoButton
              component={Link}
              to='/'
              disableRipple
              onClick={() => setValue(0)}
            >
              <Img src={logo} alt='company logo' />
            </LogoButton>
            <StyledTabs
              value={value}
              onChange={handleChange}
              textColor='inherit'
              indicatorColor='secondary'
            >
              <StyledTab label='Home' component={Link} to='/' />
              <StyledTab label='Services' component={Link} to='/services' />
              <StyledTab
                label='The Revolution'
                component={Link}
                to='/therevolution'
              />
              <StyledTab label='About Us' component={Link} to='/about' />
              <StyledTab label='Contact Us' component={Link} to='/contact' />
            </StyledTabs>
            <StyledButton variant='contained' color='secondary'>
              Free Estimate
            </StyledButton>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <Div />
    </React.Fragment>
  );
};
