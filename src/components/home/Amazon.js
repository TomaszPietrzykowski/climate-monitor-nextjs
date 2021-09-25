import React from "react"
import Link from "next/link"
import { makeStyles } from "@material-ui/styles"
import { Button } from "@material-ui/core"
import { useInView } from "react-intersection-observer"
import { Spring, animated, config } from "react-spring"

const useStyles = makeStyles((theme) => ({
  hero: {
    backgroundImage: `url("/amazon.jpg")`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    width: "100%",
    fontWeight: 300,
    fontFamily: "Poppins",
    letterSpacing: 1,
    position: "relative",
    "&::after": {
      content: '""',
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      background: theme.palette.common.darkGreen,
      opacity: 0.65,
      mixBlendMode: "multiply",
      zIndex: 1,
    },
    [theme.breakpoints.down("md")]: {
      backgroundPosition: "left",
    },
  },
  siteContainer: {
    maxWidth: 1400,
    margin: "auto",
  },
  flexContainer: {
    display: "flex",
    justifyContent: "space-between",
    minHeight: "600px",
    alignItems: "center",
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
      padding: "1rem",
    },
  },
  tabLeft: {
    display: "flex",
    flexDirection: "column",
    marginLeft: "3rem",
    textAlign: "left",
    alignItems: "flex-start",
    zIndex: 2,
    [theme.breakpoints.down("md")]: {
      marginLeft: 0,
      marginTop: "6rem",
      textAlign: "center",
      alignItems: "flex-end",
    },
  },
  tabRight: {
    display: "flex",
    flexDirection: "column",
    marginRight: "3rem",
    textAlign: "right",
    alignItems: "flex-end",
    zIndex: 2,
    [theme.breakpoints.down("md")]: {
      marginRight: 0,
      marginTop: "6rem",
      marginBottom: "6rem",
      textAlign: "center",
      alignItems: "flex-end",
    },
  },
  text: {
    fontSize: "1.2rem",
    fontWeight: 200,
    color: "white",
    textShadow: "0px 0px 15px rgba(0, 0, 0, 1)",
    marginTop: "1rem",
    lineHeight: 1.5,
    [theme.breakpoints.down("xs")]: {
      fontSize: "0.9rem",
    },
  },
  title: {
    fontFamily: "Poppins, sans",
    fontSize: "2.8rem",
    color: "white",
    [theme.breakpoints.down("xs")]: {
      fontSize: "1.6rem",
    },
  },
  btn: {
    ...theme.typography.tab,
    color: "white",
    borderRadius: "50px",
    fontSize: "1.2rem",
    letterSpacing: 2,
    border: "3px solid white",
    textTransform: "uppercase",
    padding: "0.6rem 3rem",
    marginTop: "3rem",
    marginLeft: 0,
    marginRight: "0rem",
    transition: "all .3s ease",
    "&:hover": {
      color: theme.palette.primary.dark,
      background: "white",
      transition: "all .2s ease",
    },
    [theme.breakpoints.down("xs")]: {
      padding: "0.2rem 1rem",
      fontSize: "0.8rem",
      fontWeight: 500,
    },
  },
}))

const Amazon = ({ setValue }) => {
  const classes = useStyles()
  const [ref1, inView1] = useInView({
    triggerOnce: true,
    trigger: 1,
  })
  const [ref2, inView2] = useInView({
    triggerOnce: true,
    trigger: 1,
  })

  return (
    <div className={classes.hero}>
      <div className={classes.siteContainer}>
        <div className={classes.flexContainer}>
          <div className={classes.tabLeft}>
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
                  <div className={classes.title}>Climate News</div>
                  <div className={classes.text}>
                    Latest news on climate change,
                    <br />
                    actions and challanges we take on
                    <br />
                    in our effort to stabilize climate.
                  </div>
                  <Link href="/news">
                    <Button className={classes.btn} variant="outlined">
                      Newsfeed
                    </Button>
                  </Link>
                </animated.div>
              )}
            </Spring>
          </div>
          <div className={classes.tabRight}>
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
                  <div className={classes.title}>Public API</div>
                  <div className={classes.text}>
                    Climate data just milliseconds away.
                    <br />
                    Free to use, rich public API <br />
                    with most crucial climate factors.
                  </div>
                  <Link href="/public_api">
                    <Button className={classes.btn} variant="outlined">
                      Documentation
                    </Button>
                  </Link>
                </animated.div>
              )}
            </Spring>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Amazon
