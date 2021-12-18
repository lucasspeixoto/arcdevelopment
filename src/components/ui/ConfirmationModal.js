import React from "react";

import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import useMediaQuery from "@mui/material/useMediaQuery";

import theme from "../../components/ui/Theme";
import { Button, CircularProgress } from "@mui/material";

import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";

import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(() => ({
  cancelButton: {
    margin: "1rem 0 1rem 1rem",
    width: 110,
    borderRadius: 20,
    backgroundColor: theme.palette.common.red,
    color: theme.palette.common.white,
    fontSize: "1rem",
    "&:hover": {
      backgroundColor: theme.palette.secondary.light,
    },
    "& .MuiButton-endIcon": {
      color: "#fff",
      marginLeft: 10,
    },
  },
  sendButton: {
    margin: "1rem 1rem 1rem 0",
    width: 110,
    borderRadius: 20,
    backgroundColor: theme.palette.common.orange,
    color: theme.palette.common.grey,
    fontFamily: "Pacifico",
    textTransform: "none",
    fontSize: "1rem",
    "&:hover": {
      backgroundColor: theme.palette.secondary.light,
    },
    "& .MuiButton-endIcon": {
      color: "#fff",
      marginLeft: 10,
    },
  },
  modalHeader: {
    padding: ".5rem 0 .5rem 0",
    textAlign: "center",
  },
  modalSectionContainer: {
    marginBottom: "1rem",
  },
  modalSection: {
    width: "6rem",
    fontWeight: 500,
    color: theme.palette.primary.main,
  },
  modalData: {
    minWidth: "14rem",
    maxWidth: "20rem",
  },
  modalDataMessage: {
    minWidth: "14rem",
    maxWidth: "20rem",
    maxHeight: "8rem",
    overflowY: "auto",
    [theme.breakpoints.down("xs")]: {
      maxWidth: "100%",
      maxHeight: "15rem",
    },
  },
}));

export const ConfirmationModal = ({
  open,
  onClose,
  name,
  email,
  phone,
  text,
  onClick,
  loading,
}) => {
  const classes = useStyles();
  const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));

  return (
    <Dialog
      fullScreen={matchesXS}
      open={open}
      maxWidth={"xs"}
      onClose={onClose}
      disableEscapeKeyDown={true}
      style={{ zIndex: "2000" }}
    >
      <Grid container direction='column'>
        <Grid item className={classes.modalHeader}>
          <Typography variant='h4'>Confirm Data</Typography>
        </Grid>

        <Grid item container direction='column'>
          <DialogContent dividers>
            <Grid item container className={classes.modalSectionContainer}>
              <Grid item>
                <Typography variant='body1' className={classes.modalSection}>
                  Name:
                </Typography>
              </Grid>
              <Grid item className={classes.modalData}>
                <Typography variant='body1'>{name}</Typography>
              </Grid>
            </Grid>
            <Grid item container className={classes.modalSectionContainer}>
              <Grid item>
                <Typography variant='body1' className={classes.modalSection}>
                  Email:
                </Typography>
              </Grid>
              <Grid item className={classes.modalData}>
                <Typography variant='body1'>{email}</Typography>
              </Grid>
            </Grid>
            <Grid item container className={classes.modalSectionContainer}>
              <Grid item>
                <Typography variant='body1' className={classes.modalSection}>
                  Phone:
                </Typography>
              </Grid>
              <Grid item className={classes.modalData}>
                <Typography variant='body1'>{phone}</Typography>
              </Grid>
            </Grid>
            <Grid item container direction={matchesXS ? "column" : "row"}>
              <Grid item>
                <Typography variant='body1' className={classes.modalSection}>
                  Message:
                </Typography>
              </Grid>
              <Grid item className={classes.modalDataMessage}>
                <Typography variant='body1'>{text}</Typography>
              </Grid>
            </Grid>
          </DialogContent>

          <Grid
            item
            container
            alignItems='center'
            justifyContent={loading ? "center" : "space-between"}
            sx={{ height: "4.5em" }}
          >
            {loading ? (
              <CircularProgress size={36} />
            ) : (
              <Grid item container justifyContent='space-between'>
                <Button
                  type='button'
                  variant='contained'
                  className={classes.cancelButton}
                  onClick={onClose}
                  disabled={loading}
                >
                  Cancel
                </Button>

                <Button
                  type='button'
                  variant='contained'
                  className={classes.sendButton}
                  onClick={onClick}
                  disabled={loading}
                >
                  Confirm
                </Button>
              </Grid>
            )}
          </Grid>
        </Grid>
      </Grid>
    </Dialog>
  );
};
