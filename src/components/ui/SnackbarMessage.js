import { IconButton, Snackbar } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";

import CloseIcon from "@mui/icons-material/Close";

const useStyles = makeStyles(() => ({
  success: {
    backgroundColor: "#54b050",
  },
  error: {
    backgroundColor: "#ee4c34",
  },
}));

export const SnackbarMessage = ({ message, type, open, onClose }) => {
  const classes = useStyles();

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    onClose({ open: false, type: "", message: "" });
  };

  return (
    <Snackbar
      open={open}
      message={message}
      onClose={handleClose}
      autoHideDuration={5000}
      anchorOrigin={{ vertical: "top", horizontal: "center" }}
      ContentProps={{
        className: type === "success" ? classes.success : classes.error,
      }}
      action={
        <IconButton
          size='small'
          aria-label='close'
          color='inherit'
          onClick={handleClose}
        >
          <CloseIcon fontSize='small' />
        </IconButton>
      }
    />
  );
};
