import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import CalIcon from "@material-ui/icons/CalendarTodayRounded"

const useStyles = makeStyles((theme) => ({
  root: {
    textAlign: "left",
    minWidth: "30%",
    color: theme.palette.text.secondary,
    [theme.breakpoints.down("md")]: {
      fontSize: "0.8rem",
      minWidth: "max-content",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "0.8rem",
    },
  },
  content: {
    padding: "1rem 2rem",
    [theme.breakpoints.down("sm")]: {
      padding: "0.5rem 0.5rem 0.5rem 0",
    },
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
    fontSize: "2.5rem",
    color: theme.palette.secondary.main,

    margin: ".5rem 0 0",
    [theme.breakpoints.down("md")]: {
      fontSize: "2.2rem",
      margin: "0.5rem 0rem",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "1.5rem",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "1.1rem",
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
    [theme.breakpoints.down("xs")]: {
      fontSize: "0.5rem",
      paddingBottom: "0.2rem",
    },
  },
  date: {
    fontSize: "1rem",
    color: "#c3c3c3",
    fontWeight: 200,
    letterSpacing: 1,
    [theme.breakpoints.down("sm")]: {
      fontSize: "0.7rem",
    },
  },
  calIcon: {
    color: theme.palette.secondary.light,
    opacity: 0.3,
    fontSize: "1.8rem",
    marginLeft: -3,
    [theme.breakpoints.down("xs")]: {
      fontSize: "1.2rem",
      paddingBottom: "0.2rem",
      opacity: 0.2,
    },
  },
  hide: {
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
  },
}))

const LatestCard = ({ latest, labelText, index }) => {
  const classes = useStyles()

  return (
    <section className={classes.root}>
      <div className={classes.content}>
        <CalIcon className={classes.calIcon} />
        <div className={classes.label}>{labelText}</div>
        <div className={classes.date}>
          <span className={classes.hide}>
            CO<sub>2</sub> for{" "}
          </span>
          {latest.labels[index + 1].replaceAll("-", "/")}
        </div>
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
