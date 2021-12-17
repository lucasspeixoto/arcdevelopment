import React from "react";

import { Link } from "react-router-dom";
import { Toolbar } from "@mui/material";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import useMediaQuery from "@mui/material/useMediaQuery";

import logo from "../../../assets/logo.svg";
import { Div, StyledAppBar, LogoButton, Img } from "./styles";

import { HeaderTabs } from "./components/HeaderTabs";
import { SideDrawerMenu } from "./components/SideDrawerMenu";

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
  const matches = useMediaQuery("(max-width:1090px)");

  return (
    <React.Fragment>
      <ElevationScroll>
        <StyledAppBar position="fixed">
          <Toolbar disableGutters>
            <LogoButton
              component={Link}
              to="/"
              disableRipple
              onClick={() => setValue(0)}
            >
              <Img src={logo} alt="company logo" />
            </LogoButton>
            {matches ? (
              <SideDrawerMenu value={value} setValue={setValue} />
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
      {/* <Div /> */}
    </React.Fragment>
  );
};
