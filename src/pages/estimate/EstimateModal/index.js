import { TextField, useMediaQuery } from "@mui/material";
import React, { useState } from "react";

import check from "../../../assets/check.svg";

import theme from "../../../components/ui/Theme";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useStyles } from "./styles";
import Dialog from "@mui/material/Dialog";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Typography from "@mui/material/Typography";
import DialogContent from "@mui/material/DialogContent";
import Grid from "@mui/material/Grid";
import SendIcon from "@mui/icons-material/Send";
import Button from "@mui/material/Button";
import { ConfirmationModal } from "../../../components/ui/ConfirmationModal";
import { SnackbarMessage } from './../../../components/ui/SnackbarMessage';

const initialFormValue = {
  name: null,
  phone: null,
  email: null,
  text: null,
};

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

export const EstimateModal = ({
  resetValues,
  open,
  onClose,
  totalCost,
  service,
  platforms,
  features,
  customFeatures,
  users,
  category,
}) => {
  const {
    register,
    watch,
    reset,
    formState: { errors },
  } = useForm({
    mode: "onTouched",
    resolver: yupResolver(schema),
    defaultValues: initialFormValue,
  });

  const classes = useStyles();

  const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));

  const [openConfirmation, setOpenConfirmation] = useState(false);
  const [loading, setLoading] = useState(false);

  const [snackbar, setSnackbar] = useState({
    open: false,
    type: "",
    message: "",
  });

  const { name, phone, email, text } = watch();

  const onConfirmClick = () => {
    setLoading(true);

    setOpenConfirmation(false);
    setLoading(false);
    reset();

    setSnackbar({
      open: true,
      type: "success",
      message: "Message sent successfully",
    });
  };

  const platformsMessage = () => {
    return `You want ${service} for ${
      //if only web application is selected...
      platforms.indexOf("Web Application") > -1 && platforms.length === 1
        ? //then finish sentence here
          "a Web Application."
        : //otherwise, if web application and another platform is selected...
        platforms.indexOf("Web Application") > -1 && platforms.length === 2
        ? //then finish the sentence here
          `a Web Application and an ${platforms[1]}.`
        : //otherwise, if only one platform is selected which isn't web application...
        platforms.length === 1
        ? //then finish the sentence here
          `an ${platforms[0]}.`
        : //otherwise, if other two options are selected...
        platforms.length === 2
        ? //then finish the sentence here
          "an iOS Application and an Android Application."
        : //otherwise if all three are selected...
        platforms.length === 3
        ? //then finish the sentence here
          "a Web Application, an iOS Application, and an Android Application."
        : null
    }`;
  };

  const featuresMessage = () => {
    return (
      <React.Fragment>
        {"with "}
        {/* if we have features... */}
        {features.length > 0
          ? //...and there's only 1...
            features.length === 1
            ? //then end the sentence here
              `${features[0]}.`
            : //otherwise, if there are two features...
            features.length === 2
            ? //...then end the sentence here
              `${features[0]} and ${features[1]}.`
            : //otherwise, if there are three or more features...
              features
                //filter out the very last feature...
                .filter((feature, index) => index !== features.length - 1)
                //and for those features return their name...
                .map((feature, index) => (
                  <span key={index}>{`${feature}, `}</span>
                ))
          : null}
        {features.length > 0 && features.length !== 1 && features.length !== 2
          ? //...and then finally add the last feature with 'and' in front of it
            ` and ${features[features.length - 1]}.`
          : null}
      </React.Fragment>
    );
  };

  const restMessage = () => {
    return `The custom features will be of ${customFeatures}, and the project will be used by ${users} users.`;
  };

  const websiteMessage = () => {
    return `You want ${
      category[0] === "Basic" ? "a Basic Website" : `an ${category} Website.`
    }`;
  };

  return (
    <React.Fragment>
      <Dialog
        open={open}
        onClose={onClose}
        disableEscapeKeyDown={true}
        maxWidth='md'
        fullScreen={matchesXS}
        // more than the header but less than the ModalConfirmation
        style={{ zIndex: 1900 }}
      >
        <IconButton
          disableRipple
          className={classes.closeButton}
          onClick={onClose}
        >
          <CloseIcon color='primary' style={{ fontSize: "1.5rem" }} />
        </IconButton>

        <Typography variant='h4' className={classes.modalHeader}>
          Estimate
        </Typography>
        <DialogContent dividers>
          <Grid container>
            <Grid
              item
              container
              md
              direction='column'
              className={classes.columnContainer}
            >
              <Grid item className={classes.sectionContainer}>
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
                    disabled={
                      name == null ||
                      phone == null ||
                      email == null ||
                      text == null
                    }
                    variant='contained'
                    type='button'
                    className={classes.containedButton}
                    onClick={() => setOpenConfirmation(true)}
                    endIcon={<SendIcon />}
                  >
                    Send Message
                  </Button>
                </Grid>
              </Grid>
              <Grid item className={classes.sectionContainer}>
                <Typography
                  variant='body1'
                  paragraph
                  style={{ lineHeight: "1.5rem" }}
                >
                  We can create this custom digital solution for an estimated{" "}
                  <span className={classes.totalCost}>
                    ${totalCost.toFixed(2)}
                  </span>
                </Typography>
                <Typography variant='body1'>
                  Fill out your name, number and email, place your request and
                  we'll get back to you with details moving forward and a final
                  price.
                </Typography>
              </Grid>
            </Grid>
            <Grid
              item
              container
              md
              alignItems='center'
              direction='column'
              className={classes.columnContainer}
              style={{ marginTop: "1.5rem" }}
            >
              {service === "Website Development" ? (
                <Grid item container alignItems='center'>
                  <Grid item xs={2}>
                    <img src={check} alt='chekmark' />
                  </Grid>
                  <Grid item xs={10}>
                    <Typography variant='body1'>{websiteMessage()}</Typography>
                  </Grid>
                </Grid>
              ) : (
                [platformsMessage(), featuresMessage(), restMessage()].map(
                  (message, index) => (
                    <Grid
                      item
                      container
                      alignItems='center'
                      key={index}
                      style={{ marginBottom: "1rem" }}
                    >
                      <Grid item xs={2}>
                        <img src={check} alt='chekmark' />
                      </Grid>
                      <Grid item xs={10}>
                        <Typography variant='body1'>{message}</Typography>
                      </Grid>
                    </Grid>
                  )
                )
              )}

              <Grid item>
                <Button
                  variant='contained'
                  className={classes.estimateButton}
                  onClick={onConfirmClick}
                >
                  Place request
                  <SendIcon className={classes.sendIcon} />
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </DialogContent>
        {/*--Confirmation Modal--*/}
        <ConfirmationModal
          name={name}
          email={email}
          phone={phone}
          text={text}
          loading={loading}
          open={openConfirmation}
          onClose={() => setOpenConfirmation(false)}
          onClick={onConfirmClick}
        />
      </Dialog>

      {/*--Snackbar message--*/}
      {snackbar.open && (
        <SnackbarMessage
          open={snackbar.open}
          onClose={setSnackbar}
          message={snackbar.message}
          type={snackbar.type}
        />
      )}
    </React.Fragment>
  );
};
