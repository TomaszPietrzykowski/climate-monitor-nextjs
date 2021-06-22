import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import Card from "@material-ui/core/Card"
import CardContent from "@material-ui/core/CardContent"
import Hidden from "@material-ui/core/Hidden"
import { Spring } from "react-spring"

const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: "32%",
    textAlign: "center",
    fontFamily: "Poppins",
    color: theme.palette.text.secondary,
    boxShadow: "none",
    [theme.breakpoints.down("md")]: {
      fontSize: "0.8rem",
      minWidth: "auto",
    },
  },
  content: {
    padding: "0.3rem",
  },
  label: {
    fontSize: "1.2rem",
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
    justifyContent: "center",
    fontSize: "2rem",

    margin: "1rem 0rem",
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
    fontWeight: 500,
  },
  ppm: {
    fontSize: "1rem",
    marginLeft: "0.2rem",
    paddingBottom: "0.3rem",
    [theme.breakpoints.down("md")]: {
      fontSize: "0.7rem",
      paddingBottom: "0.2rem",
    },
  },
  date: {
    fontSize: "1rem",
    [theme.breakpoints.down("sm")]: {
      fontSize: "0.7rem",
    },
  },
}))

const LatestCard = ({ latest, labelText, index }) => {
  const classes = useStyles()

  return (
    <Card className={classes.root}>
      <CardContent className={classes.content}>
        <div className={classes.label}>
          <Hidden mdDown>
            Corresponding reading <br />{" "}
          </Hidden>
          {labelText}:
        </div>
        <div className={classes.value}>
          <Spring
            from={{ opacity: 0 }}
            to={{ opacity: 1 }}
            config={{ delay: 500 + index * 1000, duration: 1500 }}
          >
            {(props) => (
              <div style={props} className={classes.smallFlex}>
                <span>{latest.values[index + 1].toFixed(2)} </span>
                <span className={classes.ppm}>ppm</span>
              </div>
            )}
          </Spring>
        </div>
        <div className={classes.date}>
          <Hidden mdDown>value for: </Hidden>
          {latest.labels[index + 1]}
        </div>
      </CardContent>
    </Card>
  )
}

export default LatestCard
