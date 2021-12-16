import React from "react";

import footerAdornment from "../../../assets/Footer Adornment.svg";
import facebook from "../../../assets/facebook.svg";
import twitter from "../../../assets/twitter.svg";
import instagram from "../../../assets/instagram.svg";

import {
  Adornment,
  SFooter,
  SocialLogo,
  SocialMediaGrid,
  useStyles,
} from "./styles";
import { Grid, Paper } from "@mui/material";
import { Link } from "react-router-dom";
import { about, revolutions, services } from "../../../helpers/utils";

const socialMedias = [
  { href: "https://www.facebook.com", alt: "facebook logo", src: facebook },
  { href: "https://www.instagram.com", alt: "instagram logo", src: instagram },
  { href: "https://www.twitter.com", alt: "twitter logo", src: twitter },
];

export const Footer = ({ setValue, setSelectedItem }) => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <SFooter>
        <Paper sx={{ display: { xs: "none", md: "block" } }}>
          <Grid
            container
            justifyContent="center"
            alignItems="center"
            className={classes.mainContainer}
          >
            <Grid item className={classes.gridItem}>
              <Grid container direction="column" spacing={2}>
                <Grid
                  item
                  component={Link}
                  to="/"
                  onClick={() => setValue(0)}
                  className={classes.link}
                >
                  Home
                </Grid>
              </Grid>
            </Grid>
            <Grid item className={classes.gridItem}>
              <Grid container direction="column" spacing={2}>
                {services.map((route, index) => (
                  <Grid
                    key={index}
                    item
                    component={Link}
                    to={route.link}
                    className={classes.link}
                    onClick={() => {
                      setValue(1);
                      setSelectedItem(index);
                    }}
                  >
                    {route.name}
                  </Grid>
                ))}
              </Grid>
            </Grid>
            <Grid item className={classes.gridItem}>
              <Grid container direction="column" spacing={2}>
                {revolutions.map((route, index) => (
                  <Grid
                    key={index}
                    item
                    component={Link}
                    to={route.link}
                    className={classes.link}
                    onClick={() => setValue(2)}
                  >
                    {route.name}
                  </Grid>
                ))}
              </Grid>
            </Grid>
            <Grid item className={classes.gridItem}>
              <Grid container direction="column" spacing={2}>
                {about.map((route, index) => (
                  <Grid
                    key={index}
                    item
                    component={Link}
                    to={route.link}
                    className={classes.link}
                    onClick={() => setValue(3)}
                  >
                    {route.name}
                  </Grid>
                ))}
              </Grid>
            </Grid>
            <Grid item className={classes.gridItem}>
              <Grid container direction="column" spacing={2}>
                <Grid
                  item
                  component={Link}
                  to="/contact"
                  className={classes.link}
                  onClick={() => setValue(4)}
                >
                  Contact Us
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Paper>
        <Adornment alt="black decorative slash" src={footerAdornment} />
        <SocialMediaGrid container justifyContent="flex-end" spacing={2}>
          {socialMedias.map((media, index) => (
            <Grid
              key={index}
              item
              component={"a"}
              href={media.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              <SocialLogo alt={media.alt} src={media.src} />
            </Grid>
          ))}
        </SocialMediaGrid>
      </SFooter>
    </React.Fragment>
  );
};
