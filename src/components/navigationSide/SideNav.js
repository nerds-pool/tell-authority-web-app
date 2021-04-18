import React from "react";
import { Link } from "react-router-dom";
import { Typography, CardContent, InputLabel } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Explore } from "@material-ui/icons";
import { COLOR } from "../../theme/Color";

const useStyle = makeStyles((theme) => ({
  container: {
    backgroundColor: COLOR.platinum1,
  },
  heading: {
    width: "80%",
    marginBottom: theme.spacing(4),
  },
  links: {
    display: "flex",
    flexDirection: "column",
    flexWrap: "wrap",
    marginTop: theme.spacing(5),
  },
  link: {
    textDecoration: "none",
    width: "100%",
    color: COLOR.black,
    paddingTop: "10px",

    fontWeight: "bold",
    "&:hover": {
      textDecoration: `underline 2px solid ${COLOR.claret}`,
      borderRadius: "5px",
    },
    "&:active": {
      color: COLOR.black,
      outline: 0,
      border: "none",
    },
    "&:focus": {
      outline: 0,
      border: "none",
    },
  },
  list: {
    paddingLeft: "20px",
    fontWeight: "normal",
  },
}));

const SideNav = () => {
  const classes = useStyle();
  return (
    <div className={classes.container}>
      <CardContent className={classes.links}>
        <div className={classes.heading}>
          <InputLabel>
            <h2>
              <Explore />
              &nbsp;Menu
            </h2>
          </InputLabel>
        </div>
        <Typography className={classes.link} component={Link} to="/">
          Dashboard
        </Typography>
        <Typography className={classes.link} style={{ textDecoration: "none" }}>
          Complaints
        </Typography>
        <Typography
          className={`${classes.link} ${classes.list}`}
          component={Link}
          to="/acceptedList"
        >
          Accepted
        </Typography>
        <Typography
          className={`${classes.link} ${classes.list}`}
          component={Link}
          to="/ongoingList"
        >
          Ongoing
        </Typography>
        <Typography
          className={`${classes.link} ${classes.list}`}
          component={Link}
          to="/closedList"
        >
          Closed
        </Typography>
        <Typography
          className={`${classes.link} ${classes.list}`}
          component={Link}
          to="/rejectedList"
        >
          Rejected
        </Typography>
      </CardContent>
    </div>
  );
};

export default SideNav;
