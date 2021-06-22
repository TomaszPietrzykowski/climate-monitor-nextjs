import React from "react"
import { makeStyles } from "@material-ui/styles"
import Card from "@material-ui/core/Card"
import CardContent from "@material-ui/core/CardContent"
import { Spring } from "react-spring"

const useStyles = makeStyles((theme) => ({
  flexContainer: {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "flex-end",
    [theme.breakpoints.down("sm")]: {
      justifyContent: "center",
    },
  },
  root: {
    minWidth: 275,
    textAlign: "center",
    margin: "auto",
    marginTop: "4rem",
    fontFamily: "Poppins",
    color: theme.palette.text.secondary,
    boxShadow: "none",
    [theme.breakpoints.down("sm")]: {
      minWidth: "auto",
      marginTop: "2rem",
    },
  },
  cardContent: {
    [theme.breakpoints.down("xs")]: {
      padding: ".5rem",
      "&:last-child": {
        paddingBottom: "1rem",
      },
    },
  },
  label: {
    fontSize: "1.3rem",
    fontWeight: 500,
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
  labelSecondary: {
    fontSize: "1.2rem",
    fontWeight: 500,
    [theme.breakpoints.down("md")]: {
      fontSize: "1rem",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "0.85rem",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "0.7rem",
    },
  },
  value: {
    display: "flex",
    alignItems: "flex-end",
    justifyContent: "center",
    fontSize: "3rem",
    fontWeight: 400,
    marginTop: "1.3rem",
    marginBottom: "1.3rem",
    color: theme.palette.primary.main,
    [theme.breakpoints.down("md")]: {
      fontSize: "2.7rem",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "2rem",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "1.5rem",
    },
  },
  valueSecondary: {
    display: "flex",
    alignItems: "flex-end",
    justifyContent: "center",
    fontSize: "2rem",
    fontWeight: 400,
    marginTop: "0.5rem",
    marginBottom: "1rem",
    color: theme.palette.primary.main,
    [theme.breakpoints.down("md")]: {
      fontSize: "1.6rem",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "1.2rem",
    },
  },
  ppm: {
    fontSize: "1.3rem",
    fontWeight: 400,
    paddingBottom: "0.65rem",
    marginLeft: "1rem",
    [theme.breakpoints.down("md")]: {
      fontSize: "1rem",
      marginLeft: "0.5rem",
      paddingBottom: "0.6rem",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "0.8rem",
      paddingBottom: "0.3rem",
    },
  },
  ppmSecondary: {
    fontSize: "1rem",
    fontWeight: 400,
    marginLeft: "0.6rem",
    paddingBottom: "0.3rem",
    [theme.breakpoints.down("md")]: {
      fontSize: "0.85rem",
      marginLeft: "0.2rem",
      paddingBottom: "0.3rem",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "0.75rem",
      paddingBottom: "0.2rem",
    },
  },
  date: {
    fontSize: "1.3rem",
    fontWeight: 500,
    [theme.breakpoints.down("md")]: {
      fontSize: "1rem",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "0.85rem",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "0.7rem",
    },
  },
}))

const LatestPrimaryCard = ({ latest }) => {
  const classes = useStyles()

  return (
    <div className={classes.flexContainer}>
      <Card className={classes.root}>
        <CardContent className={classes.cardContent}>
          <div className={classes.label}>Current atmospheric CO2:</div>
          <div className={classes.value}>
            <Spring
              from={{ number: 0 }}
              to={{ number: latest.values[0] }}
              config={{ tension: 300, friction: 100 }}
            >
              {(props) => <div style={props}>{props.number.toFixed(2)} </div>}
            </Spring>
            <Spring
              from={{ opacity: 0 }}
              to={{ opacity: 1 }}
              config={{
                delay: 3000,
                duration: 1200,
              }}
            >
              {(props) => (
                <div style={props} className={classes.ppm}>
                  {" "}
                  ppm
                </div>
              )}
            </Spring>
          </div>
          <div className={classes.date}>value for: {latest.labels[0]}</div>
        </CardContent>
      </Card>
      <Card className={classes.root}>
        <CardContent className={classes.cardContent}>
          <div className={classes.labelSecondary}>Trend for the date:</div>
          <div className={classes.valueSecondary}>
            <Spring
              from={{ number: 0 }}
              to={{ number: latest.trend[0] }}
              config={{ tension: 200, friction: 100 }}
            >
              {(props) => <div style={props}>{props.number.toFixed(2)} </div>}
            </Spring>
            <Spring
              from={{ opacity: 0 }}
              to={{ opacity: 1 }}
              config={{
                delay: 3500,
                duration: 1200,
              }}
            >
              {(props) => (
                <div style={props} className={classes.ppmSecondary}>
                  {" "}
                  ppm
                </div>
              )}
            </Spring>
          </div>
          <div className={classes.labelSecondary}>Increase since 1800:</div>
          <div className={classes.valueSecondary}>
            <Spring
              from={{ number: 0 }}
              to={{ number: parseFloat(latest.values[0] - 292.9).toFixed(2) }}
              config={{ delay: 3500, tension: 450, friction: 100 }}
            >
              {(props) => <div style={props}>{props.number.toFixed(2)} </div>}
            </Spring>
            <Spring
              from={{ opacity: 0 }}
              to={{ opacity: 1 }}
              config={{
                delay: 4800,
                duration: 1000,
              }}
            >
              {(props) => (
                <div style={props} className={classes.ppmSecondary}>
                  {" "}
                  ppm
                </div>
              )}
            </Spring>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default LatestPrimaryCard
