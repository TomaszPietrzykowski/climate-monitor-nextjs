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
    minHeight: "500px",
    [theme.breakpoints.down("md")]: {
      backgroundPosition: "left",
    },
  },
  siteContainer: {
    maxWidth: 1300,
    margin: "auto",
  },
  flexContainer: {
    display: "flex",
    justifyContent: "space-between",
    minHeight: "500px",
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
    [theme.breakpoints.down("md")]: {
      marginRight: 0,
      marginTop: "6rem",
      marginBottom: "6rem",
      textAlign: "center",
      alignItems: "flex-end",
    },
  },
  text: {
    fontFamily: "Poppins, sans",
    fontSize: "1rem",
    fontWeight: 400,
    color: "white",
    textShadow: "0px 0px 15px rgba(0, 0, 0, 1)",
    marginTop: "1rem",
    lineHeight: "1.5rem",
    [theme.breakpoints.down("xs")]: {
      fontSize: "0.9rem",
    },
  },
  title: {
    fontFamily: "Poppins, sans",
    fontSize: "2rem",
    color: "white",
    textShadow: "0px 0px 4px rgba(0, 0, 0, 1)",
    [theme.breakpoints.down("xs")]: {
      fontSize: "1.6rem",
    },
  },
  btn: {
    ...theme.typography.tab,
    borderRadius: "50px",
    color: "white",
    fontFamily: "Poppins, sans",
    fontSize: "0.95rem",
    border: "2px solid white",
    textTransform: "none",
    marginTop: "2rem",
    marginLeft: "0rem",
    marginRight: "0rem",
    padding: "0.3rem 1.5rem",
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
                    <Button
                      className={classes.btn}
                      variant="outlined"
                      onClick={() => setValue(2)}
                    >
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
                    <Button
                      className={classes.btn}
                      variant="outlined"
                      onClick={() => setValue(5)}
                    >
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
