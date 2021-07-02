import React from "react"
import { makeStyles } from "@material-ui/styles"
import Card from "@material-ui/core/Card"
import CardContent from "@material-ui/core/CardContent"
import { useSpring, animated } from "react-spring"
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
    border: "1px solid blue",
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
    justifyContent: "flex-start",
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
    opacity: 0,
    animation: "$fadeIn 3s ease 2s forwards",
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
  "@keyframes fadeIn": {
    "0%": { opacity: 0 },
    "100%": { opacity: 1 },
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
  const props = useSpring({
    val: latest.values[0],
    from: { val: 0 },
    config: { mass: 5, tension: 400, friction: 150, clamp: true },
  })
  return (
    <div className={classes.flexContainer}>
      <Card className={classes.root}>
        <CardContent className={classes.cardContent}>
          <div className={classes.label}>Current earth CO2:</div>
          <div className={classes.value}>
            <animated.div className="number">
              {props.val.to((val) => val.toFixed(2))}
            </animated.div>
            <div className={classes.ppm}>&nbsp;ppm</div>
          </div>
        </CardContent>
      </Card>
      {/* -------------------------------------------------------------- TODO ANIMATIONS */}
      <Card className={classes.root}>
        <CardContent className={classes.cardContent}>
          <div className={classes.labelSecondary}>Trend for the date:</div>
          <div className={classes.valueSecondary}>
            <div>
              {latest.trend[0]}
              <span className={classes.ppmSecondary}> ppm</span>
            </div>
          </div>
          <div className={classes.labelSecondary}>Increase since 1800:</div>
          <div className={classes.valueSecondary}>
            <div>
              {parseFloat(latest.values[0] - 292.9).toFixed(2)}
              <span className={classes.ppmSecondary}> ppm</span>
            </div>
          </div>
          {/* ------------------------------------------------------- TODO END */}
        </CardContent>
      </Card>
    </div>
  )
}

export default LatestPrimaryCard
