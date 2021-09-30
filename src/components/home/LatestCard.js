import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import CalIcon from "@material-ui/icons/CalendarTodayRounded"

const useStyles = makeStyles((theme) => ({
  root: {
    textAlign: "left",
    fontFamily: "Poppins",
    minWidth: "28%",
    fontWeight: 300,
    color: theme.palette.text.secondary,
    [theme.breakpoints.down("md")]: {
      fontSize: "0.8rem",
      minWidth: "auto",
    },
  },
  content: {
    padding: "1rem 4rem",
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
    letterSpacing: 1,
  },
  calIcon: {
    color: theme.palette.secondary.light,
    opacity: 0.3,
    fontSize: "1.8rem",
    marginLeft: -3,
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
          CO<sub>2</sub> for {latest.labels[index + 1].replaceAll("-", "/")}
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
