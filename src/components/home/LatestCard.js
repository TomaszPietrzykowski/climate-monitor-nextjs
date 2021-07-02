import React from "react"
import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles((theme) => ({
  root: {
    background: "#fcfcfc",
    textAlign: "left",
    fontFamily: "Poppins",
    minWidth: "28%",
    fontWeight: 300,
    color: theme.palette.text.secondary,
    borderRadius: 20,
    boxShadow:
      "-10px -10px 20px rgba(255,255,255,.8), 10px 10px 30px rgba(0,0,0,.03)",
    [theme.breakpoints.down("md")]: {
      fontSize: "0.8rem",
      minWidth: "auto",
    },
  },
  content: {
    padding: "4rem",
  },
  label: {
    fontSize: "1.6rem",
    [theme.breakpoints.down("md")]: {
      fontSize: "1rem",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "0.85rem",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "0.75rem",
    },
  },
  value: {
    display: "flex",
    alignItems: "flex-end",
    justifyContent: "flex-start",
    fontSize: "3rem",
    color: theme.palette.primary.dark,

    margin: "2rem 0 0",
    [theme.breakpoints.down("md")]: {
      fontSize: "1.4rem",
      margin: "0.5rem 0rem",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "1.2rem",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "1rem",
    },
  },
  smallFlex: {
    display: "flex",
    alignItems: "flex-end",
    justifyContent: "center",
  },
  ppm: {
    fontSize: "1.4rem",
    marginLeft: "0.2rem",
    paddingBottom: "0.6rem",
    [theme.breakpoints.down("md")]: {
      fontSize: "0.7rem",
      paddingBottom: "0.2rem",
    },
  },
  date: {
    fontSize: "1rem",
    color: "#c3c3c3",
    fontWeight: 200,
  },
}))

const LatestCard = ({ latest, labelText, index }) => {
  const classes = useStyles()

  return (
    <section className={classes.root}>
      <div className={classes.content}>
        <div className={classes.label}>{labelText}</div>
        <div className={classes.date}>{latest.labels[index + 1]}</div>
        <div className={classes.value}>
          <div className={classes.smallFlex}>
            <span>{latest.values[index + 1].toFixed(2)} </span>
            <span className={classes.ppm}>ppm</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default LatestCard
