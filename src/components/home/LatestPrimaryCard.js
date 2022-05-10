import React from "react"
import { makeStyles } from "@material-ui/styles"
import Card from "@material-ui/core/Card"
import CardContent from "@material-ui/core/CardContent"
import ChartIcon from "@material-ui/icons/BarChartRounded"
import LineIcon from "@material-ui/icons/Timeline"
import IndIcon from "@material-ui/icons/TrendingUp"
import MethIcon from "@material-ui/icons/CloudQueue"
import InsiteIcon from "@material-ui/icons/Transform"
import { useSpring, animated } from "react-spring"

const useStyles = makeStyles((theme) => ({
  flexContainer: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr 1fr",
    letterSpacing: 0.5,
    [theme.breakpoints.down("sm")]: {
      gridTemplateColumns: "1fr 1fr",
    },
    [theme.breakpoints.down("xs")]: {
      gridTemplateColumns: "1fr",
    },
  },
  root: {
    margin: "2rem",
    padding: "0 2rem 2rem 1rem",
    color: theme.palette.text.secondary,
    boxShadow: "none",
    borderRadius: 0,
    [theme.breakpoints.down("lg")]: {
      margin: "1rem 0 1rem 2rem",
    },
    [theme.breakpoints.down("md")]: {
      padding: 0,
      "&:first-child": {
        paddingLeft: "1rem",
      },
    },
    [theme.breakpoints.down("sm")]: {
      "&:first-child": {
        paddingLeft: 0,
      },
      "&:last-child": {
        gridColumn: "span 2",
        [theme.breakpoints.down("xs")]: {
          gridColumn: "span 1",
        },
        "& > *": {
          display: "grid",
          gridGap: "2rem",
          gridTemplateColumns: "1fr 1fr",
          [theme.breakpoints.down("xs")]: {
            gridTemplateColumns: "1fr",
            gridGap: "1rem",
          },
        },
      },
    },
  },
  cardContent: {
    [theme.breakpoints.down("md")]: {
      padding: "1rem 1rem 0",
    },
    [theme.breakpoints.down("sm")]: {
      paddingInline: 0,
    },
    [theme.breakpoints.down("xs")]: {
      "&:last-child": {
        paddingBlock: 0,
      },
    },
  },
  label: {
    fontSize: "1.6rem",
    opacity: 0,
    animation: "$fadeIn ease 2s forwards",
    [theme.breakpoints.down("md")]: {
      fontSize: "1.1rem",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "1.3rem",
      lineHeight: 1,
    },
  },
  label2: {
    color: "#555555",
    fontSize: "1rem",
    fontWeight: 200,
    opacity: 0,
    marginBottom: "1rem",
    animation: "$fadeIn 1s ease 1s forwards",
    [theme.breakpoints.down("md")]: {
      fontSize: "0.85rem",
    },
    [theme.breakpoints.down("sm")]: {
      marginBottom: 0,
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
      fontSize: "3rem",
    },
  },

  // secondary
  labelSecondary: {
    fontSize: "1.1rem",
    [theme.breakpoints.down("md")]: {
      fontSize: "0.9rem",
    },
  },

  valueSecondary: {
    display: "flex",
    alignItems: "flex-end",
    justifyContent: "flex-start",
    fontSize: "2.5rem",
    color: theme.palette.secondary.main,
    [theme.breakpoints.down("md")]: {
      fontSize: "2rem",
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
  methane: {
    [theme.breakpoints.down("sm")]: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
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
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  chartIcon: {
    fontSize: "2.5rem",
    color: theme.palette.secondary.light,
    opacity: 0.3,
    marginLeft: -8,
  },
  lineIcon: {
    fontSize: "2.5rem",
    color: theme.palette.secondary.light,
    opacity: 0.3,
  },
  indIcon: {
    fontSize: "2.5rem",
    color: theme.palette.secondary.light,
    opacity: 0.3,
  },
  methIcon: {
    fontSize: "2.5rem",
    color: theme.palette.common.green,
    opacity: 0.2,
  },
}))

const LatestPrimaryCard = ({ latest, methane }) => {
  const classes = useStyles()
  const props = useSpring({
    val: latest.values[0],
    from: { val: 300 },
    config: { duration: 2000 },
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
          <div className={classes.label}>
            Latest Earth CO<sub>2</sub>
          </div>
          <div className={classes.label2}>
            Value for {latest.labels[0].replaceAll("-", "/")}
          </div>
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
            <div className={classes.labelSecondary}>
              CO<sub>2</sub> trend for date:
            </div>
            <div className={classes.valueSecondary}>
              <div>
                {latest.trend[0]}
                <span className={classes.ppmSecondary}>ppm</span>
              </div>
            </div>
          </animated.div>
          <animated.div style={props2}>
            <IndIcon className={classes.indIcon} />
            <div className={classes.labelSecondary}>
              CO<sub>2</sub> incr. since 1800:
            </div>
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
            <MethIcon className={classes.methIcon} />
            <div className={classes.labelSecondary}>Latest methane:</div>
            <div
              className={classes.valueSecondary}
              style={{ color: "#98ce00" }}
            >
              <div>
                {methane.values[methane.values.length - 1].toFixed(2)}
                <span className={classes.ppmSecondary}>ppb</span>
              </div>
            </div>
          </animated.div>
          <animated.div style={props4}>
            <InsiteIcon className={classes.methIcon} />
            <div className={classes.labelSecondary}>Methane trend:</div>
            <div
              className={classes.valueSecondary}
              style={{ color: "#98ce00" }}
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
