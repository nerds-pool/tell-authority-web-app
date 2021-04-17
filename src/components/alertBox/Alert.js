import React, { useState, useEffect } from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,
} from "@material-ui/core";
import { HelpOutline } from "@material-ui/icons";
import { makeStyles } from "@material-ui/core/styles";
import { COLOR } from "../../theme/Color";

const useStyles = makeStyles((theme) => ({
  alertContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    flexWrap: "wrap",
  },
  IconCon: {
    alignSelf: "center",
  },
  Icon: {
    color: COLOR.navCol,
    fontSize: "60px",
  },
  buttons: {
    justifyContent: "center",
    color: "white",
  },
  confirm: {
    backgroundColor: COLOR.navCol,
    color: "white",

    "&:hover": {
      backgroundColor: COLOR.navCol,
      color: "white",
    },
  },
  cancel: {
    backgroundColor: COLOR.redColour,
    color: "white",
    "&:hover": {
      backgroundColor: COLOR.redColour,
      color: "white",
    },
  },
}));

function Alert(props) {
  const [reason, setReason] = useState("");

  // State for receiving Alert Type [status]
  const [AlertType, setAlertType] = useState(props.Type);
  useEffect(() => setAlertType(props.Type), [props.Type]);

  // State for btnType [Confirm || Reject]
  const [BtnType, setBtnType] = useState(props.btnType);
  useEffect(() => setBtnType(props.btnType), [props.btnType]);

  const classes = useStyles();

  const DisplayAlert = () => {
    if (AlertType === "open" && BtnType === "Confirm")
      return (
        // Click Accept
        <Dialog
          open={props.open}
          onClose={props.onClose}
          aria-labelledby="form-dialog-title"
          className={classes.dialogBox}
        >
          <DialogContent className={classes.alertContainer}>
            <DialogContent className={classes.IconCon}>
              <HelpOutline className={classes.Icon} />
            </DialogContent>
            <DialogTitle id="form-dialog-title">
              Do you want to ACCEPT the complaint?
            </DialogTitle>
            <DialogContentText>{`Complaint: ${props.title}`}</DialogContentText>

            <DialogActions className={classes.buttons}>
              <Button
                fullWidth
                onClick={props.onConfirm}
                className={classes.confirm}
              >
                Confirm
              </Button>
              <Button
                fullWidth
                onClick={props.onClose}
                className={classes.cancel}
              >
                Cancel
              </Button>
            </DialogActions>
          </DialogContent>
        </Dialog>
      );

    if (AlertType === "open" && BtnType === "Reject")
      return (
        // Click Reject
        <Dialog
          open={props.open}
          onClose={props.onClose}
          aria-labelledby="form-dialog-title"
          className={classes.dialogBox}
        >
          <DialogContent className={classes.alertContainer}>
            <DialogContent className={classes.IconCon}>
              <HelpOutline className={classes.Icon} />
            </DialogContent>
            <DialogTitle id="form-dialog-title">
              Do you want to REJECT the complaint?
            </DialogTitle>
            <DialogContentText>{`Complaint: ${props.title}`}</DialogContentText>
            <DialogContent>
              <TextField
                id="reason"
                label="Reason to Reject"
                multiline
                rows={2}
                variant="outlined"
                value={reason}
                onChange={(e) => setReason(e.target.value)}
                required
              />
            </DialogContent>
            <DialogActions className={classes.buttons}>
              <Button
                fullWidth
                onClick={(e) => props.onConfirm(e, reason)}
                className={classes.confirm}
              >
                Confirm
              </Button>
              <Button
                fullWidth
                onClick={props.onClose}
                className={classes.cancel}
              >
                Cancel
              </Button>
            </DialogActions>
          </DialogContent>
        </Dialog>
      );

    if (AlertType === "accepted")
      return (
        <Dialog
          open={props.open}
          onClose={props.onClose}
          aria-labelledby="form-dialog-title"
          className={classes.dialogBox}
        >
          <DialogContent className={classes.alertContainer}>
            <DialogContent className={classes.IconCon}>
              <HelpOutline className={classes.Icon} />
            </DialogContent>
            <DialogTitle id="form-dialog-title">
              Do you want to mark this complaint as processing?
            </DialogTitle>
            <DialogContentText>{`Complaint: ${props.title}`}</DialogContentText>

            <DialogActions className={classes.buttons}>
              <Button
                fullWidth
                onClick={props.onConfirm}
                className={classes.confirm}
              >
                Confirm
              </Button>
              <Button
                fullWidth
                onClick={props.onClose}
                className={classes.cancel}
              >
                Cancel
              </Button>
            </DialogActions>
          </DialogContent>
        </Dialog>
      );

    if (AlertType === "processing")
      return (
        <Dialog
          open={props.open}
          onClose={props.onClose}
          aria-labelledby="form-dialog-title"
          className={classes.dialogBox}
        >
          <DialogContent className={classes.alertContainer}>
            <DialogContent className={classes.IconCon}>
              <HelpOutline className={classes.Icon} />
            </DialogContent>
            <DialogTitle id="form-dialog-title">
              Do you want to ask for COFIRMATION?
            </DialogTitle>
            <DialogContentText>{`Complaint: ${props.title}`}</DialogContentText>

            <DialogActions className={classes.buttons}>
              <Button
                fullWidth
                onClick={props.onConfirm}
                className={classes.confirm}
              >
                Confirm
              </Button>
              <Button
                fullWidth
                onClick={props.onClose}
                className={classes.cancel}
              >
                Cancel
              </Button>
            </DialogActions>
          </DialogContent>
        </Dialog>
      );
  };

  return <div className={classes.Alert}>{DisplayAlert()}</div>;
}

export default Alert;
