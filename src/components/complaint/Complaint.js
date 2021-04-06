import React, { useState, useEffect } from "react";
//import  material UI components
import { Card, CardContent, Button, Typography } from "@material-ui/core";
// import icons
import { ArrowDropUp } from "@material-ui/icons";
//import Alert
import Alert from "../alertBox/Alert";
// import makeStyles
import { makeStyles } from "@material-ui/core/styles";
//import image for testing
import bicyleImg from "./Bicycle.png";
// import custom COLOR library
import { COLOR } from "../../theme/Color";

function Complaint(props) {
  const [complaintType, setComplaintType] = useState(props.type);
  useEffect(() => setComplaintType(props.type), [props.type]);

  const [showLess, setShowLess] = useState(true);
  const desc = props.desc;

  // State -> Setter
  // setState -> Getter

  // State for open and closenDialog
  const [Open, setOpen] = useState(false);
  // Open Dialog
  const OpenHandle = () => {
    setOpen(true);
  };
  // Close Dialog
  const CloseHandle = () => {
    setOpen(false);
  };

  // State for open and closenDialog
  const [OpenReject, setOpenReject] = useState(false);
  // OpenReject Dialog
  const OpenRejectHandle = () => {
    setOpenReject(true);
  };
  // Close Dialog
  const CloseRejectHandle = () => {
    setOpenReject(false);
  };

  const statusColor = () => {
    switch (props.status) {
      case "Accepted":
        return (
          <Typography className={classes.caption}>
            Status: <span style={{ color: "#678d58" }}>{props.status}</span>
          </Typography>
        );
      case "Processing":
        return (
          <Typography className={classes.caption}>
            Status: <span style={{ color: "#0077b6" }}>{props.status}</span>
          </Typography>
        );

      case "Rejected":
        return (
          <Typography className={classes.caption}>
            Status: <span style={{ color: "red" }}>{props.status}</span>
          </Typography>
        )

      default:
        return (
          <Typography className={classes.caption}>
            Status: <span style={{ color: "#7d8597" }}>{props.status}</span>
          </Typography>
        );
    }
  };

  const rejectComment = () => {
    if(props.rejDesc != null){
      return(
        <Typography className={classes.caption}>
        Reject Comment: <span style={{ fontWeight: 'normal' }}> {props.rejDesc}</span>
      </Typography>
      )
    }
    else{
      return "";
    }
  }

  const renderButtons = () => {
    if (!complaintType || complaintType === "Open")
      return (
        <React.Fragment>
          {/* Accept Button */}
          <Button
            disableRipple
            variant="contained"
            color="primary"
            className={classes.btn}
            onClick={OpenHandle}
          >
            Accept
          </Button>
          <Alert
            open={Open}
            onClose={CloseHandle}
            Type={props.status}
            btnType={"Confirm"}
            title={props.title}
          />

          {/* Reject Button */}
          <Button
            disableRipple
            variant="contained"
            color="secondary"
            className={classes.btn}
            onClick={OpenRejectHandle}
          >
            Reject
          </Button>
          <Alert
            open={OpenReject}
            onClose={CloseRejectHandle}
            Type={props.status}
            btnType={"Reject"}
            title={props.title}
          />
        </React.Fragment>
      );

    if (complaintType === "Accepted")
      return (
        <React.Fragment>
          <Button
            disableRipple
            variant="contained"
            color="primary"
            className={classes.btn}
            onClick={OpenHandle}
          >
            Mark in progress
          </Button>
          <Alert
            open={Open}
            onClose={CloseHandle}
            Type={props.status}
            title={props.title}
          />
        </React.Fragment>
      );

    if (complaintType === "Processing")
      return (
        <React.Fragment>
          <Button
            disableRipple
            variant="contained"
            color="secondary"
            className={classes.btn}
            onClick={OpenHandle}
          >
            Ask to confirm
          </Button>
          <Alert
            open={Open}
            onClose={CloseHandle}
            Type={props.status}
            title={props.title}
          />
        </React.Fragment>
      );

    if (complaintType === "Closed") return null;
  };

  const classes = useStyles();
  return (
    <div>
      <Card className={classes.container}>
        <CardContent className={classes.content}>
          <CardContent className={classes.userPref}>
            <Button>User</Button>
            <CardContent className={classes.upvotes}>
              <ArrowDropUp fontSize="large" />
              <Typography>11</Typography>
            </CardContent>
          </CardContent>

          <CardContent className={classes.details}>
            <Typography variant="h4" className={classes.heading}>
              {props.title}{" "}
            </Typography>
            <img className={classes.media} src={bicyleImg} alt="" />
            <Typography>
              {showLess ? `${desc.slice(0, 70)}...` : desc}
            </Typography>
            <Typography
              className={classes.desc}
              style={{}}
              onClick={() => setShowLess(!showLess)}
            >
              View {showLess ? "More" : "Less"}
            </Typography>
            <Typography className={classes.caption}>
              Department: <span className={classes.dept}> {props.dept}</span>
            </Typography>
            {statusColor()}
            <Typography className={classes.caption}>
              Date: {props.date}
            </Typography>
            {rejectComment()}

          </CardContent>

          <CardContent className={classes.medDet}></CardContent>
        </CardContent>

        <CardContent className={classes.check}>{renderButtons()}</CardContent>
      </Card>
    </div>
  );
}

export default Complaint;

// styles
const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: "20px",
    width: "700px",
    height: "100%",
    padding: "0",
    backgroundColor: "#F5EBEB",
    // maxWidth: "700px",
    // minWidth: "490px",
  },
  content: {
    display: "flex",
    height: "100%",
    margin: "0",
    padding: "0",
  },
  userPref: {
    display: "flex",
    flexDirection: "column",
    width: "10%",
  },
  upvotes: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "1.5px",
  },
  details: {
    width: "90%",
    // height:'100%'
  },
  heading: {
    // fontWeight: "bold",
    marginBottom: "10px",
  },
  caption: {
    fontSize: "15px",
    fontWeight: "bold",
  },
  desc: {
    cursor: "pointer",
    color: "blue",
    marginBottom: "10px",
  },
  dept: {
    // color: "red",
    textDecoration: 'underline'
  },

  media: {
    minHeight: "160px",
    maxHeight: "300px",
    maxWidth: "300px",
    minWidth: "160px",
    marginBottom: "10px",
  },
  check: {
    width: "200px",
    height: "40px",
    marginLeft: "110px",
    display: "flex",
    padding: "0",
    marginBottom: "0",
  },
  btn: {
    margin: "2px",
  },
}));
