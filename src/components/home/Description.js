import React from "react"
import { makeStyles } from "@material-ui/styles"
import { useInView } from "react-intersection-observer"
import { Spring, animated, config } from "react-spring"

const useStyles = makeStyles((theme) => ({
  container: {
    fontWeight: 300,
    fontFamily: "Poppins",
    letterSpacing: 0.5,
    display: "flex",
    maxWidth: 1400,
    justifyContent: "space-between",
    margin: "10rem auto 14rem",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
      marginTop: 0,
    },
  },
  tab: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    padding: "2rem 0",
    margin: "3rem",
    color: theme.palette.text.secondary,
    height: "100%",
    [theme.breakpoints.down("md")]: {
      margin: "1rem",
      padding: "2rem 1rem",
    },
    [theme.breakpoints.down("xs")]: {
      padding: "2rem 0",
    },
  },
  title: {
    fontSize: "2rem",
    marginBottom: "2rem",
    [theme.breakpoints.down("md")]: {
      fontSize: "1.4rem",
      marginBottom: "1rem",
    },
  },
  text: {
    fontSize: "1.1rem",
    [theme.breakpoints.down("md")]: {
      fontSize: "1rem",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "0.9rem",
    },
  },
}))

const Description = () => {
  const classes = useStyles()
  const intersectionOptions = {
    triggerOnce: true,
    trigger: 1,
  }
  const [ref1, inView1] = useInView(intersectionOptions)
  const [ref2, inView2] = useInView(intersectionOptions)
  const [ref3, inView3] = useInView(intersectionOptions)

  return (
    <div className={classes.container}>
      <div className={classes.tab}>
        <Spring
          from={{ opacity: 0, marginTop: 30, marginBottom: -30 }}
          to={{
            opacity: inView1 ? 1 : 0,
            marginTop: inView1 ? 0 : 30,
            marginBottom: inView1 ? 0 : -30,
          }}
          config={config.gentle}
        >
          {(props) => (
            <animated.div style={props} ref={ref1}>
              <div className={classes.title}>Up to date</div>
              <div className={classes.text}>
                Climate Monitor database is being updated with recently
                published data of multiple origins, mainly NOAA and NASA public
                data servers. Datasets update runs in relation to the data
                scope. Narrow scope data, like daily readings are not more then
                hours old.
              </div>
            </animated.div>
          )}
        </Spring>
      </div>
      <div className={classes.tab}>
        <Spring
          from={{ opacity: 0, marginTop: 30, marginBottom: -30 }}
          to={{
            opacity: inView2 ? 1 : 0,
            marginTop: inView2 ? 0 : 30,
            marginBottom: inView2 ? 0 : -30,
          }}
          config={config.gentle}
        >
          {(props) => (
            <animated.div style={props} ref={ref2}>
              <div className={classes.title}>Comprehensive</div>
              <div className={classes.text}>
                Well over 40 different datasets, collection of data on the most
                important climate factors: levels of multiple atmospheric
                greenhouse gases, land and ocean temperatures, trends in ocean
                levels as well as condition of Arctica's and Antarctica's
                glaciers.
              </div>
            </animated.div>
          )}
        </Spring>
      </div>
      <div className={classes.tab}>
        <Spring
          from={{ opacity: 0, marginTop: 30, marginBottom: -30 }}
          to={{
            opacity: inView3 ? 1 : 0,
            marginTop: inView3 ? 0 : 30,
            marginBottom: inView3 ? 0 : -30,
          }}
          config={config.gentle}
        >
          {(props) => (
            <animated.div style={props} ref={ref3}>
              <div className={classes.title}>Accessible</div>
              <div className={classes.text}>
                Data collected over multiple sources, delivered to you in one
                place, served as an easy to read chart, as well as tabular or
                json data. Analize scope of your choice and compare factors. Use
                free Public API if you are up to something...
              </div>
            </animated.div>
          )}
        </Spring>
      </div>
    </div>
  )
}

export default Description
