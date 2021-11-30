import React, { useState } from "react";
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
}));

const StyledTabs = styled(Tabs)(({ theme }) => ({
  ...theme.typography.tabs,
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

export const Header = () => {
  const [value, setValue] = useState(0);

  const handleChange = (e, value) => {
    setValue(value)
  }

  return (
    <React.Fragment>
      <ElevationScroll>
        <AppBar position='fixed'>
          <Toolbar disableGutters>
            <Img src={logo} alt='company logo' />
            <StyledTabs
              value={value}
              onChange={handleChange}
              textColor='#fff'
              indicatorColor='primary'
            >
              <StyledTab label='Home' />
              <StyledTab label='Services' />
              <StyledTab label='The Revolution' />
              <StyledTab label='About Us' />
              <StyledTab label='Contact Us' />
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
