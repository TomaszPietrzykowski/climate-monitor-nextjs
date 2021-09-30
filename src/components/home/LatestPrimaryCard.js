import React from "react"
import { makeStyles } from "@material-ui/styles"
import Card from "@material-ui/core/Card"
import CardContent from "@material-ui/core/CardContent"
import ChartIcon from "@material-ui/icons/BarChartRounded"
import LineIcon from "@material-ui/icons/Timeline"
import IndIcon from "@material-ui/icons/TrendingUp"
import { useSpring, animated } from "react-spring"

const useStyles = makeStyles((theme) => ({
  flexContainer: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr 1fr",
    fontFamily: "Poppins",
    letterSpacing: 0.5,
    fontWeight: 300,
    // paddingBottom: "4rem",
    [theme.breakpoints.down("sm")]: {
      justifyContent: "center",
    },
  },
  root: {
    margin: "2rem",
    // marginTop: "2rem",
    padding: "0 2rem 3rem",
    color: theme.palette.text.secondary,
    boxShadow: "none",
    borderRadius: 0,
  },
  cardContent: {
    // minWidth: 350,
  },
  label: {
    fontSize: "1.6rem",
    opacity: 0,
    animation: "$fadeIn ease 2s forwards",
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
  label2: {
    color: "#c3c3c3",
    fontSize: "1.2rem",
    fontWeight: 100,
    opacity: 0,
    marginBottom: "1rem",
    animation: "$fadeIn 1s ease 1s forwards",
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
    // fontWeight: 500,
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
    fontSize: "4.5rem",
    color: theme.palette.primary.main,
    opacity: 0,
    animation: "$fadeIn ease 2s forwards",
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
    justifyContent: "flex-start",
    fontSize: "2.5rem",
    // marginTop: "0.5rem",
    // marginBottom: "1rem",
    color: theme.palette.primary.main,
    [theme.breakpoints.down("md")]: {
      fontSize: "1.6rem",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "1.2rem",
    },
  },
  ppm: {
    fontSize: "1.6rem",
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
  separator: {
    height: "3rem",
  },
  chartIcon: {
    fontSize: "5rem",
    margin: "0 0 0 -1rem",
    color: theme.palette.secondary.light,
    opacity: 0.2,
  },
  lineIcon: {
    fontSize: "2.5rem",
    color: theme.palette.secondary.light,
    opacity: 0.2,
  },
  indIcon: {
    fontSize: "2.5rem",
    color: theme.palette.secondary.light,
    opacity: 0.2,
  },
}))

const LatestPrimaryCard = ({ latest, methane }) => {
  const classes = useStyles()
  const props = useSpring({
    val: latest.values[0],
    from: { val: 300 },
    config: { duration: 2000 },
    // config: { mass: 5, tension: 400, friction: 150, clamp: true },
  })
  const props0 = useSpring({
    to: { opacity: 1 },
    from: { opacity: 0 },
    config: { duration: 1500 },
  })
  const props1 = useSpring({
    to: { opacity: 1 },
    from: { opacity: 0 },
    delay: 1000,
    config: { duration: 2500 },
  })
  const props2 = useSpring({
    to: { opacity: 1 },
    from: { opacity: 0 },
    delay: 1500,
    config: { duration: 2500 },
  })
  const props3 = useSpring({
    to: { opacity: 1 },
    from: { opacity: 0 },
    delay: 2000,
    config: { duration: 2500 },
  })
  const props4 = useSpring({
    to: { opacity: 1 },
    from: { opacity: 0 },
    delay: 2500,
    config: { duration: 2500 },
  })
  return (
    <div className={classes.flexContainer}>
      <Card className={classes.root}>
        <CardContent className={classes.cardContent}>
          <ChartIcon className={classes.chartIcon} />
          <div className={classes.label}>Latest Earth CO2</div>
          <div className={classes.label2}>Value for {latest.labels[0]}</div>
          <div className={classes.value}>
            <animated.div className="number" style={props0}>
              {props.val.to((val) => val.toFixed(2))}
            </animated.div>
            <div className={classes.ppm}>ppm</div>
          </div>
        </CardContent>
      </Card>
      {/* -------------------------------------------------------------- TODO ANIMATIONS */}
      <Card className={classes.root}>
        <CardContent className={classes.cardContent}>
          <animated.div style={props1}>
            <LineIcon className={classes.lineIcon} />
            <div className={classes.labelSecondary}>Trend for the date:</div>
            <div className={classes.valueSecondary}>
              <div>
                {latest.trend[0]}
                <span className={classes.ppmSecondary}>ppm</span>
              </div>
            </div>
          </animated.div>
          <div className={classes.separator} />
          <animated.div style={props2}>
            <IndIcon className={classes.indIcon} />
            <div className={classes.labelSecondary}>Increase since 1800:</div>
            <div className={classes.valueSecondary}>
              <div>
                {parseFloat(latest.values[0] - 292.9).toFixed(2)}
                <span className={classes.ppmSecondary}>ppm</span>
              </div>
            </div>
          </animated.div>
          {/* ------------------------------------------------------- TODO END */}
        </CardContent>
      </Card>
      <Card className={classes.root}>
        <CardContent className={classes.cardContent}>
          <animated.div style={props3}>
            <div className={classes.labelSecondary}>Latest methane:</div>
            <div
              className={classes.valueSecondary}
              // style={{ color: "#006600" }}
            >
              <div>
                {methane.values[methane.values.length - 1].toFixed(2)}
                <span className={classes.ppmSecondary}>ppb</span>
              </div>
            </div>
          </animated.div>

          <div className={classes.separator} />
          <animated.div style={props4}>
            <div className={classes.labelSecondary}>Methane trend:</div>
            <div
              className={classes.valueSecondary}
              // style={{ color: "#006600" }}
            >
              <div>
                {methane.trend[methane.trend.length - 1].toFixed(2)}
                <span className={classes.ppmSecondary}>ppb</span>
              </div>
            </div>
          </animated.div>
          {/* ------------------------------------------------------- TODO END */}
        </CardContent>
      </Card>
    </div>
  )
}

export default LatestPrimaryCard
