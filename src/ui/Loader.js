import React from "react";
import loader from "../../assets/loader.gif";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles((theme) => ({
  containerStyle: {
    width: "100%",
    height: "30vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: "50vh"
  },
  spinnerStyle: {
    height: "4rem",
    margin: "2rem",
  },
  label: {
    ...theme.typography.tab,
    color: theme.palette.primary.dark,
    fontSize: "1.2rem",
    fontWeight: 400,
    letterSpacing: 1,
    marginTop: "2rem",
    [theme.breakpoints.down("sm")]: {
      fontSize: "1rem",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "0.85rem",
    },
  },
}));

const Loader = () => {
  const classes = useStyles();

  return (
    <div className={classes.containerStyle}>
      <h1 className={classes.label}>fetching data...</h1>
      <img
        src={loader}
        alt="fetching data..."
        className={classes.spinnerStyle}
      />
    </div>
  );
};

export default Loader;
