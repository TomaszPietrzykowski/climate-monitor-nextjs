import React from "react";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles((theme) => ({
  container: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    backgroundColor: theme.palette.text.secondary,
    zIndex: 1500,
  },
  tag: {
    padding: "0.1rem 2rem",
    fontFamily: "Poppins",
    textDecoration: "none",
    fontSize: "0.6rem",
    letterSpacing: 0.5,
    color: "white",
    cursor: "pointer",
    "&:hover": {
      color: theme.palette.primary.main,
    },
  },
}));

const DevTag = () => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <a
        className={classes.tag}
        href="https://github.com/TomaszPietrzykowski"
        rel="noopener noreferrer"
        target="_blank"
      >
        {"<Developer />"}
      </a>
    </div>
  );
};

export default DevTag;
