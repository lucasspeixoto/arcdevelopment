import React from "react";

import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import useMediaQuery from "@mui/material/useMediaQuery";

import { useStyles } from "./styles";
import theme from "../../components/ui/Theme";
import { Button, TextField } from "@mui/material";

import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import SendIcon from "@mui/icons-material/Send";

import { useForm, useFormState, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { CallToAction } from "../../components/ui/CallToAction";

const schema = yup
  .object({
    name: yup.string().trim().required("This Field is required"),
    email: yup
      .string()
      .trim()
      .required("This Field is required")
      .matches(/^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/, "Invalid email"),
    phone: yup
      .string()
      .required("This Field is required")
      .matches(/^[- +()0-9]+$/, "Invalid phone"),
    text: yup.string().required("This Field is required"),
  })
  .required();

export const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    mode: "onTouched",
    resolver: yupResolver(schema),
  });

 
  const classes = useStyles();
  const matchesMD = useMediaQuery(theme.breakpoints.down("md"));
  //const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));

  const sendMessage = (data) => {
    alert(data);
  };

  return (
    <Grid container direction={matchesMD ? "column" : "row"}>
      <Grid
        item
        container
        direction='column'
        className={classes.mainContainer}
        lg={4}
      >
        <Grid item className={classes.titleContainer} align='center'>
          <Typography variant='h2'>Contact Us</Typography>
        </Grid>

        <Grid
          item
          container
          direction='column'
          className={classes.contactsContainer}
        >
          <Grid item>
            <PhoneIcon className={classes.icon} />
            <Typography
              variant='body1'
              display='inline'
              color='primary'
              style={{ color: theme.palette.common.blue, fontSize: "1rem" }}
            >
              <a href='tel:19982621117' className={classes.link}>
                (19) 98262-1117
              </a>
            </Typography>
          </Grid>

          <Grid item>
            <EmailIcon className={classes.icon} />
            <Typography
              variant='body1'
              display='inline'
              color='primary'
              style={{ color: theme.palette.common.blue, fontSize: "1rem" }}
            >
              <a href='mailto: lspeixotodev@gmail.com' className={classes.link}>
                lspeixotodev@gmail.com
              </a>
            </Typography>
          </Grid>
        </Grid>

        <Grid
          item
          className={classes.sectionContainer}
          onSubmit={handleSubmit(sendMessage)}
        >
          <TextField
            style={{ margin: "0.2rem 0" }}
            label='Name'
            id='name'
            required
            placeholder='Lucas Peixoto'
            variant='standard'
            fullWidth
            {...register("name")}
            error={errors.name?.message !== undefined}
            helperText={errors.name?.message}
            InputLabelProps={{
              shrink: true,
            }}
          />
          <TextField
            style={{ margin: "1.2rem 0" }}
            label='Email'
            id='email'
            required
            placeholder='johndoe@example.com'
            variant='standard'
            fullWidth
            {...register("email")}
            error={errors.email?.message !== undefined}
            helperText={errors.email?.message}
            InputLabelProps={{
              shrink: true,
            }}
          />

          <TextField
            style={{ margin: "0.2rem 0" }}
            label='Phone'
            id='phone'
            placeholder='(99) 99999-9999'
            variant='standard'
            required
            fullWidth
            {...register("phone")}
            error={errors.phone?.message !== undefined}
            helperText={errors.phone?.message}
            InputLabelProps={{
              shrink: true,
            }}
          />

          <TextField
            style={{ margin: "0.6rem 0" }}
            id='text'
            variant='outlined'
            multiline
            required
            rows={3}
            fullWidth
            placeholder="Hello! We have an idea that we'd just love to share"
            {...register("text")}
            error={errors.text?.message !== undefined}
            helperText={errors.text?.message}
          />

          <Grid
            item
            container
            justifyContent='center'
            className={classes.buttonContainer}
          >
            <Button
              disabled={!isValid}
              variant='contained'
              type='button'
              className={classes.containedButton}
              onClick={handleSubmit(sendMessage)}
              endIcon={<SendIcon />}
            >
              Submit
            </Button>
          </Grid>
        </Grid>
      </Grid>
      <Grid item container lg={8}>
        <CallToAction />
      </Grid>
    </Grid>
  );
};
